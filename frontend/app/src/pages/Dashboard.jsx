import React from "react";
import Module from "../components/Module";
import Nav from "./Nav";
import { AiOutlineSound } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
function Dashboard({ pieData, barData }) {
  fetch("http://127.0.0.1:5000/file")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error", error));

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
            <div className="dashboard-display-mode row-sb-c">
              <div className="dashboard-display-toggle"></div>
              <div className="dashboard-light-mode row-c-c">
                <MdOutlineWbSunny />
              </div>
              <div className="dashboard-dark-mode row-c-c">
                <MdOutlineModeNight />
              </div>
            </div>
          </div>
        </div>

        <Link to={"/budget"} className={`budgeting-container`}>
          <Module classProp="full-h-w">fjdsakjlfj;</Module>
        </Link>
        <Link to={"/spending"} className={`category-container`}>
          <Module classProp="full-h-w col-c-c">
            <h3>Budgeting Categories</h3>
            <div className="dashboard-pie ">
              <Pie data={pieData} />
            </div>
          </Module>
        </Link>
        <Link to={"/personal-info"} className={`salary-container`}>
          <Module classProp="full-h-w">fjdsakjlfj;</Module>
        </Link>
        <Link to={"/personal-info"} className={`expenses-container`}>
          <Module classProp="full-h-w">fjdsakjlfj;</Module>
        </Link>
        <Link to={"/personal-info"} className={`spend-container`}>
          <Module classProp="full-h-w col-c-c">
            <div className="dashboard-spend-bar">
              <h3>Budgeting Categories</h3>

              <Bar
                data={barData}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </Module>
        </Link>
        <Link to={"/budget"} className={`graph-container`}>
          <Module classProp="full-h-w">{["Tips", "dsafjkl", "hdsfjkalf"].map((tip)=>(
            <p>{tip}</p>
          ))}</Module>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
