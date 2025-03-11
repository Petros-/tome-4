import React, { useState } from 'react'

function Fullscreen({ isOpen, onClose, children, onNext, onPrevious, hasNext, hasPrevious }) {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative w-full h-full flex items-center justify-center">
                {children || <p className="text-white">Hm, there's no artwork to see here</p>}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded border border-gray-300"
                >
                    Close
                </button>
                {hasNext && (
                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded border border-gray-300"
                    >
                        Next
                    </button>
                )}
                {hasPrevious && (
                    <button
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded border border-gray-300"
                    >
                        Previous
                    </button>
                )}

            </div>
        </div>
    )
};

export default Fullscreen
