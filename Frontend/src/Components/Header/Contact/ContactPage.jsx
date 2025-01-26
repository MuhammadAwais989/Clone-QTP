import React from "react";
import ContactHeader from "../about/Offices/OfficesHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <>
     <ContactHeader title="Contact Us"/>

      <div className="contact-main">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
