import React from 'react';
import PropTypes from 'prop-types';

function MediumDropdown({ selectedValue, onChange }) {

    const dropdownLabel = 'Medium';

    const mediums = [
        'Oil on canvas',
        'Oil on linen',
        'Oil on panel',
        'Oil on canvas mounted on panel',
        'Watercolor',
        'Ink wash',
        'Graphite'
    ]

    return (
        <div>
            <label htmlFor="medium-dropdown">{dropdownLabel}</label>
            <select id="medium-dropdown" value={selectedValue} onChange={onChange}>
                <option value="">Please choose an option</option>
                {mediums.map((medium, index) => (
                    <option key={index} value={medium}>
                        {medium}
                    </option>
                ))}
            </select>
        </div>
    );
}

MediumDropdown.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default MediumDropdown;