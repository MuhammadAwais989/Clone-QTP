import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

function New() {
  const [active, nonactive] = useState(true);
  const [imgactive, nonimgactive] = useState(false);
  return (
    <>
      <h2 className="new-heading">Requirement</h2>
      <div className="new-main">
        <ul>
          <li className="new-active" onClick={() => nonactive(!active)}>
            <p>New Learner License</p>
            <TiArrowSortedDown className="new-icon" />
          </li>
          {active ? (
            <div className="duplicate-main">
              <ul className="new-list">
                <li>Required for LLD Form.</li>
                <li>Copy of CNIC.</li>
                <li>Two Passport size fresh Photo Graphs.</li>
                <li>
                  Report or A certificate issued by relevant Post Office which
                  shows the expiry date of license.
                </li>
                <li>FIR (lost license report)of the Police Station.</li>
                <li>Paste a Ticket of Mentioned Fee on license Documents.</li>
              </ul>
            </div>
          ) : (
            ""
          )}

          <h2 className="new-heading process-heading">Proces</h2>
          <li className="new-active" onClick={() => nonimgactive(!imgactive)}>
            <p>Process</p>
            <TiArrowSortedDown className="new-icon" />
          </li>
          {imgactive ? (
            <div className="new-img">
              <img
                src={require("../../../../images/NewLearner.5e0c2be7ec1cd7569627.png")}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
    </>
  );
}

export default New;
