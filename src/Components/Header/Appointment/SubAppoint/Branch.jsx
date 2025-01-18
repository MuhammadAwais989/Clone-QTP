import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import AppointDate from "./AppointDate";
import { FiClock } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

function Branch({ onBackClick }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showTimeSlot, setShowTimeSlot] = useState(false);

  const TableData = [
    { id: 1, time: "9-10", seats: "10", available: "10", booked: "0" },
    { id: 2, time: "10-11", seats: "10", available: "10", booked: "0" },
    { id: 3, time: "11-12", seats: "10", available: "10", booked: "0" },
    { id: 4, time: "12-13", seats: "10", available: "10", booked: "0" },
    { id: 5, time: "14-15", seats: "10", available: "10", booked: "0" },
    { id: 6, time: "15-16", seats: "10", available: "10", booked: "0" },
    { id: 7, time: "16-17", seats: "10", available: "10", booked: "0" },
  ]
  const CardData = [
    {
      img: require("../../../../images/learnerPermit.a9121a5ce76ceade5226.png"),
      title: "Learners Driving License",
    },
    {
      img: require("../../../../images/Permanent License.2aa0bb1fcd0b9f3e0ad5.png"),
      title: "Permanent Driving License",
    },
    {
      img: require("../../../../images/test.png"),
      title: "Test Driving",
    },
    {
      img: require("../../../../images/inter.png"),
      title: "International Driving License",
    },
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleNextClick = () => {
    if (selectedBranch !== "" && selectedCard !== null) {
      setShowTimeSlot(true); 
    }
  };

  const handleBackClick = () => {
    onBackClick(); // This will call the function passed from Applicant
  };

  const isNextButtonEnabled = selectedBranch !== "" && selectedCard !== null;

  if (showTimeSlot) {
    return (
      <div className="timeslot-cont">
        <div className="timeslot-main">
          <AppointDate />
          <div className="table-main">
            <div className="table-header">
              <li>Select</li>
              <li>Time Slot</li>
              <li>Seats</li>
              <li>Available</li>
              <li>Booked</li>
            </div>

            <div className="table-body">
            {TableData.map((item) => (
              <ul
                  key={item.id}
                  onClick={() => setSelectedCard(item.id)}
                  style={{
                    color: selectedCard === item.id ? "rgba(5, 127, 207, 0.9)" : "",
                  }}
                >
                  <span>
                    <TiTick
                      style={{
                        color: "green",
                        fontSize: "25px",
                        display: selectedCard === item.id ? "block" : "none",
                      }}
                    />
                  </span>
                  <li>
                    <FiClock />
                  </li>
                  <li>{item.time}</li>
                  <li>{item.seats}</li>
                  <li>{item.available}</li>
                  <li>{item.booked}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="applicant-btn">
            <button className="applicant-cancel" onClick={handleBackClick}>
              <IoMdArrowDropleft />
              Back
            </button>
            <button
              className={`applicant-next ${selectedCard ? "next-active" : ""}`}
              disabled={!selectedCard}
            >
              <h4>Next</h4>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="branch-cont">
      <div className="branch-main">
        <AppointDate />
        <h4 className="branch-driving">Select Driving License Branch</h4>
        <select name="Select" value={selectedBranch} onChange={handleBranchChange}>
          <option value="">Select...</option>
          <option value="1">Quetta</option>
        </select>
        <div className="brnach-card-main">
          {CardData.map((card, index) => (
            <div key={index} className="main-branch-card" onClick={() => handleCardClick(index)}>
              <div
                className={`first-card branch-card ${selectedCard === index ? "selected-card" : ""}`}
              >
                <img src={card.img} alt={card.title} />
              </div>
              <h5 className="card-title">{card.title}</h5>
            </div>
          ))}
        </div>
        <div className="applicant-btn">
          <button className="applicant-cancel" onClick={handleBackClick}>
            <IoMdArrowDropleft />
            Back
          </button>
          <button
            className={`applicant-next ${isNextButtonEnabled ? "next-active" : ""}`}
            disabled={!isNextButtonEnabled}
            onClick={handleNextClick}
          >
            <h4>Next</h4>
            <span>
              <MdOutlineNavigateNext />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Branch;
