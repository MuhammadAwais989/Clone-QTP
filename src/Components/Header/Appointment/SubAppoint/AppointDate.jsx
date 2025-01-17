import React,{ useEffect, useState } from 'react'
import ApplicantImage from "../../../../images/ApplicantImage.png";
import branch from "../../../../images/branch Image.png";
import timeslot from "../../../../images/Time slot.png";
import Reservaton from "../../../../images/Reservation.png";
import Appoint from "../../../../images/Appoint.png";
import confirm from "../../../../images/confirm.png";

function AppointDate() {
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
  return (
    <>
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
    </>
  )
}

export default AppointDate