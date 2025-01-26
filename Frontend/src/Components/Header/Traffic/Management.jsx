import React from "react";
import ManagmentHeader from "../about/Offices/OfficesHeader";

function Management() {
  return (
    <>
      {/* Traffic Managment Header */}
      <ManagmentHeader title="Traffic Managment" />

      {/* Main */}
      <div className="managment-cont">
        <p>
          "For better Traffic Management Quetta is divided into two Circles for
          better Traffic control/supervision."
        </p>

        <div className="manag-img">
            <img src={require("../../../images/Traffic-Management.ff6ad20616b696adeaaa.gif")} alt="" />
        </div>
      </div>
    </>
  );
}

export default Management;
