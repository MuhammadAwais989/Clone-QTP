import React, { useState } from "react";
import OfficesHeader from "../../about/Offices/OfficesHeader";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import AppointDate from "./AppointDate";

const Branch = () => {
  const [selectedCard, setSelectedCard] = useState(null); // To track the selected card
  const [selectedBranch, setSelectedBranch] = useState(""); // To track the selected branch

  // Card data
  const cardData = [
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

  // Handle card click
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  // Handle branch select
  const handleBranchSelect = (e) => {
    setSelectedBranch(e.target.value);
  };

  // Check if both the card and branch are selected
  const isNextButtonEnabled = selectedBranch !== "" && selectedCard !== null;

  return (
    <>
      <OfficesHeader title="Branches" />

      <div className="branch-cont">
        <div className="branch-main">
          <AppointDate />
          <h4 className="branch-driving">Select Driving License Branch</h4>

          <select
            name="Select"
            value={selectedBranch}
            onChange={handleBranchSelect}
          >
            <option value="">Select...</option>
            <option value="1">Quetta</option>
          </select>

          <div className="branch-card-main">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`main-branch-card ${selectedCard === index ? "selected-card" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="first-card branch-card">
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
              className="applicant-next"
              disabled={!isNextButtonEnabled} // Disable if not both selected
            >
              <h4>Next</h4>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branch;
