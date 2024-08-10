import React, { useState, useEffect } from "react";
import "./Experts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Experts = () => {
  const [callForm, setCallForm] = useState(false);
  const [selectedExpertId, setSelectedExpertId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize localStorage with sample data if empty
    if (!localStorage.getItem("experts")) {
      const initialExperts = [
        {
          id: uuidv4(),
          name: "John Patel",
          profession: "Agriculture Engineer",
          image: "/expert_1.png",
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
          image: "/expert_1.png",
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
          image: "/expert_1.png",
          email: "abc@gmail.com",
          description:
            "An engineer with 5 plus years of experience full of passion to teach",
          experience: 7,
          expertise: "",
          workingIn: "FarmPure",
          ratings: 4,
        },
      ];

      localStorage.setItem("experts", JSON.stringify(initialExperts));
    }
  }, []);

  const fetchExperts = () => {
    const expertsData = localStorage.getItem("experts");
    console.log("Fetched experts:", expertsData);
    return JSON.parse(expertsData) || [];
  };
  

  const experts = fetchExperts();

  const handleNavigate = (id) => {
    navigate(`/expert/${id}`);
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
      {experts.map((expert) => (
        <div className="card-container" key={expert.id}>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={expert.image} alt={`Image of ${expert.name}`} />
              </div>

              <div className="name-profession">
                <span className="name">{expert.name}</span>
                <span className="profession">{expert.profession}</span>
              </div>

              <div className="avg-ratings">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={index < expert.ratings ? solidStar : regularStar}
                    className="stars"
                  />
                ))}
              </div>

              <div className="expert-btn">
                <button
                  className="about-me"
                  onClick={() => handleNavigate(expert.id)}
                >
                  About me
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {callForm && selectedExpertId && (
        <div className="call-form-container">
          <h2>Contact Expert</h2>
          <button onClick={() => setCallForm(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Experts;

// localStorage.clear();