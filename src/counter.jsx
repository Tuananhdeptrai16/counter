import React from "react";
import { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const formatCount = (number) =>
    number > 0 && number < 10 ? `0${number}` : number;
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  const resetCounter = () => setCount(0);
  return (
    <div className="counter">
      <h1 className="counter__heading">Counter </h1>
      <span className="counter__number">{formatCount(count)}</span>
      <div className="counter__action">
        <button onClick={onDecrease} className="counter__decrease">
          <img src={`${process.env.PUBLIC_URL}/icon/minus.svg`} alt="" />
        </button>
        <button onClick={resetCounter} className="counter__reset">
          Reset
        </button>
        <button onClick={onIncrease} className="increase">
          <img src={`${process.env.PUBLIC_URL}/icon/plus.svg`} alt="" />
        </button>
      </div>
    </div>
  );
};
