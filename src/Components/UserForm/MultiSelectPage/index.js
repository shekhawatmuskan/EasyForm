import React, { useState } from 'react';
import './multi-select-page.css';

function MultiSelectPage() {
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDaySelection = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const isDaySelected = (day) => {
        return selectedDays.includes(day);
    };

    return (
        <div className="container">
            <h1>Which days suit you for a visit?</h1>
            <div className="multi-select-input bg-white border border-gray-300 rounded-lg py-3 px-4 max-w-96">
                <input 
                    type="text" 
                    placeholder="Select days"
                    readOnly
                    className="min-w-40 block relative cursor-pointer"
                    value={selectedDays.join(', ')}
                />
                <div className="selected-options">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                        <span 
                            key={day} 
                            className={`inline-block py-1 px-2 cursor-pointer ${isDaySelected(day) ? 'bg-gray-50 rounded-lg' : ''}`}
                            onClick={() => toggleDaySelection(day)}
                        >
                            {day}
                            {isDaySelected(day) && <span className="arrow">➜</span>}
                        </span>
                    ))}
                </div>
            </div>
            <div className="button-container">
                <button className="start-button">Next</button>
            </div>
        </div>
    );
}

export default MultiSelectPage;
