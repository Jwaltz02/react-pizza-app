import React from "react";
import "../styles/About.css";
import { MyText } from "../helpers/AboutContent";
import BannerImage from "../assets/AboutPageImage.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        alt="a pizza on top of a pizza peel"
        style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="about-bottom">
        <h1>ABOUT US</h1>
        <p className="about-paragraph">{MyText}</p>
      </div>
    </div>
  );
}

export default About;
