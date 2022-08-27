import React from "react";
import Module from "../components/Module";
import Nav from "./Nav";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineModeNight, MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { setIsLightMode } from "../redux/userSlice";
function Dashboard({ pieData, barData, toggleDisplayMode }) {
  const dispatch = useDispatch();
  const { isLightMode, statementInfo } = useSelector(({ user }) => user);
  const toggleVariants = {
    hidden: {
      left: "0.45rem",
      right: "auto",
    },
    visible: {
      right: "0.45rem",
      left: "auto",
    },
  };
  const iconVariants = {
    hidden: {
      color: "white",
      transition: {
        delay: 0.2,
      },
    },
    visible: {
      color: "black",
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <div className="dashboard-container">
      <Nav />
      <div className="dashboard-content">
        {/* DASHBOARD HEADER */}
        <div className="dashboard-header row-sb-c">
          <h1>Dashboard</h1>
          <div className="dashboard-controls row-fe-c">
            <div className="dashboard-speech row-c-c">
              <AiOutlineSound />
            </div>
            <div
              className="dashboard-display-mode row-sb-c"
              onClick={() => {
                dispatch(setIsLightMode(!isLightMode));
                toggleDisplayMode(!isLightMode)
              }}
              style={{
                background: isLightMode ? "#8cccab" : "#293241",
              }}
            >
              <motion.div
                className="dashboard-display-toggle"
                variants={toggleVariants}
                animate={isLightMode ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="dashboard-light-mode row-c-c"
                variants={iconVariants}
                animate={isLightMode ? "hidden" : "visble"}
                initial={isLightMode ? "hidden" : "visble"}
              >
                <MdOutlineWbSunny />
              </motion.div>
              <motion.div
                className="dashboard-dark-mode row-c-c"
                variants={iconVariants}
                animate={isLightMode ? "visible" : "hidden"}
                initial={isLightMode ? "visible" : "hidden"}
              >
                <MdOutlineModeNight />
              </motion.div>
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
          <Module classProp="full-h-w">
            {["Tips", "dsafjkl", "hdsfjkalf"].map((tip) => (
              <p>{tip}</p>
            ))}
          </Module>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
