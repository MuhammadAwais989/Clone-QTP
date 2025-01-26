import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import Confirm from "./Confirm";

function AppointDetails() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleBackClick = () => {
    setShowConfirm(false); // Show AppointDetails again
  };

  const handleNextClick = () => {
    setShowConfirm(true); // Show Confirm component
  };

  return (
    <>
      {!showConfirm ? (
        <div>
          <div className="appoint-detail-cont">
            <div className="appoint-detail-main">
              <div className="appoint-table-main">
                <div className="appoint-table-header">
                  <h3>Please Confirm Appointment Details</h3>
                </div>
                {/* Appointment details */}
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
                <IoMdArrowDropleft /> Back
              </button>
              <button className="next-active" onClick={handleNextClick}>
                Next <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Confirm />
      )}
    </>
  );
}

export default AppointDetails;
