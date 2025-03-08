import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { auth, db } from '../FirebaseConfig';
import TopNav from "../TopNav";

function ArtworkDetails() {
    const user = auth.currentUser;
    const { id } = useParams();
    const [artwork, setArtwork] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    //show details
    useEffect(() => {

        if (!user) {
            console.log("No authenticated user. Skipping Firestore request.");
            return; // Exit early if user is not authenticated
        }

        const getData = async () => {



            try {
                const docRef = doc(db, "accounts", user.uid, "artworks", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setArtwork(docSnap.data())
                } else {
                    setHasError(true);
                }

                if (docSnap.exists()) {
                    setArtwork(docSnap.data());
                } else {
                    console.log("Didn't find that artwork");
                    setHasError(true);
                }

            } catch (error) {
                console.error("Updated error fetching document:", error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [id, user])

    console.log(artwork);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : hasError ? (
                <p>There was a problem loading the artwork.</p>
            ) : artwork ? (
                <div className="flex flex-col min-h-screen w-full p-0">
                    <TopNav />
                    <div className="flex flex-row gap-8 h-full p-20">
                        <div className="">
                            <img
                                src={artwork.image}
                                alt={`An artwork titled ${artwork.title} done in ${artwork.medium}`}
                                className="object-contain h-full"
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-1/2">
                            <h1 className="text-xl">{artwork.title}</h1>
                            <p>{artwork.medium}</p>
                            <p>{`Added ${artwork.createdAt?.toDate().toLocaleString()}`}</p>
                        </div>
                    </div>
                </div>

            ) : (
                <p>Artwork not found</p>
            )}


        </>
    )
}

export default ArtworkDetails;