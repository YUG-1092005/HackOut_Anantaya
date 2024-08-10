import React from "react";
import ScrollToBar from "react-scroll-to-bottom";
import Message from "./Message.jsx";
import "./Messages.css";

const Messages = ({messages , name}) => {
  return (
    <ScrollToBar className="messages">
        {messages.map((message , index) => 
            <Message key={index} message={message} name={name}/>
        )}        
    </ScrollToBar>
  )
};

export default Messages;
