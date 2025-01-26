import React from "react";
import location from "../../../images/Location.0bf885f69daab8d3ab3b.png";
import Call from "../../../images/Call.f28864f7937df0fc83ce.png";
import email from "../../../images/Email.ae13a348f76e9c2451c7.png";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="main1">
      <div className="contact-line1">
        <img src={location} alt="Location" />
        <p>SSP Traffic, Spinny Road Quetta, Balochistan Pakistan.</p>
      </div>
      <div className="contact-line1">
        <img src={email} alt="Email" />
        <p>info@qtp.gob.pk</p>
      </div>
      <div className="contact-line1">
        <img src={Call} alt="Phone" />
        <p>+92-819213316</p>
      </div>
      <div className="contact-icon-cont">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="footer-icon" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter className="footer-icon" />
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="footer-icon" />
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
