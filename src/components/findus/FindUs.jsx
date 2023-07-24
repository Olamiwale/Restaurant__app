import React,{useRef} from 'react'
import './FindUs.css'

import gallery01 from '../../images/gallery01.png';
import gallery02 from '../../images/gallery02 - Copy.png';
import gallery03 from '../../images/gallery03.png';
import gallery04 from '../../images/gallery04 - Copy.png';



export default function Findus() {

   const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 520;
    } else {
      current.scrollLeft += 515;
    }
  };

  let img = [gallery01, gallery02,gallery03, gallery04].map((image) => (
    <div 
    className="app__gallery-images_card flex__center" 
    key={image}>
      <img className='image' src={image} alt="gallery" /> 
    </div>
  ))
 
  return (
     
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">

        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
        <button>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          
          {img}

        </div>
        
        <div className="app__gallery-images_arrows">
         <div className='arrow' onClick={() => scroll('left')}>
          <p>L</p>
         </div>
         <div className='arrow' onClick={() => scroll('right')}>
         <p>R</p>
         </div>
        </div>

      </div>
    </div>

  )
}


