import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Community = lazy(() => import("../pages/Community"));
const About = lazy(() => import("../pages/About"));
const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const BreakfastPage = lazy(() => import("../pages/BreakfastPage"));
const SnackPage = lazy(() => import("../pages/SnackPage"));
const LunchPage = lazy(() => import("../pages/LunchPage"));
const DinnerPage = lazy(() => import("../pages/DinnerPage"));
const ChestPage = lazy(() => import("../pages/Chest"));
const ShoulderPage = lazy(() => import("../pages/Shoulder"));
const BicepsPage = lazy(() => import("../pages/Biceps"));
const TricepsPage = lazy(() => import("../pages/Tricrps"));
const LegsPage = lazy(() => import("../pages/Legs"));
const BackPage = lazy(() => import("../pages/Back"));
const CalvesPage = lazy(() => import("../pages/Calves"));
const GlutesPage = lazy(() => import("../pages/Glute"));

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/community"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Community />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/food/breakfast"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BreakfastPage />
          </Suspense>
        }
      />
      <Route
        path="/food/snack"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SnackPage />
          </Suspense>
        }
      />
      <Route
        path="/food/lunch"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LunchPage />
          </Suspense>
        }
      />
      <Route
        path="/food/dinner"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DinnerPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/chest"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ChestPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/shoulder"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ShoulderPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/biceps"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BicepsPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/triceps"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <TricepsPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/legs"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LegsPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/back"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BackPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/calves"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <CalvesPage />
          </Suspense>
        }
      />
      <Route
        path="/exercise/glute"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <GlutesPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routers;
