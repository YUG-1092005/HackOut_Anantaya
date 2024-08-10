import React from "react";
import "./Home.css";
import Card from "./Card";
import Value from "./VAlue.jsx";
import TrustSection from "./TrustSection.jsx";
import NumberSection from "./Numbersection.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // button navigation
  const handleStarted = () => {
    navigate("/signup");
  };

  const handleLearnMore = () => {
    navigate("/aboutus");
  };
  return (
    <div>
      <div className="text">
        <h1>
          Connecting with youth people and encouraging them towards farming at
        </h1>
        <br />
        <span className="typing-text">YuvaKrishi</span>
      </div>
      <div className="getting-started">
        <button className="start-btn" onClick={handleStarted}>
          Getting Started
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="about-btn" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
      <Card />
      <Value />
      <TrustSection />
      <NumberSection />
    </div>
  );
};

export default Home;
