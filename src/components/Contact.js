import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <br></br>
      <br></br>
      <form>
        <div id="cntct">
          <div id="name">
            <label>Name:</label>
            <input type="text" placeholder="Your Name..." />
          </div>
          <br></br>
          <div id="email">
            <label>Email:</label>
            <input type="email" placeholder="Your Email..." />
          </div>
          <br></br>
          <div id="message">
            <label>Message:</label>
            <textarea placeholder="Type your message here..." />
          </div>
          <br></br>
          <button type="submit">Send Message!</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
