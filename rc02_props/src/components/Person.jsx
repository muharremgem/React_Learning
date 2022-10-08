import React from "react";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div>
      <h1>Merhaba {name}</h1>
      <img src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
