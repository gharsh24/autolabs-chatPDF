import React from "react";
import Left from "./Left.jsx";
import Right from "./Right.jsx";
import "../../public/styles.css";

function App() {
  return (
    <div>
      <div className="container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
