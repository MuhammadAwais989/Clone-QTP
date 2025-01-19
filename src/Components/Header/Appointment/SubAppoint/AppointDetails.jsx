import React, { useState } from "react";
import OfficesHeader from "../../about/Offices/OfficesHeader";
import AppointDate from "./AppointDate";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import Reservation from "./Reservation";  // Import Reservation Component
import Confirm from "./Confirm";  // Assume Confirm Component is created

function AppointDetails() {
  const [currentView, setCurrentView] = useState("appoint"); // Tracks the current view ('appoint', 'reservation', or 'confirm')

  const handleBackClick = () => {
    if (currentView === "reservation") {
      setCurrentView("appoint");  // Go back to appointment details from reservation
    }
  };

  const handleNextClick = () => {
    if (currentView === "appoint") {
      setCurrentView("reservation");  // Go to reservation view
    } else if (currentView === "reservation") {
      setCurrentView("confirm");  // Go to confirmation view
    }
  };

  return (
    <>
      {currentView === "appoint" && (
        // Appointment Details View
        <div>
          <OfficesHeader />
          <AppointDate />

          <div className="appoint-detail-cont">
            <div className="appoint-detail-main">
              <div className="appoint-table-main">
                <div className="appoint-table-header">
                  <h3>Please Confirm Appointment Details</h3>
                </div>
                <div className="table-row">
                  <span>Name</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>CNIC</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>Booking For</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>Time Slot</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>Dealing Time</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>Counter</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>License Type</span>
                  <p>Awais</p>
                </div>
                <div className="table-row">
                  <span>Branch</span>
                  <p>Awais</p>
                </div>
              </div>
            </div>
            <div className="applicant-btn">
              <button className="applicant-cancel" onClick={handleBackClick}>
                <IoMdArrowDropleft />
                Back
              </button>

              <button className="next-active" onClick={handleNextClick}>
                <h4>Next</h4>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {currentView === "reservation" && (
        // Reservation View
        <Reservation handleBackClick={handleBackClick} handleNextClick={handleNextClick} />
      )}

      {currentView === "confirm" && (
        // Confirm View (You will need to create a Confirm component)
        <Confirm />
      )}
    </>
  );
}

export default AppointDetails;
