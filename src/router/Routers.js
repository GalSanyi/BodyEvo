import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Community from "../pages/Community";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import BreakfastPage from "../pages/BreakfastPage";
import SnackPage from "../pages/SnackPage";
import LunchPage from "../pages/LunchPage";
import DinnerPage from "../pages/DinnerPage";
import ChestPage from "../pages/Chest";
import ShoulderPage from "../pages/Shoulder";
import BicepsPage from "../pages/Biceps";
import TricrpsPage from "../pages/Tricrps";
import LegsPage from "../pages/Legs";
import BackPage from "../pages/Back";
import CalvesPage from "../pages/Calves";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/food/breakfast" element={<BreakfastPage />} />
      <Route path="/food/snack" element={<SnackPage />} />
      <Route path="/food/lunch" element={<LunchPage />} />
      <Route path="/food/dinner" element={<DinnerPage />} />
      <Route path="/exercise/chest" element={<ChestPage />} />
      <Route path="/exercise/shoulder" element={<ShoulderPage />} />
      <Route path="/exercise/biceps" element={<BicepsPage />} />
      <Route path="/exercise/triceps" element={<TricrpsPage />} />
      <Route path="/exercise/legs" element={<LegsPage />} />
      <Route path="/exercise/back" element={<BackPage />} />
      <Route path="/exercise/calves" element={<CalvesPage />} />
    </Routes>
  );
};

export default Routers;
