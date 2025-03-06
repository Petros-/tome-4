import React, { useState } from 'react'
import TopNav from './TopNav'
import EmailForm from './auth/EmailForm'
import ArtworksList from './art-pages/ArtworksList'
import { auth, db } from './FirebaseConfig.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function Container() {
    const [user] = useAuthState(auth);


    return (
        <div className="flex flex-col min-h-screen w-full p-0">
            <TopNav />
            <div className="flex-grow">
                {user ? <ArtworksList /> : <EmailForm />}
            </div>
        </div>
    )
}

export default Container
