import React from "react";
import "./Message.css";

const Message = ({message: { user, text }, name }) => {
  let sentByCurrentUser = false;

  let trimmedName = name.trim().toLowerCase();

  if (user.trim().toLowerCase() === trimmedName) {
    sentByCurrentUser = true;
  }

  return (
    <>
      {sentByCurrentUser ? (
        <div className="messageContainer messageAtEnd">
          <p className="SentBy pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText color-white">{text}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer messageAtStart">
          <div className="messageBox backgroundLight">
            <p className="messageText">{text}</p>
          </div>
          <p className="SentBy pl-10  color-dark">{user}</p>
        </div>
      )}
    </>
  );
};

export default Message;
