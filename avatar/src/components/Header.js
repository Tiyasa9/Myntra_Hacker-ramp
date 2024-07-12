import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="logo"><img src = "/images/myntra-logo.png" alt="myntra"></img></div>
      <nav>
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Beauty</li>
          <li>Home & Living</li>
          <li>Personalize</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Hinted search text" />
      </div>
      <div className="user-actions">
        <button>Login</button>
        <button>Wishlist</button>
        <button>Cart</button>
      </div>
    </header>
  );
}

export default Header;
