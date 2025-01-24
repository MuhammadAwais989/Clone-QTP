import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import AppointDate from "./AppointDate";
// import { TiTick } from "react-icons/ti";

function Branch({ onNextClick }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");

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

  const isNextButtonEnabled = selectedBranch !== "" && selectedCard !== null;

  const handleNextClick = () => {
    if (isNextButtonEnabled) {
      onNextClick(); // Trigger parent function to show TimeSlot component
    }
  };

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
          <button className="applicant-cancel">
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
