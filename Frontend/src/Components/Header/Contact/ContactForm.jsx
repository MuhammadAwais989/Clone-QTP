import React from "react";

function ContactForm() {
  return (
    <div className="contact-form">
      <form action="" method="">
        <div className="contact-label">
          <label htmlFor="firstName">First Name *</label>
          <label htmlFor="email">Your Email *</label>
        </div>
        <div className="contact-input">
          <input type="text" id="firstName" required />
          <input type="email" id="email" required />
        </div>

        <div className="sunject-label">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" required />
        </div>

        <div className="sunject-label">
          <label htmlFor="message">Write Your Message</label>
          <textarea id="message" required></textarea>
        </div>

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
