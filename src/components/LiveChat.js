import React from "react";
import "../css/LiveChat.css";

export const LiveChat = () => {
  return (
    <div className="live-chat-container">
      <div className="client-message-container"><span className="client message">Hello</span></div>
      <div className="helper-message-container"><span className="helper message">Hi</span></div>
      <div className="helper-message-container"><span className="helper message">How can I help you?</span></div>
      <div className="message-input">
        <input type="text" placeholder="Write your query..." autoFocus/>
        <button>Send</button>
      </div>
    </div>
  )
};
