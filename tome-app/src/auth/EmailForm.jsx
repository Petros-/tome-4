import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

function EmailForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            let userCredential;

            if (isSignUp) {

                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                const db = getFirestore();

                const account = {
                    useruid: user.uid,
                    email: user.email,
                    createdAt: new Date()
                }

                await setDoc(doc(collection(db, "accounts"), user.uid), account);

                console.log("Successful signup: ", user);
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("Successful sign in: ", userCredential.user);
            }
        } catch (error) {
            console.log("Unsuccessful: ", error.message)
        }
    }

    return (
        <div className='flex flex-column mb-4 w-1/2'>
            <h2>{isSignUp ? "Create account" : "Sign in"}</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        data-form-type="other"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        data-form-type="other"
                        placeholder="6+ character password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">{isSignUp ? "Create account" : "Sign in"}</button>
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)} type="submit">{isSignUp ? "Sign in" : "No account yet? Sign up"}</button>

        </div>
    )
}

export default EmailForm;
