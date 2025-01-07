import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import VerificationHeader from "../about/Offices/OfficesHeader";

function LicenseVerification() {
  const onChange = () => {};
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    let value = event.target.value;

    // Remove any non-digit characters
    value = value.replace(/\D/g, "");

    // Limit the length to 13 characters
    if (value.length > 13) {
      value = value.slice(0, 13);
    }

    // Add dashes after 5 and 12 characters
    if (value.length > 5 && value.length <= 12) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    } else if (value.length > 12) {
      value =
        value.slice(0, 5) +
        "-" +
        value.slice(5, 12) +
        "-" +
        value.slice(12, 13);
    }

    setInputValue(value);
  };
  return (
    <>
      {/* Header */}
      <VerificationHeader title="License Verification" />

      {/* Main */}
      <div className="Ver-cont">
        <div className="ver-main">
          <div className="ver-heading">
            <h1>License Verification</h1>
          </div>
          <div className="ver-field">
            <input
              type="text"
              placeholder="Enter CNIC Number "
              required
              onChange={handleChange}
              value={inputValue}
              maxLength="15"
            />
          </div>
          {/* Googel Capture Checkbox Code */}
          <div className="capture">
            <ReCAPTCHA
              sitekey="6Lfuh68qAAAAAFVNwhxySjHXx2LgKyuuhK3wXHNT"
              onChange={onChange}
            />
          </div>
          <div className="ver-btn">
            <input type="submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LicenseVerification;
