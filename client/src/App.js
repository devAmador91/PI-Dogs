import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./Views/LandingPage";
import Home from "./Views/Home";
import DogDetails from "./Views/DogDetails";
import CreateDog from "./Views/CreateDog";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dogs/:id" element={<DogDetails />} />
        <Route path="/createDog" element={<CreateDog />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
