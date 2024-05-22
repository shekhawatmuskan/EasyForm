import React from 'react';
import './sign-up-page.css'; // Assuming you have styles in login-page.css
import { FaGoogle } from 'react-icons/fa';

function SignUpPage() {
    return (
        <div style={{ backgroundColor: 'rgb(249, 250, 251)' }}>
            <div className="logo-container">
                <div>
                    {/* <img src="https://app.youform.io/images/youform-logo-small.png" alt="Logo" className="logo" /> */}
                    <h1>EasyForm</h1>
                    <h2>Create a new account</h2>
                    <p>Or sign in to your account</p>
                    <div className="sign-up-container">
                        <button className="google-sign-up-button">
                            <FaGoogle className="google-icon" />
                            SignUp with Google
                        </button>
                        <label htmlFor="firstname" className="input-label">First Name</label>
                        <input id="firstname" type="firstname" className="firstname-input" />
                        <label htmlFor="lastname" className="input-label">Last Name</label>
                        <input id="lastname" type="lastname" className="lastname-input" />
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input id="email" type="email" className="email-input" />
                        <label htmlFor="password" className="input-label">Password</label>
                        <input id="password" type="password" className="password-input" />

                        <button className="register-button">Register</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
