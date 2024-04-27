import React from "react";
import './computer.css';
const Computer = () => {
  return (
    <div className="main">
      <p>ELECTRONIC CALCULATOR</p>
      <p>KQ: </p>
      <div className="input">
        <button className="button">C</button>
        <button className="button">AC</button>
        <button className="button">/</button>
        <button className="button">x</button>
      </div>
      <div className="input">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">-</button>
      </div>
      <div className="input">
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">+</button>
      </div>
      <div className="input">
        <div className="left">
          <div className="left1">
            <button className="button">1</button>
            <button className="button">2</button>
          </div>
          <button className="button">0</button>
        </div>
        <div className="right">
          <div className="right1">
            <button className="button">3</button>
            <button className="button">.</button>
          </div>
          <button className="button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Computer;
