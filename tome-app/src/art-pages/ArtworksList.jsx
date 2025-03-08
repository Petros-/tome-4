import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export const handleDelete = async (id, user, setArtworks) => {
    try {
        await deleteDoc(doc(db, 'accounts', user.uid, 'artworks', id));
        setArtworks(prevArtworks => prevArtworks.filter(artwork => artwork.id !== id));
        console.log("Deleted artwork:", id);
    } catch (error) {
        console.error("Error with the delete:", error)
    }
}

function ArtworksList() {
    const [user] = useAuthState(auth);
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {

        if (!user) {
            console.log("No authenticated user. Skipping Firestore request.");
            return;
        }

        const fetchArt = async () => {
            try {
                const q = query(collection(db, "accounts", user.uid, "artworks"), orderBy("createdAt"));

                onSnapshot(q, (doc) => {
                    setArtworks(doc.docs);
                });

                const unsubscribe = onSnapshot(q, (doc) => {
                    setArtworks(doc.docs);
                });

                return () => unsubscribe();

            } catch (error) {
                console.log("An error happened:", error);
                setHasError(true)
            } finally {
                setIsLoading(false);

            }

        };
        fetchArt();
    }, [user]);

    

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (hasError) {
        return <h2>There was an error. Peter wrote this. Peter, go figure it out.</h2>
    }

    return (
        <>
            <div className="grid grid-rows-auto gap-4 w-full items-center px-12 pt-4">
                <div className="border border-gray-200 bg-gray-50 rounded flex space-x-between w-full p-4 items-center">
                    <p className="flex flex-grow-1 ">You have {artworks.length} {artworks.length === 1 ? "artwork" : "artworks"} in Tome.</p>
                    <Link to="/new" >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add an artwork
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full">
                    {artworks.map((artwork) => {
                        return <div key={artwork.id} className="flex flex-col gap-2 items-center border border-gray-300 w-full rounded m-auto">
                            <Link to={`/artwork/${artwork.id}`} className="w-full">
                                <div className="w-full flex flex-col flex-shrink-0">
                                    <div className="w-full h-60 flex-shrink-0">
                                        <img src={artwork.data().image} alt={artwork.data().title} className="w-full h-full object-cover" />
                                    </div>
                                    {artwork.data().title}
                                </div>
                            </Link>
                            <div className="w-full flex flex-row gap-2 p-2">
                                <Link to={`/edit/${artwork.id}`}>
                                    <button
                                        className="border border-gray-400 hover:bg-blue-200 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Edit
                                    </button>
                                </Link>
                                <button
                                    onClick={() => handleDelete(artwork.id)}
                                    className="border border-gray-400 hover:bg-blue-200 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ArtworksList;