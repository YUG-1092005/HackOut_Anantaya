import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditLand.css";

const EditLand = () => {
  const { landId } = useParams();
  const navigate = useNavigate();
  const [landDetails, setLandDetails] = useState({
    id: "",
    name: "",
    location: "",
    size: "",
    soilType: "",
    waterAvailability: "",
    cropHistory: "",
    investmentRequired: "",
    currentInvestments: [],
    image: "",
  });

  useEffect(() => {
    if (landId) {
      const lands = JSON.parse(localStorage.getItem("lands")) || [];
      const land = lands.find((land) => land.id === landId);
      if (land) {
        setLandDetails(land);
      }
    }
  }, [landId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLandDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lands = JSON.parse(localStorage.getItem("lands")) || [];
    const updatedLands = lands.map((land) =>
      land.id === landId ? { ...land, ...landDetails } : land
    );
    localStorage.setItem("lands", JSON.stringify(updatedLands));
    navigate(`/land/${landId}`);
  };

  return (
    <div className="edit-land-container">
      <h1>Edit Land Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Owner Name:
          <input
            type="text"
            name="name"
            value={landDetails.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={landDetails.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Size:
          <input
            type="text"
            name="size"
            value={landDetails.size}
            onChange={handleChange}
          />
        </label>
        <label>
          Water Availability:
          <input
            type="text"
            name="waterAvailability"
            value={landDetails.waterAvailability}
            onChange={handleChange}
          />
        </label>
        <label>
          Crop History:
          <textarea
            name="cropHistory"
            value={landDetails.cropHistory}
            onChange={handleChange}
          />
        </label>
        <label>
          Investment Required:
          <input
            type="number"
            name="investmentRequired"
            value={landDetails.investmentRequired}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={landDetails.image}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditLand;
