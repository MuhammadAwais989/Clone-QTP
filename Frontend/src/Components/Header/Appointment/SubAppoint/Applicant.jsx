import React, { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import AppointDate from "./AppointDate";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import AppointDetails from "./AppointDetails";

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
  const [selectedTime, setSelectedTime] = useState("");
  const [showReservation, setShowReservation] = useState(false);
  const [selectedReservationTime, setSelectedReservationTime] = useState(""); 
  const [currentView, setCurrentView] = useState("reservation");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [NextDate, setNextDate] = useState();

  const handleBranchSubmit = () => {
    const data = {
      name,
      cnicNumber,
      mobileNumber,
      branch: selectedBranch,
      license: selectedCardTitle,
      appointDate: NextDate,
      timeslot: selectedTime,
      dealingtiming: selectedReservationTime,
    };

    axios
      .post("http://localhost:3000/onlineappointment", data)
      .then((response) => {
        console.log("Data sent to backend:", response.data);
        setShowTimeSlot(true);
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };
 
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
      setShowBranch(true);
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
    setSelectedTime(time);
  };

  const handleNextClickInTimeSlot = () => {
    console.log("Selected Time Slot:", selectedTime);
    setShowReservation(true);
  };

  const handleBackClickInTimeSlot = () => {
    setShowTimeSlot(false); // Hide timeslot 
    setShowBranch(true);    // Show branch
  };

  useEffect(() => {
    setIsFormValid(
      name.trim() !== "" &&
        mobileNumber.length === 12 &&
        cnicNumber.length === 15
    );
  }, [name, mobileNumber, cnicNumber]);

  function Reservation({ handleBackClick }) {
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
      setSelectedIndex(index);
      setSelectedReservationTime(Data[index].time); // Store the selected time in state
    };
  
    const handleNextClick = () => {
      handleBranchSubmit();
      // fetchData();
      if (selectedIndex !== null) {
        setCurrentView("appointDetails"); // Set the view to "appointDetails"
      }
    };
  
    return (
      <div>
        {currentView === "reservation" && (
          <div className="Reser-cont">
            <AppointDate/>
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
                onClick={handleNextClick}
              >
                <h4>Next</h4>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </div>
        )}
  
        {currentView === "appointDetails" && <AppointDetails setCurrentView={setCurrentView}  />}
        {/* {currentView === "confirm" && <Confirm selectedTime={selectedReservationTime} />} Pass selectedTime to Confirm component */}
      </div>
    );
  }

  return (
    <>
      {!showBranch ? (
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
        </div>
      ) : !showTimeSlot ? (
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
                onClick={() => setShowTimeSlot(true)}
              >
                <h4>Next</h4>
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : !showReservation ? ( // Show timeslot UI only if showReservation is false
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
                onClick={handleNextClickInTimeSlot}
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
        <Reservation handleBackClick={() => setShowReservation(false)} />
      )}
    </>
  );
}

export default ApplicantWithTimeSlot;