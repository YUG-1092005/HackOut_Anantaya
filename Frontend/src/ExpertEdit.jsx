import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ExpertEdit.css";

const ExpertEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expertDetails, setExpertDetails] = useState({
    name: "",
    profession: "",
    image: "",
    email: "",
    description: "",
    workingIn: "",
    expertise: "",
    experience: "",
  });

  useEffect(() => {
    if (id) {
      const experts = JSON.parse(localStorage.getItem("experts")) || [];
      const expert = experts.find((expert) => expert.id === id);
      if (expert) {
        setExpertDetails(expert);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpertDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const experts = JSON.parse(localStorage.getItem("experts")) || [];
    const updatedExperts = experts.map((expert) =>
      expert.id === id ? { ...expert, ...expertDetails } : expert
    );
    localStorage.setItem("experts", JSON.stringify(updatedExperts));
    navigate(`/expert/${id}`);
  };

  return (
    <div className="edit-expert-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={expertDetails.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Profession:
          <input
            type="text"
            name="profession"
            value={expertDetails.profession}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={expertDetails.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={expertDetails.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={expertDetails.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Working In:
          <input
            type="text"
            name="workingIn"
            value={expertDetails.workingIn}
            onChange={handleChange}
          />
        </label>
        <label>
          Expertise:
          <input
            type="text"
            name="expertise"
            value={expertDetails.expertise}
            onChange={handleChange}
          />
        </label>
        <label>
          Experience:
          <input
            type="number"
            name="experience"
            value={expertDetails.experience}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ExpertEdit;
