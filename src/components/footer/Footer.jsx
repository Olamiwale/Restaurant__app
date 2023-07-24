import React from "react";
import "./Footer.css";

import spoon from "../../images/spoon.png";
import gericht from "../../images/gericht.png";

export default function Footer() {
  return (
    <div className="app__footer section__padding" id="login">
      
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={gericht} alt="footer_logo" />
          <p>
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          
          <img src={spoon} className="spoon__img" style={{ marginTop: 15 }} />
          
          <div className="app__footer-links_icons">
            
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p>Monday-Friday:</p>
          <p>08:00 am - 12:00 am</p>
          <p>Saturday-Sunday:</p>
          <p>07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
}

/*
const Footer = () => (

);
 */
