import React, { useState, useEffect } from "react";
import OfficesHeader from "../../about/Offices/OfficesHeader";
import ApplicantImage from '../../../../images/ApplicantImage.png'
import branch from '../../../../images/branch Image.png'
import timeslot from '../../../../images/Time slot.png'
import Reservaton from '../../../../images/Reservation.png'
import Appoint from '../../../../images/Appoint.png'
import confirm from '../../../../images/confirm.png'

function Applicant() {
  const [nextDate, setNextDate] = useState("");

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
      title: "Applicant"
    },
    {
      img: branch,
      title: "Branach"
    },
    {
      img: timeslot,
      title: "Time Slot"
    },
    {
      img: Reservaton,
      title: "Reservation"
    },
    {
      img: Appoint,
      title: "Appointment"
    },
    {
      img: confirm,
      title: "Confirmed"
    },
  ] 

  return (
    <>
      <OfficesHeader title="Applicant" />
      {/* Applicant */}
      <div className="applicant-cont">
        <div className="applicant-main">
          <div className="applicant-date">
            <h4>Appointment Date</h4>
            <p>{nextDate}</p>
          </div>
          <div className="applicant-step">
            {ApplicantData.map((item, index) => (  
            <div className="applicant-cirlce-main" >
                <div className="applicant-cirlce" key={index}>
              <img src={item.img} alt="" />
                </div>
                <div className="Applicant-title">
              <p>{item.title}</p>
                </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Applicant;
