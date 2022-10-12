import React from "react";
import { useState } from "react";

const UseStateCounter = () => {

const [count, setCount] = useState(0);
const inc = () => {
    setCount(count + 1);
};

  return (
    <div className="container text-center mt-4">
      <h1>USE STATE HOOK</h1>
      <h2 className="display-4 text-danger">COUNT:{count}</h2>
      <button onClick={inc} className="btn btn-success">INC</button>
      <button onClick={()=>setCount(0)} className="btn btn-dark">CLR</button>
      <button onClick={()=> setCount(count - 1)} className="btn btn-danger">DEC</button>
    </div>
  );
};

export default UseStateCounter;
