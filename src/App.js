import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './App.css';
import Account from './Components/Account';
import Dashboard from './Dashboard';
import LoginPage from './Components/Account/LoginPage'; // Ensure the correct import path

// Authentication logic within App.js
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <div className="App">
                <Account />
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
