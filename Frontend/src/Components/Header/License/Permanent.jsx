import React from "react";
import PermanentHeader from "../about/Offices/OfficesHeader";

function Permanent() {
  return (
    <>
      {/* Header */}
      <PermanentHeader title="Permanent License" />

      {/* Main */}
      <div className="duplicate-cont">
        <div className="duplicate-main">
          <h1>Requirements for Permanent License:</h1>
          <ul>
            <li>Application Form (A).</li>
            <li>Original Learner Permit of at least 6 weeks.</li>
            <li>Two Passport size fresh Photo Graphs.</li>
            <li>Paste a Ticket of Mentioned Fee on license Documents.</li>
            <li>Attached the Driving test Results.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Permanent;
