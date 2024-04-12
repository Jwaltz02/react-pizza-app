import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          alt="Instagram link"
          href="https://www.instagram.com"
          target="_blank">
          <BsInstagram className="social-icons" />
        </a>
        <a alt="Facebook link" href="https://www.facebook.com" target="_blank">
          <BsFacebook className="social-icons" />
        </a>
        <a alt="Twitter link" href="https://twitter.com" target="_blank">
          <FaXTwitter className="social-icons" />
        </a>
        <a alt="LinkedIn link" href="https://www.linkedin.com" target="_blank">
          <BsLinkedin className="social-icons" />
        </a>
      </div>
      <p
        style={{
          fontFamily: "Monospace",
          color: "white",
          paddingBottom: "10px",
        }}>
        {" "}
        &copy; 2024, Waltz Pizza Cafe
      </p>
    </div>
  );
}

export default Footer;
