import React, { useState, useEffect } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from '../FirebaseConfig';
import { useParams, useNavigate } from 'react-router-dom';
import { setAnalyticsCollectionEnabled } from "firebase/analytics";

function NewArtwork({ existingData }) {
    // get id from url if editing
    const user = auth.currentUser;
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [title, setTitle] = useState('');
    const [medium, setMedium] = useState('');
    const [uploading, setUploading] = useState(false);

    //populate the form if editing an existing item
    useEffect(() => {
        if (existingData) {
            setTitle(existingData.title || '');
            setMedium(existingData.medium || '')
            setImageURL(existingData.image || '');
        }
    }, [existingData]);

    function handleImageChange(e) {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImageURL(URL.createObjectURL(selectedFile))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            let uploadedImageUrl = imageURL;

            if (file) {
                setUploading(true);
                const storageRef = ref(storage, `artworks/${user.uid}/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file);

                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        "state_changed",
                        null,
                        (error) => reject(error),
                        async () => {
                            uploadedImageUrl = await getDownloadURL(uploadTask.snapshot.ref);
                            setImageURL(uploadedImageUrl);
                            resolve();
                        }
                    );
                });
            }

            const artworkData = {
                title,
                medium,
                image: uploadedImageUrl,
                updatedAt: new Date()
            }

            if (id) {
                await setDoc(doc(db, "accounts", user.uid, "artworks", id), artworkData, { merge: true });
                console.log("Document updated:", id);

            } else {

                // Add a new document with a generated id
                const docRef = await addDoc(collection(db, "accounts", user.uid, "artworks"), {
                    ...artworkData,
                    createdAt: new Date()
                });

                console.log("Doc written, id:", docRef.id);

                // clear the fields
                setTitle('')
                setMedium('')
                setFile(null);
                setImageURL('');
            }

            // go back to the list after editing the form
            navigate("/");

        } catch (error) {
            console.error("There was a problem:", error);
        } finally {
            setUploading(false);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 w-full h-svh">
                <div className="bg-white shadow-md rounded w-[80%] h-[80%] bg-clip-border overflow-hidden">
                    <form onSubmit={handleSubmit} className="flex flex-row w-full h-full">
                        <div className="flex items-center flex-col justify-center w-1/2 h-full bg-blue-200">
                            <img src={imageURL} />
                            <button className="border border-gray-300 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                <input type="file" onChange={handleImageChange} className="border text-blue-600 flex justify-center w-full"/>
                            </button>
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
                                disabled={uploading}
                            >
                                {uploading ? "Uploading..." : "Save artwork"}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default NewArtwork;