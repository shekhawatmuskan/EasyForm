import React, { useState } from 'react';
import './multi-input-page.css';
function MultiInputPage() {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };
    return (
        <div className="container">
            <h1>Give your valuable feedback.</h1>

            <textarea
                className="feedback-textarea"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Write your feedback here..."
            />

            <div className="button-container">
                <button className="start-button">Next </button>

            </div>
        </div>)
};

export default MultiInputPage;