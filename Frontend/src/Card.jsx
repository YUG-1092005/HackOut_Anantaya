import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="cards">
            <div className="card1">
              <img src="/card1.png" className="homeimg" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h2>Innovation</h2>
                <span className="arrow-el">
                  <lord-icon
                    src="https://cdn.lordicon.com/whtfgdfm.json"
                    trigger="hover"
                    colors="primary:#1c5e94"
                  ></lord-icon>
                </span>
              </div>
            </div>

            <div className="card2">
              <img src="/card2.png" className="homeimg" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h2>Motivation</h2>
                <span className="arrow-el">
                  <lord-icon
                    src="https://cdn.lordicon.com/whtfgdfm.json"
                    trigger="hover"
                    colors="primary:#1c5e94"
                  ></lord-icon>
                </span>
              </div>
            </div>
            <div className="card3">
              <img src="/card3.png" className="homeimg" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <h2>Technology</h2>
                <span className="arrow-el">
                  <lord-icon
                    src="https://cdn.lordicon.com/whtfgdfm.json"
                    trigger="hover"
                    colors="primary:#1c5e94"
                  ></lord-icon>
                </span>
              </div>
            </div>
    </div>
  );
}
export default Card;
