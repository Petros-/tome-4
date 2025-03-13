import React, { useState, } from 'react';
import { useArtworks } from '../art-pages/ArtworksContext';
import TopNav from '../TopNav';
import Loader from '../fields/Loader';
import { auth } from '../FirebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams, Link, useNavigate } from 'react-router-dom';

function TagDetails() {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const { artworks } = useArtworks();
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-full min-h-screen">
                <Loader />
            </div>
        )
    }

    return (
        <div>
            <h1>{ }</h1>
            <div className="grid grid-rows-auto gap-4 w-full items-center px-12 pt-4">
                <div className="grid gap-4 xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full">
                    Artworks here
                </div>
            </div>

        </div>
    )
}

export default TagDetails
