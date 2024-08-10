import { React, useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import Chatbar from "./Chatbar";
import "./Chat.css";
import Chatinput from "./Chatinput";
import Messages from "./Messages";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000";

  const location = useLocation();

  useEffect(() => {
    // Destructuring name and room from URL
    const { name, room } = queryString.parse(location.search); 

    socket = io(ENDPOINT);

    // Join the room
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log("Error in joining evt:-",error);
      }
    });

    setName(name);
    setRoom(room);

    // Clean up the socket connection
    return () => {
      socket.disconnect();
      socket.off(); // Removes all users
    };
  }, [location.search, ENDPOINT]);

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on("message", handleMessage);

    // Clean up listener
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  useEffect(() => {
    alert("Please send your room number to the expert via the provided emailid.");
  }, []);


  console.log(message ,messages);
  return (
    <div className="outerContainer">
      <div className="container">
      <Chatbar room={room}/>
      <Messages messages={messages} name={name}/>
      <Chatinput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
    </div>
  );
};

export default Chat;
