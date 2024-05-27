import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './multi-input-page.css';
function MultiInputPage() {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };
    return (
        <div className="container-multi-input-page">
            <h1>please give your valuable feedback</h1>

            <textarea
                className="feedback-textarea"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Write your feedback here..."
            />

            <div className="button-container">
                <button className="next-button">Next 
                <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>

            </div>
        </div>)
};

export default MultiInputPage;