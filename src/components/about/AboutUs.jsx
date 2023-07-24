import React from "react";
import "./AboutUs.css";
import G from "../../images/G.png";
import spoon from "../../images/spoon.png";
import knife from "../../images/knife.png";


const AboutUs = () => (
  <div className="app__about flex__center">
    <div className="app__about-img flex__center">
      <img src={G} alt="G" />
    </div>

    <div className="app__about-content flex__center">
      <div className="app__about-content-about">
        <h1>About Us</h1>
        <img src={spoon} alt="about_spoon" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuereiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button>Know More</button>
      </div>

      <div className="app__about-content_knife flex__center">
        <img src={knife} alt="about_knife" />
      </div>

      <div className="app__about-content-history">
        <h1>Our History</h1>
        <img src={spoon} alt="about_spoon" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasseiscing tempus In sed odio nec aliquet.</p>
        <button type="button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs; 

 