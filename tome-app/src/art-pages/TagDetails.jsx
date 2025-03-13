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
    const { tags, taggedArtworks, isLoading } = useArtworks();
    const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

    if (loading || isLoading) {
        return (
            <div className="flex items-center justify-center w-full h-full min-h-screen">
                <Loader />
            </div>
        )
    }

    // Use a query to find the tag by id
    const tag = tags.find(tag => tag.id === id);

    if (!tag) {
        return <div className="text-center text-red-500 mt-10">Tag not found</div>;
    }

    return (
        <div className="flex flex-col min-h-screen w-full p-0">
            <TopNav />
            <div className="flex flex-col gap-8 p-20">
                <Link to="/tags" className="text-blue-500 text-left">All tags</Link>
                <h1 className="text-3xl text-left">{tag.name}</h1>
                <div className="grid grid-rows-auto gap-4 w-full items-center px-12 pt-4">
                    <div className="grid gap-4 xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 w-full">
                        {taggedArtworks[tag.id] && taggedArtworks[tag.id].length > 0 ? (
                            taggedArtworks[tag.id].map((artwork) => (
                                artwork ? (
                                    <div key={artwork.id} className="relative group">
                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full h-48 object-cover rounded-md shadow"
                                        />
                                        <p className="text-center mt-2">{artwork.title}</p>
                                    </div>
                                ) : null
                            ))
                        ) : (
                            <p className="text-gray-500">No artworks available for this tag.</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TagDetails
