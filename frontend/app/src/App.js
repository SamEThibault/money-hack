import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Personal_Info from "./pages/Personal_Info";
import { useState } from "react";
import Budget from "./pages/Budget";
import Signup from "./pages/Signup";
import Investing from "./pages/Investing";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<Personal_Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/spending" element={<Dashboard />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
