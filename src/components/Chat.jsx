import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import "../../public/styles.css";

function Chat() {
  const [chat, setChat] = useState("");

  function handleChange(event) {
    const input = event.target.chat;
    setChat(input);
  }
  function handleClick(event) {
    setChat("");
    event.preventDefault();
  }
  return (
    <div>
      <form action="" className="query-input">
        <textarea
          name="chat"
          value={chat}
          cols="100"
          rows="1"
          placeholder="Ask Something"
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default Chat;
