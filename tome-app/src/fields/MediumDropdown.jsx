import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MediumDropdown({ selectedValue, onChange }) {
    const [isOpen, setIsOpen] = useState(false);


    const mediums = [
        'Oil on canvas',
        'Oil on linen',
        'Oil on panel',
        'Oil on paper',
        'Oil on canvas mounted on panel',
        'Watercolor',
        'Ink wash',
        'Gouache',
        'Graphite'
    ]

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex w-full justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            >
                {selectedValue || "Choose a medium"}
                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div class="absolute left-0 z-10 mt-2 w-full rounded-md bg-white border border-gray-200 shadow-lg">
                    <ul className="py-1 text-sm text-gray-700">
                    {mediums.map((medium, index) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(medium);
                                        setIsOpen(false);
                                    }}
                                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                >
                                    {medium}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

MediumDropdown.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MediumDropdown;