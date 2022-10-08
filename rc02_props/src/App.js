import React from "react";
import Msg from "./components/Msg";

function App() {
  return (
    <div>
      <Msg name="Furkan" age={28} />
      <Msg name="Rümeysa" />
      <Msg name="muharrem" />
    </div>
  );
}

export default App;
