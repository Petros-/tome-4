import React, {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import {useParams} from 'react-router-dom';
import NewArtwork from "./NewArtwork";

function EditArtwork () {
    const user = auth.currentUser;
    const {id} = useParams();
    const [existingData, setExistingData] = useState(null);

    useEffect (() => {
        const fetchData = async () =>  {
            try {
                const docRef = doc(db, "accounts", user, "artworks", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setExistingData(docSnap.data());
                } else {
                    console.log("No such document");
                }

            } catch (error) {
                console.error("Error fecthing document:", error);
            }
        };

        fetchData();
    }, [id])
    return (
        <>
            {existingData ? <NewArtwork existingData={existingData} /> : <p>Loading...</p>}
        </>
    )
}

export default EditArtwork;