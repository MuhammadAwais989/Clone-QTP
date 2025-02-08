import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

function AppointDetails() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get("http://localhost:3001/onlineappointment");
        setFetchData(response.data);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };

    if (!fetchData) fetchDataFromAPI();
  }, [fetchData]);

  const lastData = Array.isArray(fetchData) ? fetchData[fetchData.length - 1] : {};

  const handleBackClick = () => {
    setShowConfirm(false);
  };

  const handleNextClick = () => {
    setShowConfirm(true);
  };

  const downloadPDF = () => {
    const capture = document.querySelector(".appoint-detail-main");
    html2canvas(capture, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("appointment_details.pdf");
    });
  };

  return (
    <>
      {!showConfirm ? (
        <div className="appoint-detail-cont">
          <div className="appoint-detail-main">
            <div className="appoint-table-main">
              <div className="appoint-table-header">
                <h3>Please Confirm Appointment Details</h3>
              </div>
              {/* Appointment Details */}
              <div className="table-row">
                <span>Name</span>
                <p>{lastData?.name || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>CNIC</span>
                <p>{lastData?.cnicNumber || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Booking For</span>
                <p>{lastData?.appointDate || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Time Slot</span>
                <p>{lastData?.timeslot || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Dealing Time</span>
                <p>{lastData?.dealingtiming || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Counter</span>
                <p>Counter 1</p>
              </div>
              <div className="table-row">
                <span>License Type</span>
                <p>{lastData?.license || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Branch</span>
                <p>{lastData?.branch || "N/A"}</p>
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
      ) : (
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
                <h3>Appointment Details</h3>
                <button className="down-btn" onClick={downloadPDF}>
                  <FaDownload className="down-icon" />
                  <span>Download</span>
                </button>
              </div>
              <div className="table-header-below">
                <div className="below-1">
                  <p>Appointment No :</p>
                  <span>{lastData?.appointmentNumber || "N/A"}</span>
                </div>
                <div className="below-1">
                  <p>License Type :</p>
                  <span>{lastData?.license || "N/A"}</span>
                </div>
              </div>
              {/* Appointment Details */}
              <div className="table-row">
                <span>Name</span>
                <p>{lastData?.name || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>CNIC</span>
                <p>{lastData?.cnicNumber || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Booking For</span>
                <p>{lastData?.appointDate || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Time Slot</span>
                <p>{lastData?.timeslot || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Dealing Time</span>
                <p>{lastData?.dealingtiming || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Counter</span>
                <p>Counter 1</p>
              </div>
              <div className="table-row">
                <span>License Type</span>
                <p>{lastData?.license || "N/A"}</p>
              </div>
              <div className="table-row">
                <span>Branch</span>
                <p>{lastData?.branch || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppointDetails;
