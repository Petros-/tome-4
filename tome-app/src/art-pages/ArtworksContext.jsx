import React, { createContext, useContext, useEffect, useState} from "react";
import { collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';

const ArtworksContext = createContext();

export function ArtworksProvider({ children }) {
    const [artworks, setArtworks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(collection(db, "accounts", user.uid, "artworks"), orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setArtworks(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
            setIsLoading(false);
        }, (error) => {
            console.error("Uh oh, I couldn't get the artworks. The error was: ", error);
            setHasError(true);
        });

        return () => unsubscribe();
    }, [auth.currentUser]);

    return (
        <ArtworksContext.Provider value={{artworks, isLoading, hasError}}>
            {children}
        </ArtworksContext.Provider>
    );
}

export function useArtworks() {
    return useContext(ArtworksContext);
}