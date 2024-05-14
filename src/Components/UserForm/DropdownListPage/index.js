import React, { useState } from 'react';
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
        <div className="container">
            <h1>Please select which specialists you want to prefer.</h1>

            <div className="input-dropdown">
                <div>
                    <input
                        type="text"
                        value={selectedSpecialists.length === 0 ? "Please select an option" : selectedSpecialists.join(', ')}
                        onClick={toggleDropdown}
                        readOnly
                    />
                    {showDropdown && (
                        <select onChange={handleDropdownChange} multiple>
                            {specialists.map((specialist, index) => (
                                <option key={index} value={specialist}>{specialist}</option>
                            ))}
                        </select>
                    )}
                </div>
                <button className="start-button">Next</button>
            </div>
        </div>
    );
}

export default DropdownListPage;
