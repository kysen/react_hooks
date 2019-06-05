import React, { useState } from "react";

const HexCounter = () => {
  const [hex, setHex] = useState("ff8000");

  const hexCounter = num => {
    let hexVal = parseInt(hex, 16);
    let newTotal = hexVal + num;
    if (newTotal > 16777215) {
      newTotal = 16777215;
    } else if (newTotal < 1048576) {
      newTotal = 1048576;
    }
    setHex(newTotal.toString(16));
    console.log(newTotal);
  };

  return (
    <div>
      <h2 style={{ color: `#${hex.toString(16)}` }}>{`#${hex}`}</h2>
      <div className="button-wrapper">
        <button onClick={() => hexCounter(1)}>add 1</button>
        <button onClick={() => hexCounter(10)}>add 10</button>
        <button onClick={() => hexCounter(100)}>add 100</button>
        <button onClick={() => hexCounter(1000)}>add 1000</button>
        <button onClick={() => hexCounter(10000)}>add 10000</button>
        <button onClick={() => hexCounter(100000)}>add 100000</button>
        <button onClick={() => hexCounter(1000000)}>add 1000000</button>
        <button onClick={() => hexCounter(-1)}>sub 1</button>
        <button onClick={() => hexCounter(-10)}>sub 10</button>
        <button onClick={() => hexCounter(-100)}>sub 100</button>
        <button onClick={() => hexCounter(-1000)}>sub 1000</button>
        <button onClick={() => hexCounter(-10000)}>sub 10000</button>
        <button onClick={() => hexCounter(-100000)}>sub 100000</button>
        <button onClick={() => hexCounter(-1000000)}>sub 1000000</button>
      </div>
    </div>
  );
};

export default HexCounter;
