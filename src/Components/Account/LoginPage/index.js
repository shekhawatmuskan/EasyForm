import React from 'react';
import './login-page.css'; // Assuming you have styles in login-page.css
import { FaGoogle } from 'react-icons/fa';

function LoginPage() {
    return (
        <div className="main-container">
            <div className="logo-container">
                <div>
                    {/* <img src="https://app.youform.io/images/youform-logo-small.png" alt="Logo" className="logo" /> */}
                    <h1>EasyForm</h1>
                    <h2>Sign in to your account</h2>
                    <p>Or <span className="underline">create a new account</span></p>
                    <div className="login-container">
                        <button className="google-login-button">
                            <FaGoogle className="google-icon" />
                            Login with Google
                        </button>
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input id="email" type="email" className="email-input" />
                        <label htmlFor="password" className="input-label">Password</label>
                        <input id="password" type="password" className="password-input" />
                        <button className="sign-in-button">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
