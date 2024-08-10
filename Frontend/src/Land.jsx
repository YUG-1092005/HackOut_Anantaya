import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Land.css";
import { Link } from "react-router-dom";


const Land = () => {
  const { landId } = useParams();
  const [landDetails, setLandDetails] = useState(null);
  const [investmentType, setInvestmentType] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [equityPercentage, setEquityPercentage] = useState("");
  const [investmentMade, setInvestmentMade] = useState(false);

  const handleLandDetails = (landId) => {
    if (!landId) return null;
    const storedLands = localStorage.getItem("lands");
    if (!storedLands) return null;

    const lands = JSON.parse(storedLands);
    return lands.find((land) => land.landId === landId);
  };

  const handleInvestment = () => {
    if (!landId || !investmentAmount || !investmentType) return;

    const storedLands = JSON.parse(localStorage.getItem("lands"));
    const updatedLands = storedLands.map((land) => {
      if (land.landId === landId) {
        const newInvestment = {
          amount: parseFloat(investmentAmount),
          type: investmentType,
          equityPercentage: investmentType === "Equity" ? parseFloat(equityPercentage) : null,
          date: new Date().toISOString(),
        };

        return {
          ...land,
          currentInvestments: [...land.currentInvestments, newInvestment],
        };
      }
      return land;
    });

    localStorage.setItem("lands", JSON.stringify(updatedLands));
    setInvestmentMade(true);
    setLandDetails(handleLandDetails(landId)); 
  };

  useEffect(() => {
    if (landId) {
      const land = handleLandDetails(landId);
      setLandDetails(land);
    }
  }, [landId]);

  const totalInvestments = landDetails?.currentInvestments.reduce((total, investment) => total + investment.amount, 0) || 0;
  const remainingInvestment = (landDetails?.investmentRequired || 0) - totalInvestments;

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
      {landDetails && (
        <div className="land-details-container">
          <h1>{landDetails.ownerName}'s Land</h1>
          <img
            src={landDetails.image}
            alt={`${landDetails.ownerName}'s Land`}
            className="land-details-image"
          />
          <div className="land-details">
            <div className="details-div">
              <h2>Location:</h2>
              <p>{landDetails.location}</p>
            </div>
            <div className="details-div">
              <h2>Size: </h2>
              <p>{landDetails.size}</p>
            </div>
            <div className="details-div">
              <h2>Soil Type: </h2>
              <p>{landDetails.soilType}</p>
            </div>
            <div className="details-div">
              <h2>Water Availability: </h2>
              <p>{landDetails.waterAvailability}</p>
            </div>
            <div className="details-div">
              <h2>Crop History: </h2>
              <p>{landDetails.cropHistory}</p>
            </div>
            <div className="details-div">
              <h2>Investment Required: </h2>
              <p>${remainingInvestment > 0 ? remainingInvestment : "Fully Funded"}</p>
            </div>
          </div>
          <div className="land-details-buttons">
            {!investmentMade ? (
              <>
                <div className="investment-options">
                  <label>
                    <input
                      type="radio"
                      name="investmentType"
                      value="Equity"
                      className="equity"
                      checked={investmentType === "Equity"}
                      onChange={(e) => setInvestmentType(e.target.value)}
                    />
                    Equity
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="investmentType"
                      value="Loan"
                      className="equity"
                      checked={investmentType === "Loan"}
                      onChange={(e) => setInvestmentType(e.target.value)}
                    />
                    Loan
                  </label>
                  {/* Add more options as needed */}
                </div>

                <input
                  type="number"
                  placeholder="Investment Amount"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  min={1}
                />

                {investmentType === "Equity" && (
                  <input
                    type="number"
                    placeholder="Equity Percentage"
                    value={equityPercentage}
                    onChange={(e) => setEquityPercentage(e.target.value)}
                    min={1}
                  />
                )}

                <button className="invest-btn" onClick={handleInvestment}>
                  Invest Now
                </button>
              </>
            ) : (
              <p>Thank you for your investment!</p>
            )}
            <Link to={`/investment/${landId}/edit`}>
            <button className="edit-btn">Edit Details</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Land;

