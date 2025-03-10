import React from 'react';
import './App.css'
import Container from './Container'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import ArtworkDetails from './art-pages/ArtworkDetails'
import NewArtwork from './art-pages/NewArtwork'
import EditArtwork from './art-pages/EditArtwork'
import EmailForm from "./auth/EmailForm";
import { auth } from "./FirebaseConfig"; 
import PropTypes from 'prop-types';

function ProtectedRoute({children}) {
  const [user] = useAuthState(auth)
  return user ? children : <Navigate to="/"/>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user? <Container /> : <EmailForm />} />
          <Route path="/artwork/:id" element={<ProtectedRoute><ArtworkDetails /></ProtectedRoute>} />
          <Route path="/new" element={<ProtectedRoute><NewArtwork /></ProtectedRoute>} />
          <Route path="/edit/:id" element={<ProtectedRoute><EditArtwork /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
