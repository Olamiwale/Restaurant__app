import React,{useState, useRef} from 'react'



import meal  from '../../images/meal.mp4';
import './Intro.css';

export default function Intro() {

    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();
    
  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
        
        {playVideo ?<div>Pause</div>  :<div>Play</div> }
          
          
          
        </div>
      </div>
    </div>
  )
}
