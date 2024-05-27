import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './single-select-page.css';

function SingleSelectPage() {
    const [selectedTime, setSelectedTime] = useState('');

    const handleSelectTime = (time) => {
        setSelectedTime(time);
    };

    return (
        <div className="container-single-select-page">
            <h1>When do you like to get a call?</h1>

            <div className="time-options">
                <div
                    className={`time-option ${selectedTime === 'morning' ? 'selected' : ''}`}
                    onClick={() => handleSelectTime('morning')}
                >
                    Morning
                    {selectedTime === 'morning' && <div className="circle"></div>}
                </div>

                <div
                    className={`time-option ${selectedTime === 'afternoon' ? 'selected' : ''}`}
                    onClick={() => handleSelectTime('afternoon')}
                >
                    Afternoon
                    {selectedTime === 'afternoon' && <div className="circle"></div>}
                </div>

                <div
                    className={`time-option ${selectedTime === 'evening' ? 'selected' : ''}`}
                    onClick={() => handleSelectTime('evening')}
                >
                    Evening
                    {selectedTime === 'evening' && <div className="circle"></div>}
                </div>
            </div>

            <div className="button-container">
                <button className="next-button" disabled={!selectedTime}>
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" />
                </button>
            </div>
        </div>
    );
}

export default SingleSelectPage;
