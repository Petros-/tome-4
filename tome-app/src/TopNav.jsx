import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './FirebaseConfig';
import TomeSvg from './assets/Tome.svg';

function TopNav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('User signed out')
            })
            .catch((error) => {
                console.log('Error with signout: ', error.message)
            })
    }
    return (
        <div className="flex flex-row justify-between border border-red-300 items-center p-4 pl-6 pr-6 w-full m-0 absolute top-0 left-0 bg-white">
            <img src={TomeSvg} alt="Tome Logo" className="sm" />
            <div className="flex flex-row gap-2">
                {user ? (
                    <div>
                        <p>{user.email}</p>
                        <button onClick={handleSignOut}>Sign out</button>
                    </div>
                ) : (
                    <p>Sign in</p>
                )}
            </div>
        </div>
    );
}

export default TopNav
