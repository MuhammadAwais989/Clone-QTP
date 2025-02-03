import React, {  useState } from "react";
import { FaDownload } from "react-icons/fa6";

function Confirm({lastData}) {
  const [data, setData] = useState(lastData); 
 

  return (
    <>
      <div className="appoint-detail-cont">
        <div className="appoint-detail-main">
          <div className="appoint-table-main">
            <div
              className="appoint-table-header"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                alignItems: "center",
              }}
            >
              <h3>Appoint Details</h3>
              <button className="down-btn">
                <FaDownload className="down-icon"/>
                <span>Download</span>
              </button>
            </div>
            <div className="table-header-below">
              <div className="below-1">
                <p>Appointment No :</p>
                <span>1001009</span>
              </div>
              <div className="below-1">
                <p>License Type :</p>
                <span>Permanent Driving License</span>
              </div>
            </div>
            {/* Appointment details */}
            <div className="table-row">
              <span>Name</span>
              <p>{data.name}</p>
            </div>
            <div className="table-row">
              <span>CNIC</span>
              <p>{data.cnicNumber}</p>
            </div>
            <div className="table-row">
              <span>Booking For</span>
              <p>{data.bookingFor}</p>
            </div>
            <div className="table-row">
              <span>Time Slot</span>
              <p>{data.timeSlot}</p>
            </div>
            <div className="table-row">
              <span>Dealing Time</span>
              <p>{data.dealingTime}</p>
            </div>
            <div className="table-row">
              <span>Counter</span>
              <p>{data.counter}</p>
            </div>
            <div className="table-row">
              <span>License Type</span>
              <p>{data.licenseType}</p>
            </div>
            <div className="table-row">
              <span>Branch</span>
              <p>{data.branch}</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirm;
