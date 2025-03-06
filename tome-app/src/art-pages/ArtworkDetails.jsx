import React, {useState, useEffect} from "react";
import { collection, getDocs, doc, getDoc, onSnapshot} from "firebase/firestore";
import { useParams} from 'react-router-dom';
import { auth, db } from '../FirebaseConfig';

function ArtworkDetails () {
    const user = auth.currentUser;
    const {id} = useParams();
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
        <div>
            <h1>{artwork.title}</h1>
            <p>Something else</p>
        </div>
            
        </>
    )
}

export default ArtworkDetails;