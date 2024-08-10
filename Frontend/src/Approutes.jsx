import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Expert from "./Expert";
import Experts from "./Experts";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import SeminarForm from "./SeminarForm";
import Investments from "./Investments";
import Land from "./Land";
import ExpertForm from "./ExpertForm";
import ExpertEdit from "./ExpertEdit";
import EditLand from "./EditLand";
import AddLand from "./AddLand";
import About from "./About";

const Approutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/expert/:id" element={<Expert />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/yuvakrishi/chat" element={<Chat />} />
        <Route path="/register-seminar" element={<SeminarForm />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/land/:landId" element={<Land />} />
        <Route path="/expert/registration" element={<ExpertForm />} />
        <Route path="/expert/registration" element={<ExpertForm />} />
        <Route path="/expert/:id/edit" element={<ExpertEdit />} />
        <Route path="/investment/:landId/edit" element={<EditLand/>} />
        <Route path="/investment/add" element={<AddLand/>} />
        <Route path="/aboutus" element={<About/>} />
      </Routes>
    </div>
  );
};

export default Approutes;
