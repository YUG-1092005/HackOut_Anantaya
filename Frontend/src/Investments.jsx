import React, { useState, useEffect } from "react";
import "./Investments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Investments = () => {
  const navigate = useNavigate();
  const [lands, setLands] = useState([]);

  useEffect(() => {
    // Initialize localStorage with sample data if empty
    if (!localStorage.getItem("lands")) {
      const initialInvestment = [
        {
          id: uuidv4(),
          name: "John Patel",
          profession: "Agriculture Engineer",
          image: "/land_1.png",
          email: "abc@gmail.com",
          description:
            "An agricultural engineer specializing in precision farming technologies...",
          experience: 3,
          expertise: "Agriculture",
          workingIn: "Building Startup...",
          ratings: 3,
        },
        {
          id: uuidv4(),
          name: "Raj Sharma",
          profession: "CEO",
          image: "/land_2.png",
          email: "abc@gmail.com",
          description:
            "A startup that specializes in vertical farming and urban agriculture...",
          experience: 3,
          expertise: "",
          workingIn: "FarmBoost",
          ratings: 4,
        },
        {
          id: uuidv4(),
          name: "Rajesh",
          profession: "Engineer",
          image: "/land_1.png",
          email: "abc@gmail.com",
          description:
            "An engineer with 5 plus years of experience full of passion to teach",
          experience: 7,
          expertise: "",
          workingIn: "FarmPure",
          ratings: 4,
        },
      ];

      localStorage.setItem("lands", JSON.stringify(initialInvestment));
    }
  }, []);

  useEffect(() => {
    const storedLands = JSON.parse(localStorage.getItem("lands"));

    if (!storedLands) {
      localStorage.setItem("lands", JSON.stringify(initialLands));
      setLands(initialLands);
    } else {
      setLands(storedLands);
    }
  }, []);

  const handleNavigate = (landId) => {
    navigate(`/land/${landId}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        padding: "2rem 0 2rem 2rem",
      }}
      className="expert-container"
    >
      {lands.map((land) => (
        <div className="card-container" key={land.landId}>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={land.image} alt={`Image of ${land.ownerName}`} />
              </div>

              <div className="social-media">
                <FontAwesomeIcon icon={faFacebook} size="xl" className="icon" />
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  size="xl"
                  className="icon"
                />
              </div>

              <div className="name-profession">
                <span className="name">{land.ownerName}</span>
                <span className="profession">{land.location}</span>
              </div>

              <div className="avg-ratings">
                <FontAwesomeIcon icon={solidStar} className="stars" />
                <FontAwesomeIcon icon={solidStar} className="stars" />
                <FontAwesomeIcon icon={solidStar} className="stars" />
                <FontAwesomeIcon icon={regularStar} className="stars" />
                <FontAwesomeIcon icon={regularStar} className="stars" />
              </div>

              <div className="expert-btn">
                <button
                  className="about-me"
                  onClick={() => handleNavigate(land.landId)}
                >
                  About Land
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
// localStorage.clear();
export default Investments;
