import React from "react";
import { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);

  const [person, setPerson] = useState({
    name: "john",
    surname: "Doe",
    age: 43,
  });

  const inc = () => {
    setCount(count + 1);
  };

  const incAge = () => {
    setPerson({...person, age: person.age + 1});
  };

  return (
    <div className="container text-center mt-4">
      <section>
        <h1>USE STATE HOOK</h1>
        <h2 className="display-4 text-danger">COUNT:{count}</h2>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-dark">
          CLR
        </button>
        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className="btn btn-danger"
        >
          DEC
        </button>
      </section>
      <section>
        <h1>USE STATE OBJECT</h1>
        <h1>{person.name} </h1>
        <h1>{person.surname} </h1>
        <h1>{person.age} </h1>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
