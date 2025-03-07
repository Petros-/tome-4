import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";


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
            } catch (error) {
                console.log("An error happened:", error);
                setHasError(true)
            } finally {
                setIsLoading(false);
            }
        };
        fetchArt();
        return () => onSnapshot;

    }, [user]);


    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (hasError) {
        return <h2>There was an error. Peter wrote this</h2>
    }

    return (
        <>
            <div className="grid grid-rows-4 gap-4 h-full w-full items-center px-12">
                <div className="border border-gray-200 bg-gray-50 rounded flex space-x-between w-full p-4 items-center">
                    <p className="flex flex-grow-1 ">Tome only really works if you add some art to it.</p>
                    <Link to="/new" >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add an artwork
                        </button>
                    </Link>
                </div>
                <div className="container m-auto grid grid-cols-3 gap-4 w-full">
                    {artworks.map((artwork) => {
                        return <div key={artwork.id} className="flex flex-col gap-2 items-center border border-gray-300 w-full rounded m-auto">
                            <div className="bg-blue-200 w-full h-48 flex justify-center items-center">
                                Image here
                            </div>
                            <Link to={`/artwork/${artwork.id}`}>{artwork.data().title} </Link> •
                            {artwork.data().createdAt?.toDate().toLocaleString()}
                            <Link to={`/edit/${artwork.id}`}><button>Edit</button></Link>
                            <button onClick={() => handleDelete(artwork.id)}>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default ArtworksList;