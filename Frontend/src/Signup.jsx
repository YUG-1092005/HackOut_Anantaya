import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Signup.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const generateRoomNumber = () => {
    // Random 4-digit room number
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = uuidv4();
    const roomNumber = generateRoomNumber();

    const newUser = {
      ...credentials,
      userId: userId,
      roomNumber: roomNumber,
    };

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const userExists = users.some(
      (user) => user.email === credentials.email
    );

    if (userExists) {
      setMessage("User already exists with this email.");
      return;
    }

    // Add new user to the list
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("User registered successfully!");
    setCredentials({ name: "", email: "", password: "" });
  };

  const onChangeEvt = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <h2 style={{ textAlign: "center", padding: "1.5rem" }}>SignUp</h2>
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Raj"
            onChange={onChangeEvt}
            value={credentials.name}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="raj@gmail.com"
            onChange={onChangeEvt}
            value={credentials.email}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="123XXX"
            onChange={onChangeEvt}
            value={credentials.password}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Signup;
