import React, { useState } from "react";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
  const initialSize = 0; 
  const [size, setSize] = useState(initialSize);

  const handleSizeChange = (event) => {
    let newSize = parseInt(event.target.value, 10);
    if (newSize < 0) newSize = 0;
    if (newSize > 20) newSize = 20;
    setSize(newSize);
  };

  const handleReset = () => {
    setSize(initialSize);
  };

  return (
    <div className="multiple-counter">
      <div className="size-selector">
        <label>Counter Size: </label>
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          min="0"
          max="20"
        />
        <button onClick={handleReset}>Reset</button>
      </div>
      <CounterGroup size={size} />
    </div>
  );
};

export default MultipleCounter;
