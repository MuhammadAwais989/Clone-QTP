import React from "react";
import Caretaker from "./Caretaker";
import MirSarfrazAhmedBugtiImg from "../../images/MirSarfrazAhmedBugti.403b8dc729a537ac46cc.jpeg";
import user from "../../images/user.a6143582309785dca610.png";
import MoazzamJahAnsariImg from "../../images/Moazzam Jah Ansari.7a0f3883140efd2ef08f.jpeg";

function Message() {
  const cardData = [
    {
      careTaker: "Mir Sarfraz Ahmed Bugti",
      Description:
        "The Balochistan Traffic Police's successful digitization of services marks progress not just for the province but for all of Pakistan. The partnership between Quetta Traffic Police and M/s Info Access Pakistan, backed by community trust and government support, underpins this achievement. Acknowledging their dedicated efforts, I extend congratulations and wish ongoing success to the Balochistan Police in serving our diverse nation.",
      Image: MirSarfrazAhmedBugtiImg,
      Designation: "Chief Minister of Balochistan",
    },
    {
      careTaker: "Moazzam Jah Ansari",
      Description:
        "Balochistan Traffic Police, a dedicated and professional force, upholds the highest standards of service to residents, businesses, and visitors. Their commitment to ethical conduct and community trust is unwavering. Despite the challenges of law enforcement, the commander takes pride in the force's adaptability and excellence. They also appreciate the contributions of M/s Info Access Pakistan in deploying the Traffic Management System.",
      Image: MoazzamJahAnsariImg,
      Designation: "Inspector General of Police Balochistan",
    },
    {
      careTaker: "Aetzaz Ahmed Goraya (PSP)",
      Description:
        "As Commissioner of Balochistan Traffic Police, the primary focus is on building public trust and enhancing safety. The goal is to provide efficient and respectful services while ensuring transparency in all interactions with the community. To address financial constraints, the department is undergoing a restructuring process to sustain the community's respect for the police force and to ensure exceptional service for future needs in Quetta.",
      Image: user,
      Designation: "Deputy Inspector General of Police Quetta",
    },
  ];

  return (
    <>
      <div className="caretaker-heading">
        <h1>Message By Caretaker</h1>
      </div>
      <div className="caretake-cont">
        {cardData.map((card, index) => (
          <Caretaker key={index} {...card} />
        ))}
      </div>
    </>
  );
}

export default Message;
