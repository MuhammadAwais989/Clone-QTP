import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import AppointDate from "./AppointDate";
import axios from "axios";

function ApplicantWithTimeSlot() {
  const [name, setName] = useState("");
  const [cnicNumber, setCnicNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showBranch, setShowBranch] = useState(false);
  const [showTimeSlot, setShowTimeSlot] = useState(false);
  const [selectedTime, setSelectedTime] = useState(""); // Store selected time
  const [showReservation, setShowReservation] = useState(false);

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

  const TableData = [
    { id: 1, time: "9-10", seats: "10", available: "10", booked: "0" },
    { id: 2, time: "10-11", seats: "10", available: "10", booked: "0" },
    { id: 3, time: "11-12", seats: "10", available: "10", booked: "0" },
    { id: 4, time: "12-13", seats: "10", available: "10", booked: "0" },
    { id: 5, time: "14-15", seats: "10", available: "10", booked: "0" },
    { id: 6, time: "15-16", seats: "10", available: "10", booked: "0" },
    { id: 7, time: "16-17", seats: "10", available: "10", booked: "0" },
  ];

  const handleBranchSubmit = () => {
    const data = {
      name,
      cnicNumber,
      mobileNumber,
      branch: selectedBranch,
      license: selectedCardTitle,
      timeslot: selectedTime,
    };

    axios
      .post("http://localhost:3000/onlineappointment", data)
      .then((response) => {
        console.log("Data sent to backend:", response.data);
        setShowTimeSlot(true);
        handleNextClickInTimeSlot(); // Backend pe data successfully send hone ke baad hi time slot dikhao
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };

  const handleMobileChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 4) {
      value = `${value.slice(0, 4)}-${value.slice(4)}`;
    }
    setMobileNumber(value);
  };

  const handleCnicChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 13) value = value.slice(0, 13);
    if (value.length > 5) {
      value = `${value.slice(0, 5)}-${value.slice(5)}`;
    }
    if (value.length > 13) {
      value = `${value.slice(0, 13)}-${value.slice(13)}`;
    }
    setCnicNumber(value);
  };

  const handleNextClick = () => {
    if (isFormValid) {
      setShowBranch(true); // Applicant form hide, branch selection show
      setShowTimeSlot(true); // Time slot UI show
    }
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setSelectedCardTitle(CardData[index].title);
  };

  const handleTimeSlotClick = (id, time) => {
    setSelectedCard(id);
    setSelectedTime(time); // Store selected time in state
  };

  const handleNextClickInTimeSlot = () => {
    
    console.log("Selected Time Slot:", selectedTime); // Check selected time
    setShowReservation(true);
  };

  const handleBackClickInTimeSlot = () => {
    setShowReservation(false);
  };

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        mobileNumber.length === 12 &&
        cnicNumber.length === 15
    );
  }, [name, mobileNumber, cnicNumber]);

  const Reservation = () => (
    <div className="reservation-main">
      <h4>Reservation Details</h4>
      <p>Selected Time Slot: {selectedTime}</p>
      <div className="applicant-btn">
        <button className="applicant-cancel" onClick={handleBackClickInTimeSlot}>
          <IoMdArrowDropleft /> Back
        </button>
        <button className="applicant-next">
          <h4>Confirm</h4>
          <span>
            <MdOutlineNavigateNext />
          </span>
        </button>
      </div>
    </div>
  );

  return (
  <>
    {!showBranch ? (
      // Hide branch-cont when showBranch is false
      <div className="applicant-cont">
        <div className="applicant-main">
          <AppointDate />
          <div className="applicant-input">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Your Number"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
            <label htmlFor="">CNIC</label>
            <input
              type="text"
              placeholder="Enter Your CNIC Number"
              value={cnicNumber}
              onChange={handleCnicChange}
            />
            <div className="applicant-btn">
              <button
                className="applicant-cancel"
                onClick={() => setShowBranch(false)}
              >
                Cancel
              </button>
              <button
                className={`${isFormValid ? "next-active" : "applicant-next"}`}
                disabled={!isFormValid}
                onClick={handleNextClick} // Handle next click to show branch
              >
                <h4>Next</h4>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : !showTimeSlot ? (
      // Branch selection section that shows if showBranch is true
      <div className="branch-cont">
        <div className="branch-main">
          <AppointDate />
          <h4 className="branch-driving">Select Driving License Branch</h4>
          <select
            name="Select"
            value={selectedBranch}
            onChange={handleBranchChange}
          >
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
            <button
              className="applicant-cancel"
              onClick={() => setShowBranch(false)}
            >
              <IoMdArrowDropleft /> Back
            </button>
            <button
              className={`applicant-next ${
                selectedBranch && selectedCard !== null ? "next-active" : ""
              }`}
              disabled={!selectedBranch || selectedCard === null}
              onClick={handleNextClick} // Handle next click to show timeslot
            >
              <h4>Next</h4>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    ) : (
      // Show the time slot UI if showTimeSlot is true
      <div className="timeslot-cont">
          <AppointDate />
        <div className="timeslot-main">
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
                  onClick={() => handleTimeSlotClick(item.id, item.time)}
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
                  <li><FiClock /></li>
                  <li>{item.time}</li>
                  <li>{item.seats}</li>
                  <li>{item.available}</li>
                  <li>{item.booked}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="applicant-btn">
            <button
              className="applicant-cancel"
              onClick={handleBackClickInTimeSlot}
            >
              <IoMdArrowDropleft /> Back
            </button>
            <button
              className={`applicant-next ${selectedCard ? "next-active" : ""}`}
              disabled={!selectedCard}
              onClick={handleBranchSubmit} // Handle submit for reservation
            >
              <h4>Next</h4>
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </div>
      </div>
    )}

    {showReservation && <Reservation />}
  </>
);

}

export default ApplicantWithTimeSlot;
