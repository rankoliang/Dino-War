import React from "react";
import { Link } from "react-router";

function App() {
  return (
    <div className="App">
      <div className="title">Dino-War</div>

      <Link to="/game">Battle!</Link>
    </div>
  );
};

export default App;