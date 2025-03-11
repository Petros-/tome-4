import React, { useState } from 'react'

function Fullscreen({ isOpen, onClose, children, onNext, onPrevious, hasNext, hasPrevious }) {
    const [showControls, setShowControls] = useState(false);

    if (!isOpen) {
        return null;
    }

    const handleMouseMove = () => {
        setShowControls(true);
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => setShowControls(false), 4000);
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setShowControls(false)}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {children || <p className="text-white">Hm, there's no artwork to see here</p>}
                {showControls &&
                    <div className="fixed inset-0 z-51 w-full h-full">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 px-4 py-2 rounded border border-gray-400 hover:bg-gray-600 active:bg-gray-700"
                        >
                            Close
                        </button>
                        {hasNext && (
                            <button
                                onClick={onNext}
                                disabled={!hasNext}
                                className="absolute bottom-4 right-4 text-gray-400 px-4 py-2 rounded border border-gray-400 hover:bg-gray-600 active:bg-gray-700"
                            >
                                Next
                            </button>
                        )}
                        {hasPrevious && (
                            <button
                                onClick={onPrevious}
                                disabled={!hasPrevious}
                                className="absolute bottom-4 left-4 text-gray-400 px-4 py-2 rounded border border-gray-400 hover:bg-gray-600 active:bg-gray-700"
                            >
                                Previous
                            </button>
                        )}
                    </div>
                }

            </div>
        </div>
    )
};

export default Fullscreen
