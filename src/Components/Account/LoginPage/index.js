import React, { useState } from 'react';
import './login-page.css'; // Assuming you have styles in login-page.css
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email: email,
                password: password
            });
            console.log('Login successful:', response.data);
            localStorage.setItem('authToken', response.data.token); // Assuming your API returns a token
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid credentials');
        }
    };

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
                        <label htmlFor="email" className="input-label">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="email-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password" className="input-label">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="password-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="sign-in-button" onClick={handleLogin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
