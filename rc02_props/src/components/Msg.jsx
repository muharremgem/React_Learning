import React from "react";

const Msg = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Merhaba {props.name}</h1>
    </div>
  );
};

export default Msg;
