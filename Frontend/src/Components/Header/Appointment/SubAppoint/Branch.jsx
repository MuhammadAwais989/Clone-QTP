import React, { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import AppointDate from "./AppointDate"; 
import TimeSlot from "./TimeSlot"; 
import axios from "axios"; // Import axios

function Branch({ onBackClick }) { 
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const [selectedCardTitle, setSelectedCardTitle] = useState(""); // State to store selected card's title

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
    setSelectedCardTitle(CardData[index].title); // Store the selected card's title
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    console.log(e.target.value);
    
  };

  const handleNextClick = () => {
    setShowTimeSlot(true);
    sendDataToBackend(); 
  };

  const sendDataToBackend = () => {
    const data = {
      branch: selectedBranch,
      license: selectedCardTitle, 
    };

    axios.post("http://localhost:3000/onlineappointment", data) // Adjust URL based on your backend route
      .then((response) => {
        console.log("Data sent to backend:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };

  const handleBackClick = () => {
    setShowTimeSlot(false);
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
              <option value="Quetta">Quetta</option>
            </select>
            <div className="brnach-card-main">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className="main-branch-card"
                  onClick={() => handleCardClick(index)}
                >
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
              <button className="applicant-cancel" onClick={onBackClick}>
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
          </>
        )}

        {showTimeSlot && <TimeSlot handleBackClick={handleBackClick} />}
      </div>
    </div>
  );
}

export default Branch;
