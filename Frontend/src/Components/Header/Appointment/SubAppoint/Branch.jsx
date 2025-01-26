import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import AppointDate from "./AppointDate"; // Ensure this import is correct
import TimeSlot from "./TimeSlot"; // Import TimeSlot inside Branch component

function Branch({ onBackClick }) { // Get onBackClick function as a prop
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showTimeSlot, setShowTimeSlot] = useState(false); // State to toggle TimeSlot component

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
    setShowTimeSlot(true); // Show TimeSlot component when Next button is clicked
  };

  const handleBackClick = () => {
    setShowTimeSlot(false); // Hide TimeSlot and show Branch component again
  };

  const isNextButtonEnabled = selectedBranch !== "" && selectedCard !== null;

  return (
    <div className="branch-cont">
      <div className="branch-main">
        <AppointDate />
        {!showTimeSlot && (
          <>
            <h4 className="branch-driving">Select Driving License Branch</h4>
            <select name="Select" value={selectedBranch} onChange={handleBranchChange}>
              <option value="">Select...</option>
              <option value="1">Quetta</option>
            </select>
            <div className="brnach-card-main">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className="main-branch-card"
                  onClick={() => handleCardClick(index)}
                >
                  <div
                    className={`first-card branch-card ${
                      selectedCard === index ? "selected-card" : ""
                    }`}
                  >
                    <img src={card.img} alt={card.title} />
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                </div>
              ))}
            </div>
            <div className="applicant-btn">
              <button className="applicant-cancel" onClick={onBackClick}> {/* Use onBackClick passed from Applicant */}
                <IoMdArrowDropleft />
                Back
              </button>
              <button
                className={`applicant-next ${isNextButtonEnabled ? "next-active" : ""}`}
                disabled={!isNextButtonEnabled}
                onClick={handleNextClick} // Show TimeSlot on Next button click
              >
                <h4>Next</h4>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </>
        )}

        {showTimeSlot && <TimeSlot handleBackClick={handleBackClick} />} {/* Show TimeSlot component and pass handleBackClick */}
      </div>
    </div>
  );
}

export default Branch;
