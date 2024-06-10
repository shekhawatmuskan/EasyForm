import React, { useState } from 'react';
import './login-page.css'; // Assuming you have styles in login-page.css
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('user_id', result.user_id); // Assuming backend returns user_id
                localStorage.setItem('authToken', result.token); // Assuming backend returns an auth token
                navigate('/dashboard');
            } else {
                console.error('Failed to login');
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('An error occurred. Please try again.');
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
