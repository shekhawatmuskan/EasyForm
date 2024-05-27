import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importing faArrowRight icon
import './multi-select-page.css';

function MultiSelectPage() {
    const [selectedDays, setSelectedDays] = useState([]);

    const handleSelectDay = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    return (
        <div className="container-multi-select-page">
            <h1>Which days suit you for a visit?</h1>

            <div className="days-options">
                <div className="row">
                    <div
                        className={`day-option ${selectedDays.includes('Monday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Monday')}
                    >
                        Monday
                        {selectedDays.includes('Monday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>

                    <div
                        className={`day-option ${selectedDays.includes('Tuesday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Tuesday')}
                    >
                        Tuesday
                        {selectedDays.includes('Tuesday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>

                    <div
                        className={`day-option ${selectedDays.includes('Wednesday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Wednesday')}
                    >
                        Wednesday
                        {selectedDays.includes('Wednesday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>
                </div>
            </div>

            <div className="days-options">
                <div className="row">
                    <div
                        className={`day-option ${selectedDays.includes('Thursday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Thursday')}
                    >
                        Thursday
                        {selectedDays.includes('Thursday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>

                    <div
                        className={`day-option ${selectedDays.includes('Friday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Friday')}
                    >
                        Friday
                        {selectedDays.includes('Friday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>

                    <div
                        className={`day-option ${selectedDays.includes('Saturday') ? 'selected' : ''}`}
                        onClick={() => handleSelectDay('Saturday')}
                    >
                        Saturday
                        {selectedDays.includes('Saturday') && (
                            <FontAwesomeIcon icon={faCheck} className="check-icon" />
                        )}
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button className="next-button" disabled={selectedDays.length === 0}>
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
                </button>
            </div>
        </div>
    );
}

export default MultiSelectPage;
