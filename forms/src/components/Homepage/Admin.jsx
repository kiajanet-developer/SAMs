
import { Paper } from '@mui/material';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdNotifications, MdSettings } from 'react-icons/md';
import '../../css/NavBar.css';
import '../../css/Admin.css';
import logo from "../../images/logo.png"
import UserProfile from '../UserProfile';




const Admin = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Paper elevation={24} sx={{
        backgroundColor: "#060A5A", width: "100%",
        height: "50vh", color:"#fff"
}}> 
      <nav className="navbar">
        <div className="navbar__container">
          <div className='logo_section'>
            <a href="/" className="navbar__logo">
                <img className='logo-navBar' src={logo} alt="company-logo" />
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
        <section>
          <UserProfile />
        </section>
      </Paper>
    </>
  )
}

export default Admin
