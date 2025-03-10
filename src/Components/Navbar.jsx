import React, { useState } from "react";
import { assets, colours } from "../assets/assets";
import Home from "./Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { animate } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    
  };

  console.log("isOpen", isOpen);

  return (
    <div className="overflow-x-hidden-hidden">
      <div
        className="flex flex-row navbar"
        style={{ backgroundColor: colours.black }}
      >
        <div className="w-20 nav-title">
          <img src={assets.logo} style={{}} alt="" />
        </div>
        <span className="nav-title text-white pt-6 font-bold">
          FITNESS GURU
        </span>

        <div className={`nav-links-container`}>
          <ul
            className={`${
              isOpen ? "is-open" : ""
            }  flex-row gap-7 text-white pt-6 ml-30 nav-menu`}
            style={{ fontSize: 17 }}
          >
            {/* <button id='menu-close-button' onClick={toggleMenu} 
                className={`navbar ${isOpen ? "is-open" : ""}`}
                > 
                <FontAwesomeIcon  onClick={toggleMenu}   icon={faTimes} size="" className='ml-1 text-white nav-links' color="black" />
                </button> */}
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#Home">Home</a>
            </li>
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#About">About</a>
            </li>

            <li className="nav-links relative">
              <a  onClick={toggleMenu} href="#Classes">
                Classes{" "}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size=""
                  className="ml-1 text-white nav-links"
                  color="black"
                />
              </a>
              <div className="dropdown-menu">
                <ul>
                  <li className="sub-links">
                    <a  onClick={toggleMenu} href="#Classes">Classes</a>
                  </li>
                  <li className="sub-links">
                    <a  onClick={toggleMenu} href="#ClassSchedule">Class Schedule</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#Trainers">Trainers</a>
            </li>
            <li className="nav-links">
              <a onClick={toggleMenu}  href="#Events">Events</a>
            </li>
            {/* <li className='nav-links'>
                    <a href="#Blog">Blog</a>
                </li> */}
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#Pricing">Pricing</a>
            </li>
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#Testimonials">Testimonials</a>
            </li>
            <li className="nav-links">
              <a  onClick={toggleMenu} href="#Contact">Contact</a>
            </li>
          </ul>

          <button
            id="menu-open-button"
            onClick={toggleMenu}
            className="menu-toggle"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              size=""
              className="ml-55 mt-5 text-white nav-links "
              color="white"
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>{" "}
      <Home />
    </div>
  );
};

export default Navbar;
