import React from "react";
import DuplicateHeader from "../about/Offices/OfficesHeader";

function DupicateLicense() {
  return (
    <>
      <DuplicateHeader title="Duplicate License" />
      <div className="duplicate-cont">
        <div className="duplicate-main">
          <h1>Requirements for Duplicate License:</h1>
          <ul>
            <li>Required for LLD Form.</li>
            <li>Copy of CNIC.</li>
            <li>Two Passport size fresh Photo Graphs.</li>
            <li>
              Report or A certificate issued by relevant Post Office which shows
              the expiry date of license.
            </li>
            <li>FIR (lost license report)of the Police Station.</li>
            <li>Paste a Ticket of Mentioned Fee on license Documents.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DupicateLicense;
