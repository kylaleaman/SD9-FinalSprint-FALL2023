import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <img
          src="./images/ksLogo.jpg"
          alt="KS Logo"
          width={350}
          height={150}
          className="logo"
        />

        
        <div className='nav-bar'>
          <a href="/home" className="nav-link">HOME</a>
          <a href="/shop" className="nav-link">SHOP</a>
          <a href="/cart" className="nav-link">CART</a>
          <a href="/outfits" className="nav-link">OUTFITS</a>

        </div>
      </div>
    </div>
  );
}

export default Header;