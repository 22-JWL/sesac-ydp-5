import React from 'react';
import './styles/SassComponent.scss';

export default function SassComponent() {
  return (
    <>
      <div className="container">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box yellow"></div>
      </div>
      <div className="box yellow"></div>
      <button className="btn">button</button>
      <button className="btn-primary">button primary</button>
    </>
  );
}
