// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     password: "",
//   });
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve user data from local storage 
//     let storedUser = JSON.parse(localStorage.getItem("users"));
    
//     // Ensure storedUser is an array
//     if (!Array.isArray(storedUser)) {
//       storedUser = []; // Initialize as empty array if data is corrupted
//       localStorage.setItem("users", JSON.stringify(storedUser)); // Update localStorage with empty array
//       setMessage("User data is corrupted. Please contact support.");
//       return;
//     }

//     // Check if the user exists
//     const userExists = storedUser.some(
//       (user) =>
//         user.name === credentials.name &&
//         user.password === credentials.password
//     );

//     if (userExists) {
//       localStorage.setItem("currentUser", JSON.stringify({ name: credentials.name }));
//       navigate(`/`);
//       alert(`${credentials.name} welcome again`)
//     } else {
//       setMessage("Invalid credentials. Please try again.");
//     }
//   };

//   const onChangeEvt = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your name"
//             onChange={onChangeEvt}
//             value={credentials.name}
//             className="form-input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Your password"
//             onChange={onChangeEvt}
//             value={credentials.password}
//             className="form-input"
//           />
//         </div>
//         <button type="submit" className="submit-button">Login</button>
//         {message && <p className="error-message">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!credentials.name || !credentials.password) {
      setMessage("Both fields are required.");
      return;
    }

    // Retrieve user data from local storage 
    let storedUsers = JSON.parse(localStorage.getItem("users"));

    // Ensure storedUsers is an array
    if (!Array.isArray(storedUsers)) {
      storedUsers = []; // Initialize as empty array if data is corrupted
      localStorage.setItem("users", JSON.stringify(storedUsers)); // Update localStorage with empty array
      setMessage("User data is corrupted. Please contact support.");
      return;
    }

    // Check if the user exists
    const userExists = storedUsers.some(
      (user) =>
        user.name === credentials.name &&
        user.password === credentials.password
    );

    if (userExists) {
      localStorage.setItem("currentUser", JSON.stringify({ name: credentials.name }));
      navigate(`/`);
      alert(`${credentials.name}, welcome back!`);
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  const onChangeEvt = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={onChangeEvt}
            value={credentials.name}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={onChangeEvt}
            value={credentials.password}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
