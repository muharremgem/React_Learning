import React from "react";

export const Events = () => {
  let message = "EVENT BASED PROGRAM";

  const handleClick = () => {
    alert("Btn Clicked");
  };
  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (event) => {
    console.log(event.target);

    message = "REACT";
  };

  return (
    <div className="container text-center mt-4">
      <h1>{message}</h1>
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>
      <button
        onClick={() => handleClear("Clear Btn Clicked")}
        className="btn btn-danger"
      >
        Clear
      </button>
      <button onClick={handleChange} className="btn btn-dark">
        Change
      </button>
    </div>
  );
};
