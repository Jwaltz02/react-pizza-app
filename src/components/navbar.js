import React from "react";
import { useState } from "react";
import Logo from "../assets/pizza-logo.png";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import "../styles/Navbar.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const toggleMenu = () => {
    setDropdown(false);
  };
  window.addEventListener("resize", toggleMenu);

  return (
    <div className="navbar">
      <div className="left-side">
        <div
          className={dropdown ? "hamburger-menu active" : "hamburger-menu"}
          onClick={() => setDropdown(!dropdown)}>
          <BsJustify />
        </div>
        <img className="logo" alt="website logo" src={Logo} />
      </div>
      <div className="middle" style={{ color: "white", marginTop: "5px" }}>
        <b>Order</b> in <b>Toronto:</b>
        <span style={{ color: "rgb(255, 45, 45)" }}> (416) 967-1111</span>
      </div>
      <ul
        id="rightSide"
        className={dropdown ? "right-side" : "right-side menu-close"}>
        <li>
          <Link to="/react-pizza-app"> Home </Link>
        </li>
        <li>
          <Link to="/Menu"> Menu </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
