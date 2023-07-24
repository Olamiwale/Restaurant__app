import React, { useState } from "react";
import "./Navbar.css";
import gericht from "../../images/gericht.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
    console.log("okay");
  };

  return (
    <div className="app__navbar">
      <img className="app__logo" src={gericht} alt="logo" />

      <div className="app__navbar-links-container">
        <ul
          className={toggle ? "app__navbar-links active" : "app__navbar-links"}
        >
          <li>Home</li>
          <li>About</li>
          <li> Menu </li>
          <li> Awards</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="app__sign-up">
        <p>Log in / Register</p>

        <div className="app__dash"></div>
        <p> Book a Table </p>
      </div>
      <div className="app__mobile" onClick={toggleMenu}>
        {toggle ? (
          <FaBars style={{ fontSize: "25px" }} />
        ) : (
          <FaTimes style={{ fontSize: "25px" }} />
        )}
      </div>
    </div>
  );
}
