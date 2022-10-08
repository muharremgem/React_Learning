import React from "react";

const Msg = ({ name, age }) => {
  // const { name } = props;

  return (
    <div>
      <h1>
        Merhaba {name} {age}
      </h1>
    </div>
  );
};

export default Msg;
