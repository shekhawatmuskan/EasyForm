// src/auth.js
export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken');
};

