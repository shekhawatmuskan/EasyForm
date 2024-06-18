import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css"; // Import CSS module

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const onClickSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      {" "}
      {/* Use styles.header here */}
      <div className={styles["header-navigation"]}>
        {" "}
        {/* Use styles["header-navigation"] here */}
        <div className={styles.fields}>
          {" "}
          {/* Use styles.fields here */}
          <img
            src="https://app.youform.io/images/youform-logo-small.png"
            alt="Logo"
            className={styles.logo}
          />
          <nav className={styles.nav}>
            {" "}
            {/* Use styles.nav here */}
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles["avatar-container"]}>
          {" "}
          {/* Use styles["avatar-container"] here */}
          <img
            src="https://app.youform.io/images/default-avatar.svg"
            alt="User Avatar"
            className={styles.avatar}
            onClick={handleAvatarClick}
          />
          {isMenuOpen && (
            <div className={styles.menu}>
              {" "}
              {/* Use styles.menu here */}
              <button
                onClick={onClickSignOut}
                className={styles["sign-out-btn"]}
              >
                {" "}
                {/* Use styles["sign-out-btn"] here */}
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
