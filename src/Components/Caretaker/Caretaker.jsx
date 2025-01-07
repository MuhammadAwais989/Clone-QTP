import React from "react";
import comaas from "../../images/comaasa.png";

function Caretaker({ careTaker, Designation, Description, Image }) {
  return (
    
      <>
     
      <div className="caretaker-card-cont">
        <div className="caretaker-card"
        data-aos="fade-up"
      data-aos-duration="2000"
        >
          <img className="caretaker-comas" src={comaas} alt="" />
          <p>{Description}</p>
          <img className="caretaker-officer-img" src={Image} alt="caretaker" />
          <div className="caretaker-name">
            <h3>{careTaker}</h3>
            <span>{Designation}</span>
          </div>
        </div>
      </div>
      </>
   
  );
}

export default Caretaker;
