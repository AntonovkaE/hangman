import React from 'react';
import './Gallows.css'


function Gallows(props) {
  return (
    <div className="gallows">
      <div className="man">
        <div className="man__head"></div>
        <div className="man__hand man__hand_left"></div>
        <div className="man__body"></div>
        <div className="man__hand man__hand_right"></div>
        <div className="man__leg"></div>
        <div className="man__leg man__leg_right"></div>
      </div>
    </div>
  );
}

export default Gallows;
