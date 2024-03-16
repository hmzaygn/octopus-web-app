import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OctNavbar from "../components/OctNavbar";
import Dashboard from "../pages/Dashboard";
import Finance from "../pages/Finance";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <OctNavbar />

      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
