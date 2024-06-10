import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import LoginPage from './Components/Account/LoginPage';
import MainContent from "./Components/MainContent";
import FormBuilder from './Components/FormBuilder';

// Authentication logic within App.js
const App = () => {
  const isAuthenticated = () => {
    const value = localStorage.getItem('authToken');
    console.log(value);
    return !!value;
  };

  console.log(isAuthenticated());
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <div className="App">
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route path="/MainContent" element={<MainContent />} />
        <Route path="/form-builder/:formId" element={<FormBuilder />} /> {/* Update the path */}
      </Routes>
    </Router>
  );
};

export default App;
