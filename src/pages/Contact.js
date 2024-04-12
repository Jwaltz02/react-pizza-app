import React from "react";
import "../styles/Contact.css";
import PizzaImage from "../assets/PizzaContactPage.webp";

function Contact() {
  return (
    <div className="contact-page">
      <div
        className="left-side-contact"
        style={{ backgroundImage: `url(${PizzaImage})` }}></div>
      <div className="right-side-contact">
        <h1>Contact Us</h1>
        <form
          id="contact-form"
          method="get"
          action="/contact"
          className="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            placeholder="Enter Full Name..."
            type="text"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Enter Email..."
            type="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            placeholder="Enter message..."></textarea>
        </form>
        <button type="submit" form="contact-form">
          Submit Form
        </button>
      </div>
    </div>
  );
}

export default Contact;
