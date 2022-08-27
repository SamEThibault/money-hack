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
import { useSelector, useDispatch } from "react-redux";
// yo

function App() {
  const labels = ["Bills", "Other", "Entertainment", "Food", "Gas", "Groceries", "Rent"];
  const { loginVerify, statementInfo } = useSelector(({ user }) => user);

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: ["#3d7e8a", "#405f77", "#3d7e8a", "#088985", "#12b296", "#0a5554", "#3d8180"],
        data: [
          
          statementInfo.bills,
         
          statementInfo.other,
         
          statementInfo.entertainment,
         
          statementInfo.food,
         
          statementInfo.gas,
         
          statementInfo.groceries,
         
          statementInfo.rent,
        ,
        ],
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
        data: [
          statementInfo.bills +
            statementInfo.food +
            statementInfo.gas +
            statementInfo.groceries +
            statementInfo.rent +
            statementInfo.entertainment,
          statementInfo.discretionary,
          (statementInfo.TFSA + statementInfo.debt + statementInfo.RRSP) / 12,
        ],
      },
    ],
  };

  const toggleDisplayMode = (lightMode) => {
    var r = document.querySelector(":root");
    if (lightMode) {
      r.style.setProperty("--bg-color", "#1a2026");
      r.style.setProperty("--color", "white");
      r.style.setProperty("--lbg-color", "#212930");
      r.style.setProperty("--input", "#525b63");
      r.style.setProperty("--submit", "white");
      r.style.setProperty(
        "--box",
        "rgba(255, 255, 255, 0.25) 0px 2px 5px -1px, rgba(255, 255, 255, 0.3) 0px 1px 1px -1px"
      );
    } else {
      r.style.setProperty("--bg-color", "white");
      r.style.setProperty("--color", "black");
      r.style.setProperty("--lbg-color", "white");
      r.style.setProperty("--input", "white");
      r.style.setProperty("--submit", "#ec111a");

      r.style.setProperty(
        "--box",
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      );
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/personal-info" element={loginVerify ? <Personal_Info /> : <Personal_Info />} />
          <Route
            path="/dashboard"
            element={
              loginVerify ? (
                <Dashboard barData={barData} pieData={pieData} toggleDisplayMode={toggleDisplayMode} />
              ) : (
                <Dashboard barData={barData} pieData={pieData} toggleDisplayMode={toggleDisplayMode} />

              )
            }
          />
          <Route path="/budget" element={loginVerify ? <Budget pieData={pieData} /> : <Budget pieData={pieData} />} />
          <Route path="/investing" element={loginVerify ? <Investing /> : <Investing /> } />
          <Route path="/spending" element={loginVerify ? <Spending barData={barData} /> : <Spending barData={barData} />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
