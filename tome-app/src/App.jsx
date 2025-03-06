import { useState } from 'react'
import './App.css'
import Container from './Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtworkDetails from './art-pages/ArtworkDetails'
import NewArtwork from './art-pages/NewArtwork'
import EditArtwork from './art-pages/EditArtwork'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/artwork/:id" element={<ArtworkDetails />} />
          <Route path="/new" element={<NewArtwork />} />
          <Route path="/edit/:id" element={<EditArtwork />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
