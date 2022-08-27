import "./styles/app.scss";
import Dashboard from "./pages/Dashboard";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Personal_Info from "./pages/Personal_Info";
import { useState } from "react";
import Budget from "./pages/Budget";
import Signup from "./pages/Signup";
import Investing from "./pages/Investing";
import Spending from "./pages/Spending";
import Login from "./pages/Login";
function App() {
  const labels = ["Bills", "Discretionary", "Entertainment", "Food", "Gas", "Groceries", "rent"];
  const barData = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: ["#3d7e8a", "#405f77", "#3d7e8a", "#088985", "#12b296", "#0a5554", "#3d8180"],
        data: [2, 3, 5, 5, 4, 6, 7],
      },
    ],
  };
  const pielabels = ["Necessities", "Discretionary", "Savings"];
  const pieData = {
    labels: pielabels,

    datasets: [
      {
        label: "Budget Categories",
        backgroundColor: ["#8cccab", "#405f77", "#3d7e8a", "#37d4ae"],
        borderColor: "black",
        data: [10, 10, 5],
      },
    ],
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={<Personal_Info />} />
          <Route path="/dashboard" element={<Dashboard barData={barData} pieData={pieData} />} />
          <Route path="/budget" element={<Budget pieData={pieData} />} />
          <Route path="/investing" element={<Investing />} />
          <Route path="/spending" element={<Spending barData={barData} />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
