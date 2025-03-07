import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import TomeSvg from '../assets/Tome.svg';

function EmailForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            console.log("Error: Email and password cannot be empty.");
            return;
        }

        try {

            // let userCredential;

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
                setIsSignUp(false);
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                console.log("Successful sign in: ", userCredential.user);
            }
        } catch (error) {
            console.log("Unsuccessful: ", error.message)
        }
    }

    return (
        <div className="flex items-center justify-center bg-gray-100 w-full h-svh">
            <div className="bg-white shadow-md rounded w-120 border-gray-300 bg-clip-border overflow-hidden">
                <div className="flex items-center justify-center w-full h-40 bg-blue-200">
                    <img src={TomeSvg} alt="Tome Logo" className="sm" />
                </div>
                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-semibold pt-4 pb-8">
                        {isSignUp ? "Create an account" : "Sign into an existing account"}
                    </h2>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">Email</label>
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
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">Password</label>
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
                    <div className="flex items-center justify-between">
                        <p className="text-sm">
                            {isSignUp ? "Already have an account?" : "Don't have an account?"}
                            <button type="button" className="text-blue-500 hover:underline ml-1" onClick={() => setIsSignUp(!isSignUp)}>
                                {isSignUp ? "Sign In" : "Create one"}
                            </button>
                        </p>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {isSignUp ? "Create account" : "Sign in"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default EmailForm;
