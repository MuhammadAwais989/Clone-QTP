import React, { useState } from "react";
import Card from "./CardChild";

// Import images
import verify from "../../images/Verify.123cc5f85d298b449ecd.png";
import learner from "../../images/learnerPermit.a9121a5ce76ceade5226.png";
import permanent from "../../images/Permanent License.2aa0bb1fcd0b9f3e0ad5.png";
import international from "../../images/International.d6b774abc970659a1047.png";
import duplicatee from "../../images/Duplicate 2.d700aa89513028b6be7f.png";
import managment from "../../images/tafficManagmentcard.png";
import problem from "../../images/tafficproblemcard.png";
import challan from "../../images/warning 1.5707d8a18da1290565e1.png";
import vectortop from "../../images/vector-top.b22e6170ecdd7ec3d712.png";

function CardSection() {
  const [isDrivingLicenseView, setIsDrivingLicenseView] = useState(true);

  // Card data for Driving License section
  const drivingLicenseCards = [
    {
      image: verify,
      title: "License Verification",
      description: "Get your verification through your CNIC number.",
      linkText: "Verification",
      linkUrl: "",
    },
    {
      image: learner,
      title: "Learner Permit",
      description: "Find Out More About Requirements",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: permanent,
      title: "Permanent License",
      description: "Learn About Permanent License Criteria",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: international,
      title: "International License",
      description: "Get Full Requirements for International License",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: duplicatee,
      title: "Duplicate License",
      description: "Get Duplicate License Requirements",
      linkText: "Get Info",
      linkUrl: "",
    },
  ];

  const trafficCards = [
    {
      image: managment,
      title: "Traffic Management",
      description: "Traffic controlled via City and Sariab Circles.",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: problem,
      title: "Traffic Problem",
      description: "Traffic Police need to address many challenges.",
      linkText: "Get Info",
      linkUrl: "",
    },
    {
      image: challan,
      title: "Challan/Fines",
      description: "Traffic Police must address challan/fine challenges.",
      linkText: "Get Info",
      linkUrl: "",
    },
  ];

  const cardsToDisplay = isDrivingLicenseView ? drivingLicenseCards : trafficCards;

  return (
    <>
      <div className="S-two-cont">
        <div className="img-div">
          <img src={vectortop} alt="Vector Top" />
        </div>
        <div className="btn-div">
          <button
            className={`s-t-btn-f ${isDrivingLicenseView ? "active" : ""}`}
            onClick={() => setIsDrivingLicenseView(true)}
          >
            Driving License
          </button>
          <button
            className={`s-t-btn ${!isDrivingLicenseView ? "active" : ""}`}
            onClick={() => setIsDrivingLicenseView(false)}
          >
            Traffic
          </button>
        </div>
      </div>

      <div
        className="card-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {cardsToDisplay.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            linkText={card.linkText}
            linkUrl={card.linkUrl}
          />
        ))}
      </div>
    </>
  );
}

export default CardSection;