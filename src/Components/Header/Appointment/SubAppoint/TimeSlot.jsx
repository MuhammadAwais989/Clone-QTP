import React, { useState } from "react";
import AppointDate from "./AppointDate";
import { FiClock } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";

function TimeSlot() {
  const [selectedCard, setSelectedCard] = useState(null);

  const TableData = [
    { id: 1, time: "9-10", seats: "10", available: "10", booked: "0" },
    { id: 2, time: "10-11", seats: "10", available: "10", booked: "0" },
    { id: 3, time: "11-12", seats: "10", available: "10", booked: "0" },
    { id: 4, time: "12-13", seats: "10", available: "10", booked: "0" },
    { id: 5, time: "14-15", seats: "10", available: "10", booked: "0" },
    { id: 6, time: "15-16", seats: "10", available: "10", booked: "0" },
    { id: 7, time: "16-17", seats: "10", available: "10", booked: "0" },
  ];

  const handleTimeSlotClick = (id) => {
    setSelectedCard(id); // Update selected time slot
  };

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
                onClick={() => handleTimeSlotClick(item.id)}
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
          <button className="applicant-cancel">
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

export default TimeSlot;
