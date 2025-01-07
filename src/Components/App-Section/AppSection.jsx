import React from "react";
import mobflip from "../../images/mob-flip.ff77cdf3887789d799c5.png";
import vector from "../../images/vector.115b80534dbc9b6fb4ca.png";
import imageslide1 from "../../images/Mobile.13533dddd40fa9baaabd.gif";
import imageslide2 from "../../images/responsiveMobile.8dbd1e4475cc487ece97.gif";
import apprect1 from "../../images/rect.19e7f2238303f3c4c805.png";
import stick from "../../images/sticks.80d583bf344e03430a73.png";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";

function AppSection() {
  return (
    <div className="app-sec-cont">
      <div className="app-sec-top">
        <div className="app-react-img">
          <img src={mobflip} alt="" />
          <img src={vector} alt="" />
        </div>

        <div className="app-sec-heading">
          <h1>Download Our App</h1>
          <span></span>
        </div>

        <div className="top-right-img">
          <img src={vector} alt="" />
        </div>
      </div>

      <div className="app-sec-img">
        <img
          className="mobile-slide mobile-slidehide"
          src={imageslide1}
          alt=""
        />
        <img
          className="mobile-slide mobile-slideactive"
          src={imageslide2}
          alt=""
        />
        <img className="app-rect1" src={apprect1} alt="" />
        <img className="app-rect2" src={apprect1} alt="" />
        <img className="stick" src={stick} alt="" />
      </div>

      <div className="app-btn">
        <a
          href="https://play.google.com/store/apps/details?id=com.digicop.tpqp.traffic_police_quetta_public"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle">
            <IoLogoAndroid className="android-icon" />
          </div>
          <span className="playstore">Play Store</span>
          <span className="playstore-down">Download</span>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.digicop.tpqp.traffic_police_quetta_public"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle">
            <FaApple className="android-icon" />
          </div>
          <span className="playstore">App Store</span>
          <span className="playstore-down">Download</span>
        </a>
      </div>
    </div>
  );
}

export default AppSection;
