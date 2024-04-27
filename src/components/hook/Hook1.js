import React, { useState } from "react";

const Hook1 = () => {
  const [x , setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState("");
  const [result1, setResult1] = useState("");
  return (
    <div>
      <h1>Bài Tập 1:</h1>
      <input value={x} onChange={(e) => setX(e.target.value)} /> <br />
      <input
        value={y}
        onChange={(e) => setY(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setResult((Number(x) + Number(y)) * 2);
            setResult1(x * y);
          }
        }}
      />
      <br />
      <h2>Chu vi: {result}</h2>
      <h2>Diện tích: {result1}</h2>
    </div>
  );
};

export default Hook1;
