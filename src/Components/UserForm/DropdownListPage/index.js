import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './dropdown-list-page.css';

function DropdownListPage() {
    const [selectedSpecialists, setSelectedSpecialists] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const specialists = [
        "Physiotherapist",
        "Cardiologist",
        "Dermatologist",
        "Oncologist",
        "Neurologist",
        "Pediatrician",
        "Orthopedic Surgeon",
        "Gynecologist",
        "Psychiatrist",
        "ENT Specialist"
    ];

    const handleDropdownChange = (e) => {
        const value = e.target.value;
        if (!selectedSpecialists.includes(value)) {
            setSelectedSpecialists([...selectedSpecialists, value]);
        }
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="container-dropdown-page">
            <h1>which specialist you want to prefer</h1>

            <div className="input-dropdown">
                <input
                    type="text"
                    value={selectedSpecialists.length === 0 ? "Please select an option" : selectedSpecialists.join(', ')}
                    onClick={toggleDropdown}
                    readOnly
                    className="input-field" // Add this className
                />
                {showDropdown && (
                    <div className="dropdown-list">
                        <select onChange={handleDropdownChange} multiple>
                            {specialists.map((specialist, index) => (
                                <option key={index} value={specialist}>{specialist}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
            <button className="next-button">
                Next
                <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
            </button>
        </div>
    );
}

export default DropdownListPage;
