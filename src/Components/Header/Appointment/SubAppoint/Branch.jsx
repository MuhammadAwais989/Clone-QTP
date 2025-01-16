import React from "react";
import OfficesHeader from "../../about/Offices/OfficesHeader";
import { MdOutlineNavigateNext } from "react-icons/md";

function Branch() {
  return (
    <>
      <OfficesHeader title="Branches" />

      <div className="branch-cont">
        <div className="branch-main">
          <h4 className="branch-driving">Select Driving License Branch</h4>
          <select name="Select" id="">
            <option value>Select...</option>
            <option value="1">Quetta</option>
          </select>
          <div className="first-card">
            <img
              src={require("../../../../images/learnerPermit.a9121a5ce76ceade5226.png")}
              alt=""
            />
          </div>
            <h5>Learner Permit</h5>
          <div className="applicant-btn">
            <button className="applicant-cancel">Cancel</button>
            <button className="applicant-next" disabled>
              <h4>Next</h4>{" "}
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Branch;
