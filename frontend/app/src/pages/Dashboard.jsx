import React from "react";
import Module from "../components/Module";
import Nav from "./Nav";
import { AiOutlineSound } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
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
          { link: "/budget", class: "budget-container" },
          { link: "/spending", class: "category-container" },
          { link: "/personal-info", class: "salary-container" },
          { link: "/personal-info", class: "expenses-container" },
          { link: "/investing", class: "invest-container" },
          { link: "/budget", class: "graph-container" },
        ].map((module, i) => (
          <Link to={module.link} className={`${module.class} `}>
            <Module key={i} classProp="full-h-w">
              {module.class}
            </Module>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
