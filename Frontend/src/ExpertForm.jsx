import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpertForm.css";
import { v4 as uuidv4 } from 'uuid';

const ExpertForm = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState("");
  const [workingIn, setWorkingIn] = useState("");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpert = {
      id: uuidv4(),
      name,
      profession,
      description,
      workingIn,
      expertise,
      experience,
      email,
      image: imagePreview, // Use the imagePreview URL
    };

    const existingExperts = JSON.parse(localStorage.getItem("experts")) || [];
    localStorage.setItem("experts", JSON.stringify([...existingExperts, newExpert]));

    navigate(`/experts`);
  };

  return (
    <div className="registration-form-container">
      <h1>Register New Expert</h1>
      <form onSubmit={handleSubmit} className="expert-registration-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Working In:
          <input
            type="text"
            value={workingIn}
            onChange={(e) => setWorkingIn(e.target.value)}
            required
          />
        </label>
        <label>
          Expertise:
          <input
            type="text"
            value={expertise}
            onChange={(e) => setExpertise(e.target.value)}
            required
          />
        </label>
        <label>
          Experience (years):
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Image preview" />
          </div>
        )}
        <button type="submit">Register Expert</button>
      </form>
    </div>
  );
};

export default ExpertForm;
