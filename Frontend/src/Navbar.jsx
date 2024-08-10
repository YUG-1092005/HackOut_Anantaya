import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

//Navigating btn
 const handleAbout = () => {
  navigate("/aboutus");
 }

//Handling sidebar when lin clicked
const handleSidebar = () => {
  document.getElementById("checkBtn").checked = false
}

//handling signup and signin
const handleSignUp = () => {
  navigate("/signup");
}

const handleSignIn = () => {
  navigate("/login");
}

  return (
    <div>
      <nav className="navbar">
        <div className="title" onClick={handleAbout} style={{cursor:"pointer" , marginLeft:"10px"}}>
          {/* <img src="/favicon.png" className="logo" /> */}
          &nbsp;&nbsp;
          <h2>YuvaKrishi</h2>
        </div>
        {/* <div className="right-section"> */}
        {/* <Link to="signup" className="authenticate" onClick={handleSignUp}>SignUp</Link>
        <Link to="login" className="authenticate" onClick={handleSignIn}>SignIn</Link> */}
        <input type="checkbox" id="checkBtn" />
        <label htmlFor="checkBtn" className="open-sidebar">
          <lord-icon
            src="https://cdn.lordicon.com/ipnwkgdy.json"
            trigger="click"
          ></lord-icon>
        </label>
      {/* </div> */}
        <label htmlFor="checkBtn" id="overlay"></label>
        <div className="links">
          <label htmlFor="checkBtn" className="close-sidebar">
            <lord-icon
              src="https://cdn.lordicon.com/zxvuvcnc.json"
              trigger="click"
              className="close-icon"
            ></lord-icon>
          </label>
          <Link to="/" onClick={handleSidebar}>Home</Link>
          <Link to="/aboutus" onClick={handleSidebar}>AboutUs</Link>
          <Link to="/experts" onClick={handleSidebar}>Experts</Link>
          <Link to="/register-seminar" onClick={handleSidebar}>Register a seminar</Link>
          <Link to="/investments" onClick={handleSidebar}>Investments</Link>
          <Link to="/expert/registration" onClick={handleSidebar}>Expert Registration</Link>
          <Link to="/investment/add" onClick={handleSidebar}>Add Investment</Link>
          <Link to="/signup" onClick={handleSidebar}>SignUp</Link>
          <Link to="/login" onClick={handleSidebar}>SignIn</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
