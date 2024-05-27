import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './date-page.css';

function DatePage() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className="container">
            <h1>Please select a date</h1>

            

            <div className="button-container">
                <button className="next-button">Next
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>
            </div>
        </div>
    );
}

export default DatePage;
