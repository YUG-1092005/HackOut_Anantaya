import React from 'react'
import "./Value.css";

const Value = () => {
  return (
    <div>
      <div className="values" style={{marginTop:"6rem"}}>
        <div className="value-left-section">
          <div className="value-heading">
            <h1>Our Values</h1>
            <lord-icon
              src="https://cdn.lordicon.com/okdadkfx.json"
              trigger="hover"
              style={{ width: "3rem", height: "3rem" }}
            ></lord-icon>
          </div>
          <div className="value-img-div">
            <img src="/value.png" className="value-img" />
          </div>
        </div>
        <div className="value-content">
          <div className="value-content-1">
            <div className="value-subheading">
              <h1>Accessibility</h1>
            </div>
            <p>
              We ensure our support to today's youth in agriculture
            </p>
            <span className="value-bar"></span>
          </div>
          <div className="value-content-2">
            <div className="value-subheading">
              <h1>Support</h1>
            </div>
            <p>
              YuvaKrishi tries to offer strong support and partnerships to
              individuals as they also have right to grow.
            </p>
          </div>
          <span className="value-bar"></span>
          <div className="value-content-3">
            <div className="value-subheading">
              <h1>Compassion</h1>
            </div>
            <p>
              At YuvaKrishi we act with empathy and care in all our interactions
              and keep individuals trust alive.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Value;
