import React, { useState } from "react";
import AppointHeader from "../about/Offices/OfficesHeader";
import Applicant from "./SubAppoint/Applicant";

function AppointmentMain() {
  const [show, setShow] = useState(true); // State to toggle between views

  return (
    <>
      {/* Header */}
      <AppointHeader title="Online Appointment" />

      {/* Main */}
      {show ? (
        <div className="appoint-cont">
          <div className="appoint-main">
            <img
              src={require("../../../images/logo5.f685c44bb2ede94ecc0d.png")}
              alt=""
            />
            <h3>Driving License Balochistan</h3>
            <div className="appoint-btn">
              <button onClick={() => setShow(false)}>Online Appointment</button>
            </div>
          </div>
        </div>
      ) : (
        <Applicant setShow={setShow} />  
      )}
    </>
  );
}

export default AppointmentMain;
