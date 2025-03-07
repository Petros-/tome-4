import React, { useState, useEffect } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from '../FirebaseConfig';
import { useParams, useNavigate } from 'react-router-dom';

function NewArtwork({ existingData }) {
    // get id from url if editing
    const user = auth.currentUser;
    const { id } = useParams();
    const navigate = useNavigate();

    //populate the form if editing an existing item
    useEffect(() => {
        if (existingData) {
            setTitle(existingData.title || '');
            setMedium(existingData.medium || '')
        }
    }, [existingData]);

    // const [artwork, setArtwork] = useState('');
    const [title, setTitle] = useState('');
    const [medium, setMedium] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            if (id) {
                await setDoc(doc(db, "accounts", user.uid, "artworks", id), {
                    title,
                    medium,
                    updtatedAt: new Date()
                }, { merge: true });
                console.log("Document updated:", id);

            } else {

                // Add a new document with a generated id
                const docRef = await addDoc(collection(db, "accounts", user.uid, "artworks"), {
                    title: title,
                    medium: medium,
                    createdAt: new Date()
                });

                console.log("Doc written, id:", docRef.id);

                // clear the fields
                setTitle('')
                setMedium('')
            }

            // go back to the list after editing the form
            navigate("/");

        } catch (error) {
            console.error("There was a problem:", error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 w-full h-svh">
                <div className="bg-white shadow-md rounded w-[80%] h-[80%] bg-clip-border overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex flex-row w-full h-full">
                        <div className="flex items-center justify-center w-1/2 h-full bg-blue-200">
                            Some image here
                        </div>
                        <div className="w-1/2 space-y-8 p-8 flex flex-col justify-between">
                            <div className="flex flex-col gap-x-6 gap-y-8 sm:grid-cols-1">
                                <div className="">
                                    <div className="w-full space-y-6">
                                        <label htmlFor="artwork-title" className="block text-gray-700 text-sm font-bold mb-2 text-left">Title</label>
                                        <input type="text"
                                            id="artwork-title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            data-form-type="other"
                                        />
                                    </div>
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-1">
                                    <div className="w-full space-y-6">
                                        <label htmlFor="artwork-medium" className="block text-gray-700 text-sm font-bold mb-2 text-left">Medium</label>
                                        <input type="text"
                                            id="artwork-medium"
                                            value={medium}
                                            onChange={(e) => setMedium(e.target.value)}
                                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            data-form-type="other"
                                        />
                                    </div>
                                                                </div>
                                </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Save artwork
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default NewArtwork;