import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import Confirm from "./Confirm";
import axios from "axios";

function AppointDetails() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [fetchData, setFetchData] = useState();
  const [nextDate, setNextDate] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/onlineappointment")
      .then((response) => {
        setFetchData(response.data);
        // console.log(lastData);
      })

      .catch((error) => console.error(error));
  }, []);
    // Check if fetchData is an array and get the last object
    const lastData = Array.isArray(fetchData)
    ? fetchData[fetchData.length - 1]
    : {};
  // eslint-disable-next-line no-lone-blocks
  {console.log(lastData)};

  useEffect(() => {
    const updateDate = () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1);
      const date = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "2-digit" });
      const year = currentDate.getFullYear();
      const formattedDate = `${date}-${month}-${year}`;
      setNextDate(formattedDate);
    };

    updateDate();
    const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleBackClick = () => {
    setShowConfirm(false);
  };

  const handleNextClick = () => {
    setShowConfirm(true);
  };



  return (
    <>
      {!showConfirm ? (
        <div>
          <div className="appoint-detail-cont">
            <div className="appoint-detail-main">
              <div className="appoint-table-main">
                <div className="appoint-table-header">
                  <h3>Please Confirm Appointment Details</h3>
                </div>
                {/* Appointment details */}
                <div className="table-row">
                  <span>Name</span>
                  <p>{lastData.name || "N/A"}</p>
                </div>
                <div className="table-row">
                  <span>CNIC</span>
                  <p>{lastData.cnicNumber || "N/A"}</p>
                </div>
                <div className="table-row">
                  <span>Booking For</span>
                  <p>{nextDate}</p>
                </div>
                <div className="table-row">
                  <span>Time Slot</span>
                  <p>{lastData.timeslot || "N/A"}</p>
                </div>
                <div className="table-row">
                  <span>Dealing Time</span>
                  <p>{lastData.dealingtiming || "N/A"}</p>
                </div>
                <div className="table-row">
                  <span>Counter</span>
                  <p>Counter 1</p>
                </div>
                <div className="table-row">
                  <span>License Type</span>
                  <p>{lastData.license || "N/A"}</p>
                </div>
                <div className="table-row">
                  <span>Branch</span>
                  <p>{lastData.branch || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="applicant-btn">
              <button className="applicant-cancel" onClick={handleBackClick}>
                <IoMdArrowDropleft /> Back
              </button>
              <button className="next-active" onClick={handleNextClick}>
                Next <MdOutlineNavigateNext />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Confirm lastData={lastData}/>
      )}
    </>
  );
}

export default AppointDetails;
