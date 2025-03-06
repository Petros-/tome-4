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
    const [subCollectionExists, setSubCollectionExists] = useState(false);

    // useEffect(() => {

    //     if (!user) {
    //         console.log("No authenticated user. Skipping Firestore request.");
    //         return;
    //     }

    //     console.log("Authenticated User ID:", user.uid);

    //     const checkForSub = async () => {
    //         try {
    //             const subcollectionRef = collection(db, 'accounts', user.uid, 'artworks');
    //             const querySnapshot = await getDocs(subcollectionRef);

    //             if (!querySnapshot.empty) {
    //                 console.log("User has a subcollection. Here are the documents:");
    //                 querySnapshot.forEach(doc => console.log(doc.id, doc.data()));
    //             } else {
    //                 console.log("Subcollection is empty.");
    //             }

    //             setSubCollectionExists(!querySnapshot.empty);
    //         } catch (error) {
    //             console.log("Problem checking for subcollection: ", error)
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     checkForSub();

    // }, [user]);

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

            <div className="absolute top-16 grid grid-rows-4 gap-4 h-full items-center">
                <Link to="/new" >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add an artwork
                    </button>
                </Link>
                {artworks.map((artwork) => {
                    return <div key={artwork.id} className="flex flex-row gap-3 items-center border border-gray-300 p-4"><Link to={`/artwork/${artwork.id}`} >{artwork.title}</Link>
                        {artwork.data().title} •
                        {artwork.data().createdAt?.toDate().toLocaleString()}
                        <Link to={`/edit/${artwork.id}`}><button>Edit</button></Link>
                        <button onClick={() => handleDelete(artwork.id)}>Delete</button>
                    </div>
                })}
            </div>
        </>
    )
}

export default ArtworksList;