import React, { useState } from 'react';
import './single-input-page.css';

function SingleInputPage() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="container">
            <h1>What is your name?</h1>
            <input
                type="text"
                placeholder="Your answer here..."
                value={name}
                onChange={handleChange}
            />
            <div className="button-container">
                <button className="start-button">Next</button>
            </div>
        </div>
    );
}

export default SingleInputPage;
