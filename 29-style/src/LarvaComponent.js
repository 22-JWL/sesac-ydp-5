import React from 'react';
import './styles/LarvaComponent.scss';
import img from './styles/img/grass.png';
export default function LarvaComponent() {
  return (
    <div className="larva">
      <div className="circle b1"></div>
      <div className="circle b2"></div>
      <div className="circle b3"></div>
      <div className="circle b4"></div>
      <div className="circle b5"></div>
      <div className="eyewhite"></div>
      <div className="eyeblack"></div>

      <>
        <img class="grass" src={img} alt="잔디"></img>
      </>
    </div>
  );
}
