import './contact-no-page.css';
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
                <button className="start-button">Next</button>

            </div>
        </div>)
};

export default ContactNoPage;