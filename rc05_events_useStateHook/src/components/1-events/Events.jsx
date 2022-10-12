import React from "react";

export const Events = () => {
  const handleClick = () => {
    alert("Btn Clicked");
  };

  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>
    </div>
  );
};
