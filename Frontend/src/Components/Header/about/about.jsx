import React from "react";
import aboutheadimg from "../../../images/TP (1).eb084def24c6a22f579e.png";
import naseem from "../../../images/naseem.png";

export function About() {
  return (
    <>
      <div className="contact-header">
        <img src={aboutheadimg} alt="" />
        <h1>about us</h1>
      </div>
      <div className="about-1-cont">
        <div className="about-1-main">
          <div className="about1-img">
            <img src={naseem} alt="" />
          </div>
          <div className="about1-text">
            <h4>
              Learn To Drive, Drive With <br /> Safety And Control.
            </h4>
            <p>
              Learning safe driving involves initial vehicle familiarization and
              obeying traffic laws. Maintain a safe distance from other vehicles
              on the road. Always signal your intentions for turns and
              consistently check mirrors along with blind spots for potential
              hazards. <br /> Practicing control behind the wheel demands
              adherence to safety measures. Familiarity with the vehicle's
              functions aids in responsible driving. Consistent monitoring of
              blind spots and mirrors ensures awareness. Remember, adherence to
              traffic laws is fundamental to safe driving practices.
            </p>
          </div>
        </div>
      </div>

      <div className="about-1-cont about-2">
        <div className="about-1-main">
          <div className="about1-text">
            <h4>
              Our service makes you feel <br /> more protected.
            </h4>
            <p style={{textAlign: "justify"}}>
              With our service, your sense of security amplifies significantly.
              We prioritize your safety above all else, ensuring a shield of
              protection around you. Our comprehensive approach guarantees a
              heightened feeling of security, instilling confidence in your
              experience. From start to finish, we've crafted every aspect to
              prioritize your peace of mind. Rest assured, our service goes
              beyond mere provision—it's a commitment to your protection. We
              understand the importance of feeling secure; hence, our service
              leaves no stone unturned in safeguarding you. Trust us to elevate
              your sense of safety and protection, empowering you at every step.
              You'll find comfort in our meticulous attention to detail,
              reinforcing your peace and confidence.
            </p>
          </div>
          <div className="about1-img">
            <img className="sec-2-img" src={naseem} alt="" />
          </div>
        </div>
      </div>

      <div className="about-1-cont">
        <div className="about-1-main">
          <div className="about1-text">
            <h4>
              Our service makes you feel <br /> more protected.
            </h4>
            <p style={{textAlign: "justify"}}>
              With our service, your sense of security amplifies significantly.
              We prioritize your safety above all else, ensuring a shield of
              protection around you. Our comprehensive approach guarantees a
              heightened feeling of security, instilling confidence in your
              experience. From start to finish, we've crafted every aspect to
              prioritize your peace of mind. Rest assured, our service goes
              beyond mere provision—it's a commitment to your protection. We
              understand the importance of feeling secure; hence, our service
              leaves no stone unturned in safeguarding you. Trust us to elevate
              your sense of safety and protection, empowering you at every step.
              You'll find comfort in our meticulous attention to detail,
              reinforcing your peace and confidence.
            </p>
          </div>
          <div className="about1-img">
            <img src={naseem} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
