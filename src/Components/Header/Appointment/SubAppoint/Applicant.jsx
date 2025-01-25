import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import AppointDate from "./AppointDate";
import Branch from "./Branch";  // Import Branch component

function Applicant() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [cnicNumber, setCnicNumber] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showBranch, setShowBranch] = useState(false); // State to manage branch component visibility

  const handleMobileChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 4) {
      value = `${value.slice(0, 4)}-${value.slice(4)}`;
    }
    setMobileNumber(value);
  };

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 13) value = value.slice(0, 13);
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    if (value.length > 13) {
      value = `${value.slice(0, 13)}-${value.slice(13)}`;
    }
    setCnicNumber(value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Form validation check
  useEffect(() => {
    const isValid =
      name.trim() !== "" && mobileNumber.length === 12 && cnicNumber.length === 15;
    setIsFormValid(isValid);
  }, [name, mobileNumber, cnicNumber]);

  // Handle Next button click to show Branch component
  const handleNextClick = () => {
    if (isFormValid) {
      setShowBranch(true); // Show Branch component when form is valid
    }
  };

  // Handle Cancel button click to reset form or show AppointmentMain component
  const handleCancelClick = () => {
    setShowBranch(false); // Optionally reset form or show AppointmentMain
  };

  return (
    <>
      {showBranch ? (
        <Branch onBackClick={() => setShowBranch(false)} /> // Show Branch and pass back function
      ) : (
        <div className="applicant-cont">
          <div className="applicant-main">
            <AppointDate />
            <div className="applicant-input">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleNameChange}
              />
              <label htmlFor="">Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Your Number"
                value={mobileNumber}
                onChange={handleMobileChange}
              />
              <label htmlFor="">CNIC</label>
              <input
                type="text"
                placeholder="Enter Your CNIC Number"
                value={cnicNumber}
                onChange={handleCnicChange}
              />
              <div className="applicant-btn">
                <button className="applicant-cancel" onClick={handleCancelClick}>
                  Cancel
                </button>
                <button
                  className={`${isFormValid ? "next-active" : "applicant-next"}`}
                  disabled={!isFormValid}
                  onClick={handleNextClick} // Handle Next button click
                >
                  <h4>Next</h4> <span><MdOutlineNavigateNext /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Applicant;
