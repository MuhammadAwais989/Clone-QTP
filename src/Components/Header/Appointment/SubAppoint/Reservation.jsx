import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";

function Reservation({ handleBackClick }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const Data = [
    { icon: <FaUser />, time: "12:06:00" },
    { icon: <FaUser />, time: "12:12:00" },
    { icon: <FaUser />, time: "12:18:00" },
    { icon: <FaUser />, time: "12:24:00" },
    { icon: <FaUser />, time: "12:30:00" },
    { icon: <FaUser />, time: "12:36:00" },
    { icon: <FaUser />, time: "12:42:00" },
    { icon: <FaUser />, time: "12:48:00" },
    { icon: <FaUser />, time: "12:54:00" },
  ];

  const handleCardClick = (index) => {
    setSelectedIndex(index); // Select the clicked time slot
  };

 

  return (
    <>
      
        <div className="Reser-cont">
          <div className="Reser-main">
            {Data.map((item, index) => (
              <div
                className="card-wrap"
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className="reser-card"
                  style={{
                    backgroundColor: selectedIndex === index ? "#3072c2" : "",
                    color: selectedIndex === index ? "white" : "#4d975c",
                  }}
                >
                  <span>{item.icon}</span>
                  <p>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="applicant-btn">
            <button className="applicant-cancel" onClick={handleBackClick}>
              <IoMdArrowDropleft /> Back
            </button>

            <button
              className={selectedIndex !== null ? "applicant-next next-active" : "applicant-next"}
              disabled={selectedIndex === null}
            >
              <h4>Next</h4>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      
    </>
  );
}

export default Reservation;
