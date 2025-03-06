import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";


function ArtworksList() {
    const [user] = useAuthState(auth);
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [subCollectionExists, setSubCollectionExists] = useState(false);

    useEffect(() => {

        if (!user) {
            console.log("No authenticated user. Skipping Firestore request.");
            return;
        }
        
        console.log("Authenticated User ID:", user.uid);

        const checkForSub = async () => {
            try {
                const subcollectionRef = collection(db, 'accounts', user.uid, 'artworks');
                const querySnapshot = await getDocs(subcollectionRef);

                if (!querySnapshot.empty) {
                    console.log("User has a subcollection. Here are the documents:");
                    querySnapshot.forEach(doc => console.log(doc.id, doc.data()));
                } else {
                    console.log("Subcollection is empty.");
                }

                setSubCollectionExists(!querySnapshot.empty);
            } catch (error) {
                console.log("Problem checking for subcollection: ", error)
            } finally {
                setIsLoading(false);
            }
        }
        checkForSub();

    }, [user]);

    // useEffect(() => {

    //     const fetchArt = async () => {
    //         try {
    //             const q = query(collection(db, "users", user.uid, "artworks"), orderBy("createdAt"));

    //             onSnapshot(q, (doc) => {
    //                 setArtworks(doc.docs);
    //             });
    //         } catch (error) {
    //             console.log("An error happened:", error);
    //             setHasError(true)
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };
    //     fetchArt();
    //     return () => onSnapshot;

    // }, []);


    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (hasError) {
        return <h2>There was an error. Peter wrote this</h2>
    }
    
    return (
        <>
            List of artworks
        </>
    )
}

export default ArtworksList;