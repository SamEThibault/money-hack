import React from "react";
import Module from "../components/Module";
import Nav from "./Nav";
import { AiOutlineSound } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <Nav />
      <div className="dashboard-content">
        {/* DASHBOARD HEADER */}
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="dashboard-controls row-se-c">
            <div className="dashboard-speech">
              <AiOutlineSound />
            </div>
            <div className="dashboard-notifications">
              <IoMdNotificationsOutline />
            </div>
            <div className="dashboard-display-mode">
              <div className="dashboard-light-mode">
                <MdOutlineWbSunny />
              </div>
              <div className="dashboard-dark-mode">
                <MdOutlineModeNight />
              </div>
            </div>
          </div>
        </div>
        {[
          "budget-container",
          "category-container",
          "salary-container",
          "expenses-container",
          "invest-container",
          "graph-container",
        ].map((moduleClass, i) => (
          <Module key={i} classProp={moduleClass}>
            {moduleClass}
          </Module>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
