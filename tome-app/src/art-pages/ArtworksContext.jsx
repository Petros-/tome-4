import React, { createContext, useContext, useEffect, useState} from "react";
import { collection, query, orderBy, onSnapshot} from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import PropTypes from "prop-types";

const ArtworksContext = createContext();

export function ArtworksProvider({ children }) {
    const [artworks, setArtworks] = useState([]);
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const user = auth.currentUser;
        if (!user) return;
        
        // get the artworks
        const q = query(collection(db, "accounts", user.uid, "artworks"), orderBy("createdAt", "asc"));

        const unsubscribeArtworks = onSnapshot(q, (snapshot) => {
            setArtworks(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
            setIsLoading(false);
        }, (error) => {
            console.error("Uh oh, I couldn't get the artworks. The error was: ", error);
            setHasError(true);
        });

        // get the tags too
        const tagsQuery = collection(db, "accounts", user.uid, "tags");
        const unsubscribeTags = onSnapshot(tagsQuery, (snapshot) => {
            setTags(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })));
        }, (error) => {
            console.error("Error fetching tags:", error);
            setHasError(true);
        });

        return () => {
            unsubscribeArtworks();
            unsubscribeTags();
        }
    }, [auth.currentUser]);

    return (
        <ArtworksContext.Provider value={{artworks, tags, isLoading, hasError}}>
            {children}
        </ArtworksContext.Provider>
    );
}

export function useArtworks() {
    return useContext(ArtworksContext);
}

ArtworksProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
