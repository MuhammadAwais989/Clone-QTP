import React, { useState } from "react";
import AppointHeader from "../about/Offices/OfficesHeader";
import { Link } from "react-router-dom";
import Applicant from "./SubAppoint/Applicant";

function AppointmentMain() {
  return (
    <>
      {/* Header */}
      <AppointHeader title="Online Appointment" />

      {/* Main */}
      
      <div className="appoint-cont">
        <div className="appoint-main">
          <img
            src={require("../../../images/logo5.f685c44bb2ede94ecc0d.png")}
            alt=""
          />
          <h3>Driving License Balochistan</h3>
          <div className="appoint-btn">
            <Link to="" >Online Appointment</Link>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default AppointmentMain;
