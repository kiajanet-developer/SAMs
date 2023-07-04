import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdNotifications, MdSettings } from 'react-icons/md';
import '../../css/NavBar.css';
import logo from "../../images/logo.png"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className='logo_section'>
            <a href="/" className="navbar__logo">
                <img className='logo' src={logo} alt="company-logo" />
            </a>
                <h1>SAMS</h1>
        </div>
        <div className="navbar__menu-icon" onClick={handleMenuClick}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={showMenu ? 'navbar__menu active' : 'navbar__menu'}>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Overview
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Manage Users
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link">
              Reports
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link navbar__icon-link">
              <MdNotifications className="navbar__icon" />
            </a>
          </li>
          <li className="navbar__item">
            <a href="/" className="navbar__link navbar__icon-link">
              <MdSettings className="navbar__icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;