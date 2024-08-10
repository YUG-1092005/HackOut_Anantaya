import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Approutes.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
