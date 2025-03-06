import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import { useAuthState } from "react-firebase-hooks/auth";


function ArtworksList() {
    const [user] = useAuthState(auth);

    console.log(user);
    
    return (
        <>
            List of artworks
        </>
    )
}

export default ArtworksList;