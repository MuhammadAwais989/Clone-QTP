import React, { useState, useEffect } from "react";
import logo from "../../images/Nav_logo.2dec820e3e2d5541a67f.png";
import { Link } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { MobileNav } from "./MobileNav";  // Import MobileNav component

export function Header() {
  const [mobNav, setmobNav] = useState(false);
  const [navhide, setnavhide] = useState(true);
  const [mobabout, setmobabout] = useState(false);
  const [moblicence, setmoblicence] = useState(false);
  const [mobtraffic, setmobtraffic] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 250) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="h-logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link className="nav-home-active" to="/">
                HOME
              </Link>
            </li>

            <li className="nav-about">
              <Link to="/about">ABOUT</Link>
              <ul className="sub-menu about-sub">
                <li>
                  <Link to="/offices">OFFICES</Link>
                </li>
                <li>
                  <Link to="/aims">AIMS</Link>
                </li>
              </ul>
            </li>

            <li className="nav-license">
              <Link to="/driving">DRIVING LICENSE</Link>
              <ul className="sub-menu license-sub">
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
            </li>

            <li className="nav-traffic">
              <Link to="/traffic">TRAFFIC</Link>
              <ul className="sub-menu traffic-sub">
                <li>
                  <Link to="/traffic/managment">Traffic Managment</Link>
                </li>
                <li>
                  <Link to="/traffic/problem">Traffic Problem</Link>
                </li>
                <li>
                  <Link to="/traffic/challanfine">Challan/Fine</Link>
                </li>
              </ul>
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
        </nav>

        <div
          className={navhide ? "menu-icon" : ".nav-hide"}
          onClick={() => setnavhide(false)}
        >
          <TbMenuDeep className="nav-icon" onClick={() => setmobNav(true)} />
        </div>
      </header>

      {/* Use MobileNav Component */}
      <MobileNav
        mobNav={mobNav}
        setmobNav={setmobNav}
        mobabout={mobabout}
        setmobabout={setmobabout}
        moblicence={moblicence}
        setmoblicence={setmoblicence}
        mobtraffic={mobtraffic}
        setmobtraffic={setmobtraffic}
        logo={logo}
      />
    </>
  );
}
