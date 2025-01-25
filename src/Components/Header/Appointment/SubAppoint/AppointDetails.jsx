import React, { useState } from "react";
import OfficesHeader from "../../about/Offices/OfficesHeader";
import AppointDate from "./AppointDate";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import Reservation from "./Reservation"; // Import the Reservation component

function AppointDetails() {
  const [currentView, setCurrentView] = useState("appoint"); // Tracks the current view ('appoint', 'reservation', or 'confirm')

  // Handle when "Back" button is clicked
  const handleBackClick = () => {
    setCurrentView("appoint");  // Go back to appointment details from reservation
  };

  // Handle when "Next" button is clicked
  const handleNextClick = () => {
    setCurrentView("reservation");  // Go to reservation view
  };

  return (
    <>
      {currentView === "appoint" && (
        <div>
          <OfficesHeader />
          <AppointDate />
          <div className="appoint-detail-cont">
            <div className="appoint-detail-main">
              <div className="appoint-table-main">
                <div className="appoint-table-header">
                  <h3>Please Confirm Appointment Details</h3>
                </div>
                {/* Appointment details go here */}
                <div className="table-row">
                  <span>Name</span>
                  <p>Awais</p>
                </div>
                {/* Other rows */}
              </div>
            </div>
            <div className="applicant-btn">
              <button className="applicant-cancel" onClick={handleBackClick}>
                <IoMdArrowDropleft /> Back
              </button>

              <button className="next-active" onClick={handleNextClick}>
                Next <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
      )}

      {currentView === "reservation" && (
        // This will render the Reservation component when currentView is "reservation"
        <Reservation handleBackClick={handleBackClick} handleNextClick={handleNextClick} />
      )}
    </>
  );
}

export default AppointDetails;
