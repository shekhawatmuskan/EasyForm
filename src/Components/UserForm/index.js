import React from 'react';
import './user-form.css';
import FeedbackPage from './FeedbackPage';
import ThankYouPage from './ThankYouPage';
import WelcomePage from './WelcomePage';
import SingleInputPage from './SingleInputPage';
import MultiInputPage from './MultiInputPage';
import ContactNoPage from './ContactNoPage';





function UserForm() {

    return (
        <div className="container">
            {/* <FeedbackPage /> */}
            {/* <ThankYouPage /> */}
            {/* <WelcomePage /> */}
            {/* <SingleInputPage /> */}
            {/* <MultiInputPage/> */}
            {/* <ContactNoPage /> */}
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
