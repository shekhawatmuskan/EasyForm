import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://app.youform.io/images/youform-logo-small.png" alt="Logo" style={{ width: '200px', marginRight: '10px' }} />
        <nav>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li style={{ display: 'inline-block', marginLeft: '20px' }}><a href="/dashboard" style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}>Dashboard</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <img src="https://app.youform.io/images/default-avatar.svg" alt="User Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
      </div>
    </header>
  );
}

export default Header;
