import React, { useState, useEffect } from "react";
import "./Investments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Investments = () => {
  const navigate = useNavigate();
  const [lands, setLands] = useState([]);

  // Define initial investment outside of useEffect
  const initialInvestment = [
    {
      id: uuidv4(),
      name: "John Patel",
      location: "Anand, Gujarat",
      image: "/land_1.png",
      waterAvailability: "Yes",
      size: "2 acre",
      cropHistory: "Low water consuming crop",
      investmentRequired: 3000,
      currentInvestments: [],
    },
    {
      id: uuidv4(),
      name: "Jiyan Patel",
      location: "Ahmedabad, Gujarat",
      image: "/land_1.png",
      size: "3 acre",
      waterAvailability: "No",
      cropHistory: "High water consuming crop",
      investmentRequired: 5000,
      currentInvestments: [],
    },
    {
      id: uuidv4(),
      name: "Jiya Shah",
      location: "Nadiad, Gujarat",
      image: "/land_2.png",
      size: "4 acre",
      waterAvailability: "No",
      cropHistory: "Moisture area",
      investmentRequired: 6000,
      currentInvestments: [],
    },
  ];

  useEffect(() => {
    // Initialize localStorage with sample data if empty
    const storedLands = JSON.parse(localStorage.getItem("lands"));

    if (!storedLands || storedLands.length === 0) {
      localStorage.setItem("lands", JSON.stringify(initialInvestment));
      setLands(initialInvestment);
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
        <div className="card-container" key={land.id}>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={land.image} alt={`Image of ${land.name}`} />
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
                <span className="name">{land.name}</span>
                <span className="profession">{land.profession}</span>
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
                  onClick={() => handleNavigate(land.id)}
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

export default Investments;
