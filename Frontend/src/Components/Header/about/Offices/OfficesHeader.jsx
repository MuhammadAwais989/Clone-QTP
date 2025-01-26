// HeaderComponent.js
import React from 'react';
import officesheading from "../../../../images/TP (1).eb084def24c6a22f579e.png";

function HeaderComponent({title}) {
  return (
    <div className="contact-header">
      <img src={officesheading} alt="Traffic Police Offices" />
      <h1 style={{ width: "100%", textAlign: "center" }}>
        {title}
      </h1>
    </div>
  );
}

export default HeaderComponent;
