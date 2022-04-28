import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./Views/LandingPage";
import Home from "./Views/Home";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
