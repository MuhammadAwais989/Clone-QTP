import React from "react";
import ChallanHeader from "../about/Offices/OfficesHeader";

function Challan() {
  return (
    <>
      {/* Challan Header */}
      <ChallanHeader title="Challan/Fines" />

      {/* main */}
      <div className="managment-cont">
        <div className="manag-img">
          <img
            src={require("../../../images/ChallanFines.d00bde211908477217c7.gif")}
            alt=""
          />
        </div>
      </div>
      <p className="challanPara">
        "Challan/Fines are made to retrain voilatiers for Traffic also source of
        collection of Revenue for the Govt where spent the welfare of General
        public and development of Country. In the year 2005 new Ticketing System
        was introduced in Quetta City through an Ord: and so far the system is
        running quiet sucessfully.there are three challan counter and offices
        for deposit/collection of papers."
      </p>
    </>
  );
}

export default Challan;
