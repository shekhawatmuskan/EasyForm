import './contact-no-page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



function ContactNoPage() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };


    return (
        <div className="container">
            <h1>Please enter your phone number</h1>
            <input
                type="tel"
                className="phone-input"
                placeholder="Enter your phone number with country code"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />

            <div className="button-container">
                <button className="next-button">Next
                <FontAwesomeIcon icon={faArrowRight} className="button-icon" /></button>

            </div>
        </div>)
};

export default ContactNoPage;