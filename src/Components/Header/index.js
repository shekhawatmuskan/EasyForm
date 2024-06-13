import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const onClickSignOut = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to the login page after sign out
  };

  return (
    <header className="header">
      <div className="header-navigation">
        <div className="fields">
          <img
            src="https://app.youform.io/images/youform-logo-small.png"
            alt="Logo"
            className="logo"
          />
          <nav className="nav">
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="avatar-container">
          <img
            src="https://app.youform.io/images/default-avatar.svg"
            alt="User Avatar"
            className="avatar"
            onClick={handleAvatarClick}
          />
          {isMenuOpen && (
            <div className="menu">
              <button onClick={onClickSignOut} className="sign-out-btn">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
