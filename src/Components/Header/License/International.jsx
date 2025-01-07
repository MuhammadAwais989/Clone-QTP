import React from "react";
import InternationalHeader from "../about/Offices/OfficesHeader";

function International() {
  return (
    <>
      {/* Header */}
      <InternationalHeader title="International License" />

      {/* Main */}
      <div className="duplicate-cont">
        <div className="duplicate-main">
          <h1>Requirements for International License:</h1>
          <ul>
            <li>Required International Application Form.</li>
            <li>Copy of CNIC.</li>
            <li>Two Passport size fresh Photo Graphs.</li>
            <li>A Copy of Valid Driving License issued.</li>
            <li>
              A copy of Pakistani Passport valid for Atleast 6 Months with Visa.
            </li>
            <li>Paste a Ticket of Mentioned Fee on license Documents.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default International;
