import React from 'react';
import './Gallows.css'
import styled, { keyframes } from 'styled-components';


function Gallows({ mistakes }) {
  const body_parts = ["man__head",  "man__body", "man__hand man__hand_left", "man__hand man__hand_right", "man__leg", "man__leg man__leg_right"]
  return (
    <div className="gallows">
      <div className="man">
        {body_parts.slice(0, mistakes).map(part => {
          return <div className={part}></div>})}
        {/*<div className="man__head"></div>*/}
        {/*<div className="man__hand man__hand_left"></div>*/}
        {/*<div className="man__body"></div>*/}
        {/*<div className="man__hand man__hand_right"></div>*/}
        {/*<div className="man__leg"></div>*/}
        {/*<div className="man__leg man__leg_right"></div>*/}
      </div>
    </div>
  );
}

export default Gallows;
