import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
                <button className="next-button">Next
                <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>
            </div>
        </div>
    );
}

export default SingleInputPage;
