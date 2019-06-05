import React, { useState } from "react";

const Sum = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count.toString(16)}</h2>
      <button onClick={() => setCount(count - 1)}>SUB</button>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
};

export default Sum;
