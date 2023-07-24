/*
.............................................

import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);
 

.app__laurels_awards {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 3rem;
}

.app__laurels_awards-card {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 230px;

    margin: 1rem;
}

@media screen and (min-width: 1900px) {
    .app__laurels_awards-card {
        min-width: 390px;
    }
}

.app__laurels_awards-card img {
    width: 50px;
    height: 50px;
}

.app__laurels_awards-card_content {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
}

@media screen and (max-width: 450px) {
    .app__laurels_awards-card {
        min-width: 100%;
        margin: 1rem 0;
    }
}


.............................................

import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;

................................................

*/
