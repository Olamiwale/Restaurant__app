import React from "react";
import "./Header.css";
import spoon from "../../images/spoon.png";
import welcome from "../../images/welcome.png";

export default function Header() {
  return (
    <div className="app__heading app__head-section">
      
      <div className="app__header">
        <div className="app__header-text">
         <p >Chase The New Flavour</p>
        <img src={spoon} alt="spoon" /> 
         <h1>The Key To Fine Dining</h1>
        <p className="app__header-text-2">
          Take your time eat and enjoy yourself your time eat and enjoy yourself
          your time eat and enjoy yourself your time eat and enjoy yourself your
          time eat andf enjoy yourself y yourself your time eat and enjoy yourself
          your time eat and enjoy yourself your time eat and enjoy yourself your
          time eat and enjoy yoursel and enjoy yourself your time eat and enjoy yourself your
          time eat andf enjoy yourself y yourself your time eat and enjoy yourself
          your time eat and enjoy yourself your time eat and enjoy yourself your
          time eat and enjoy yoursel
        </p>
          <button className="app__welcome-button">Explore Now</button>
        </div>
      </div>

          <div> 
            <img className="app__welcome-img" src={welcome} alt='welcome' />  
          </div>
        
      
    </div>
  );
}
