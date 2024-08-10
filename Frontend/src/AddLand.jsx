import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddLand.css";
import { v4 as uuidv4 } from 'uuid';

const AddLand = () => {
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [soilType, setSoilType] = useState("");
  const [waterAvailability, setWaterAvailability] = useState("");
  const [cropHistory, setCropHistory] = useState("");
  const [investmentRequired, setInvestmentRequired] = useState("");
  const [currentInvestments, setCurrentInvestments] = useState([]);
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

    const newInvestment = {
      landId: uuidv4(),
      ownerName,
      location,
      size,
      soilType,
      waterAvailability,
      cropHistory,
      investmentRequired,
      currentInvestments,
      image: imagePreview, // Use the imagePreview URL
    };

    const existingInvestments = JSON.parse(localStorage.getItem("lands")) || [];
    localStorage.setItem("lands", JSON.stringify([...existingInvestments, newInvestment]));

    navigate(`/investments`);
  };

  return (
    <div className="registration-form-container">
      <h1>Register New Investment</h1>
      <form onSubmit={handleSubmit} className="investment-registration-form">
        <label>
          Owner Name:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </label>
        <label>
          Size:
          <input
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </label>
        <label>
          Soil Type:
          <input
            type="text"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            required
          />
        </label>
        <label>
          Water Availability:
          <input
            type="text"
            value={waterAvailability}
            onChange={(e) => setWaterAvailability(e.target.value)}
            required
          />
        </label>
        <label>
          Crop History:
          <textarea
            value={cropHistory}
            onChange={(e) => setCropHistory(e.target.value)}
            required
          />
        </label>
        <label>
          Investment Required:
          <input
            type="number"
            value={investmentRequired}
            onChange={(e) => setInvestmentRequired(e.target.value)}
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
        <button type="submit">Register Investment</button>
      </form>
    </div>
  );
};

export default AddLand;
