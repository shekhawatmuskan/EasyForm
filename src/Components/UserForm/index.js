import React from 'react';
import './user-form.css';

function UserForm() {
    return (
        <div className="container">
            <h1>Welcome! Please take some time to fill up this form.</h1>
            <p>This will only take 2 minutes.</p>
            <div className="button-container">
                <button className="start-button">Let's Start </button>
                <p>press Enter</p>
            </div>
            <div className="powered-by-container">
                <button className="powered-by-button">Powered by <b>EasyForm</b></button>
            </div>
            
            <div className="arrow-buttons-container">
                <button className="arrow-button up-arrow">↑</button>
                <button className="arrow-button down-arrow">↓</button>

            </div>
        </div>
    );
}

export default UserForm;
