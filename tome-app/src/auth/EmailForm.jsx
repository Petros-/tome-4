import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import Button from '../components/Button';

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
        <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-120">
                <h2 className="text-xl font-semibold">{isSignUp ? "Create account" : "Sign in"}</h2>
                <div className="mb-6">
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
                <div className="mb-6">
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
                <div className="flex items-center justify-between">
                    {isSignUp 
                        ?
                        <><div><p>Have an account?</p><p><button onClick={() => setIsSignUp(!isSignUp)}> Sign in </button>instead</p></div></> 
                        :
                        <><div><p>Don't have an account?</p><p><button onClick={() => setIsSignUp(!isSignUp)}> Create one </button>instead</p></div></>
                        
                    }
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        {isSignUp ? "Create account" : "Sign in"}
                    </button>
                </div>
            </form>

        </div>
    )
}

export default EmailForm;
