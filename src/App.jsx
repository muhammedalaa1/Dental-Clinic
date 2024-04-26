import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Admin/layout/dashboard";
import MainDashboard from "./Admin/dashboard";
import Appointment from "./Admin/appointments";
import Patients from "./Admin/patients";
import Schedule from "./Admin/schedule";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/mainDashboard"
          element={
            <Dashboard name="Dashboard">
              <MainDashboard />
            </Dashboard>
          }
        />
        <Route
          path="/appointment"
          element={
            <Dashboard name="Appointments">
              <Appointment />
            </Dashboard>
          }
        />
        <Route
          path="/patients"
          element={
            <Dashboard name="Patients">
              <Patients />
            </Dashboard>
          }
        />
        <Route
          path="/schedule"
          element={
            <Dashboard name="Schedule">
              <Schedule />
            </Dashboard>
          }
        />
      </Routes>
    </>
  );
}

export default App;
