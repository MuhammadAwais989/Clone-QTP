import React, { useState, useEffect } from "react";
import ApplicantImage from "../../../../images/ApplicantImage.png";
import branch from "../../../../images/branch Image.png";
import timeslot from "../../../../images/Time slot.png";
import Reservaton from "../../../../images/Reservation.png";
import Appoint from "../../../../images/Appoint.png";
import confirm from "../../../../images/confirm.png";
import { MdOutlineNavigateNext } from "react-icons/md";

function Applicant({ setShow }) {
  const [nextDate, setNextDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cnicNumber, setCnicNumber] = useState("");
  const [name, setName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

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

  const ApplicantData = [
    {
      img: ApplicantImage,
      title: "Applicant",
    },
    {
      img: branch,
      title: "Branch",
    },
    {
      img: timeslot,
      title: "Time Slot",
    },
    {
      img: Reservaton,
      title: "Reservation",
    },
    {
      img: Appoint,
      title: "Appointment",
    },
    {
      img: confirm,
      title: "Confirmed",
    },
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Form validation check
  useEffect(() => {
    const isValid =
      name.trim() !== "" && mobileNumber.length === 12 && cnicNumber.length === 15;
    setIsFormValid(isValid);
  }, [name, mobileNumber, cnicNumber]);

  return (
    <>
      <div className="applicant-cont">
        <div className="applicant-main">
          <div className="applicant-date">
            <h4>Appointment Date</h4>
            <p>{nextDate}</p>
          </div>
          <div className="applicant-step">
            {ApplicantData.map((item, index) => (
              <div className="applicant-cirlce-main" key={index}>
                <div className="applicant-cirlce">
                  <img src={item.img} alt="" />
                </div>
                <div className="Applicant-title">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="applicant-input">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleNameChange}
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
              <button className="applicant-cancel" onClick={() => setShow(true)}>
                Cancel
              </button>
              <button
                className={`${isFormValid ? "next-active" : "applicant-next"}`}
                disabled={!isFormValid}
              >
                <h4>Next</h4> <span><MdOutlineNavigateNext /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Applicant;
