import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Join = ({ onClose }) => {
  const [name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [isClosing, setIsClosing] = useState(false);

//Handling closing og join
  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRoomChange = (e) => {
    setRoomNumber(e.target.value);
  };


  return (
    <div className={`joinOuterContainer ${isClosing ? "hidden" : ""}`}>
      <div className="joinInnerContainer">
        <FontAwesomeIcon
          icon={faXmark}
          style={{ color: "#ffffff", padding: "2px", cursor: "pointer" }}
          size="xl"
          onClick={handleClose}
        />
        <h1 className="joinHeading">Join</h1>
        <div className="line"></div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="joinInput"
            value={name}
            onChange={handleNameChange} 
          />
          &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="text"
            placeholder="Org. Room no"
            className="joinInput"
            value={roomNumber}
            onChange={handleRoomChange} 
          />
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Link
          to={`/yuvakrishi/chat?name=${name}&room=${roomNumber}`}
          onClick={(event) => (!name || !roomNumber ? event.preventDefault() : null)}
        >
          <button className="joinButton">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
