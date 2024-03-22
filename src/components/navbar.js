import React from 'react';
import { useState } from 'react';
import Logo from '../assets/pizza-logo.png';
import { Link } from 'react-router-dom';
import { BsJustify } from "react-icons/bs";
import '../styles/Navbar.css'

function Navbar() {
  const [dropdown, setDropdown] = useState(true)
  return (
    <div className='navbar'>
      <div className="left-side">
        <div className="hamburger-menu" onClick={() => setDropdown(!dropdown)}><BsJustify /></div>
        <img className='logo' alt="website logo" src={Logo} />
      </div>
      <ul className={dropdown ? "right-side" : "right-side menu-close"}>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/Menu"> Menu </Link></li>
        <li><Link to="/About"> About </Link></li>
        <li><Link to="/Contact"> Contact </Link></li>
      </ul>
    </div>
  );
}

export default Navbar
