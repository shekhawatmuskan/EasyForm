import React, { useState } from 'react';
import './single-select-page.css';

function SingleSelectPage() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="container">
            <h1>When do you like to get a call?</h1>

            <div className="option-container">
                <label>
                    <input
                        type="radio"
                        name="call-time"
                        value="morning"
                        checked={selectedOption === "morning"}
                        onChange={() => handleOptionSelect("morning")}
                    />
                    Morning
                </label>

                <label>
                    <input
                        type="radio"
                        name="call-time"
                        value="afternoon"
                        checked={selectedOption === "afternoon"}
                        onChange={() => handleOptionSelect("afternoon")}
                    />
                    Afternoon
                </label>

                <label>
                    <input
                        type="radio"
                        name="call-time"
                        value="evening"
                        checked={selectedOption === "evening"}
                        onChange={() => handleOptionSelect("evening")}
                    />
                    Evening
                </label>
            </div>

            <div className="button-container">
                <button className="start-button">Next</button>
            </div>
        </div>
    );
}

export default SingleSelectPage;
