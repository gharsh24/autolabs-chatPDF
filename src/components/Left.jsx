import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../../public/styles.css";

function Left() {
  const [names, newName] = useState(["abc.pdf"]);
  function handleClick() {
    newName((prevName) => {
      return [...prevName, "abc.pdf"];
    });
  }
  return (
    <div className="left">
      <div className="add-button">
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add
        </Button>
      </div>

      {names.map((name) => {
        return (
          <div className="list-items">
            <li>{name}</li>
          </div>
        );
      })}
    </div>
  );
}

export default Left;
