import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export function MobileNav({
  mobNav,
  setmobNav,
  mobabout,
  setmobabout,
  moblicence,
  setmoblicence,
  mobtraffic,
  setmobtraffic,
  logo,
}) {
  return (
    <div className={mobNav ? "nav-active" : "mob-nav-cont"}>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <RxCross2 className="mob-nav-icon" onClick={() => setmobNav(false)} />
      </div>

      <div className="mob-nav-link">
        <ul>
          <li className="mob-active-home">
            <Link className="home-active" to="">
              HOME
            </Link>
          </li>

          <li
            className="mob-nav-about"
            onClick={() => setmobabout(!mobabout) && setmoblicence(!moblicence)}
          >
            <Link to="/about">ABOUT</Link>
            {mobabout ? (
              <ul className="sub-menu mob-about-sub">
                <li>
                  <Link to="/offices">OFFICES</Link>
                </li>
                <li>
                  <Link to="/aims">AIMS</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>

          <li
            className="mob-nav-license"
            onClick={() => setmoblicence(!moblicence)}
          >
            <Link to="/driving">DRIVING LICENSE</Link>
            {moblicence ? (
              <ul className="sub-menu mob-license-sub">
                <li>
                  <Link to="/driving/verification">License Verification</Link>
                </li>
                <li>
                  <Link to="/driving/learnerPermit">Learner Permit</Link>
                </li>
                <li>
                  <Link to="/driving/permanent">Permanent License</Link>
                </li>
                <li>
                  <Link to="/driving/International">International License</Link>
                </li>
                <li>
                  <Link to="/driving/duplicate">Duplicate License</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>

          <li
            className="mob-nav-license"
            onClick={() => setmobtraffic(!mobtraffic)}
          >
            <Link to="/traffic">TRAFFIC</Link>
            {mobtraffic ? (
              <ul className="sub-menu mob-license-sub">
                <li>
                  <Link to="/traffic/managment">Traffic Management</Link>
                </li>
                <li>
                  <Link to="/traffic/problem">Traffic Problems</Link>
                </li>
                <li>
                  <Link to="/traffic/challanfine">Challan/fine</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>

          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>

        <div className="nav-btn">
          <Link>
            <button className="active-btn">FM 88.6</button>
          </Link>
          <Link to="/onlineappointment">
            <button className="active-btn">Online Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
