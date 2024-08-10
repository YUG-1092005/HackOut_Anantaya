import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Expert.css";
import Join from "./Join";
import { Link } from "react-router-dom";

const Expert = () => {
  const { id } = useParams();
  const [expertDetails, setExpertDetails] = useState(null);
  const [join, setJoin] = useState(false);

  const handleJoinSection = () => {
    setJoin(!join);
  };


  const fetchExpertDetails = (expertId) => {
    const experts = JSON.parse(localStorage.getItem("experts")) || [];
    return experts.find((expert) => expert.id === expertId) || null;
  };

  useEffect(() => {
    if (id) {
      const expert = fetchExpertDetails(id);
      setExpertDetails(expert);
    }
  }, [id]);

  return (
    <div
      style={{
        margin: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {expertDetails ? (
        <div className="expert-details-container">
          <h1>{expertDetails.name}</h1>
          <img
            src={expertDetails.image}
            alt={`${expertDetails.name}'s photo`}
            className="expert-details-image"
          />
          <div className="expert-details">
            <div className="details-div">
              <h2>Profession:</h2>
              <p>{expertDetails.profession}</p>
            </div>
            <div className="details-div">
              <h2>About: </h2>
              <p>{expertDetails.description}</p>
            </div>
            <div className="details-div">
              <h2>Working In: </h2>
              <p>{expertDetails.workingIn}</p>
            </div>
            <div className="details-div">
              <h2>Expertise: </h2>
              <p>{expertDetails.expertise}</p>
            </div>
            <div className="details-div">
              <h2>Practising: </h2>
              <p>{expertDetails.experience} yrs</p>
            </div>
            <div className="details-div">
              <h2>Email: </h2>
              <p>{expertDetails.email}</p>
            </div>
          </div>
          <div className="expert-details-buttons">
            <Link to={`/expert/${id}/edit`}>
            <button className="edit-btn">Edit</button>
            </Link>
            <lord-icon
              src="https://cdn.lordicon.com/ayhtotha.json"
              trigger="hover"
              colors="primary:#0d2337"
              className="details-options"
              onClick={handleJoinSection}
            />
          </div>
        </div>
      ) : (
        <p>Loading expert details...</p>
      )}
      {join && <Join onClose={handleJoinSection} />}
    </div>
  );
};

export default Expert;
