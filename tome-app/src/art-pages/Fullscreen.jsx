import React, { useState } from 'react'

function Fullscreen({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-50">
            <div className="relative w-full h-full flex items-center justify-center">
                {children}
                <button onClick={onClose}
                className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded border border-gray-300"
                >
                    Close
                    </button>
            </div>
        </div>
    )
};

export default Fullscreen
