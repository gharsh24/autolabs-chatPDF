import React from "react";
import Button from "@material-ui/core/Button";
import UseCase from "./UseCase";
import Chat from "./Chat";
import "../../public/styles.css";

function Right() {
  return (
    <div className="right">
      <div className="heading">
        <h1>Chat with any pdf</h1>
      </div>
      <div className="browse-container">
        <div className="browse">
          <h1>Drop your pdfs here</h1>
          <br />
          <h2>OR</h2>
          <br />
          <Button variant="contained" color="primary">
            Browse
          </Button>
        </div>
      </div>

      <div className="use-case-container">
        <UseCase />
        <UseCase />
        <UseCase />
      </div>
      <div className="chat-bar">
        <Chat />
      </div>
    </div>
  );
}

export default Right;
