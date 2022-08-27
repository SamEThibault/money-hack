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
  const { isLightMode, statementInfo, salary } = useSelector(({ user }) => user);
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
                toggleDisplayMode(!isLightMode);
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

        <div className={`budgeting-container`}>
          <Module classProp="full-h-w">
            <h2>Check these articles for more financial information!</h2>
            <div className="budgeting-links">
              <a href="https://www.scotiabank.com/ca/en/personal/advice-plus/get-started/financial-planning.html">
                Link
              </a>
              <a href="https://www.scotiafunds.com/en/home/news-insights.html">Link</a>
              <a href="https://www.scotiabank.com/ca/en/personal/advice-plus/banking-101/investments.html">
                Link
              </a>
              <a href="https://www.scotiabank.com/ca/en/personal/advice-plus/banking-101/investments.html">
                Link
              </a>
              <a href="https://www.scotiabank.com/ca/en/personal/investing/investing-basics/investment-glossary.html">
                Link
              </a>
              <a href="https://www.scotiafunds.com/en/home/resources/mutual-funds-basics.html">Link</a>
            </div>
          </Module>
        </div>
        <Link to={"/spending"} className={`category-container`}>
          <Module classProp="full-h-w col-c-c">
            <h3>Budgeting Categories</h3>
            <div className="dashboard-pie ">
              <Pie data={pieData} />
            </div>
          </Module>
        </Link>
        <Link to={"/personal-info"} className={`salary-container`}>
          <Module classProp="full-h-w">
            {" "}
            <div className="dash-budget-salary col-c-c">
              <h2>Salary</h2>
              <h3>{salary}</h3>
            </div>
          </Module>
        </Link>
        <Link to={"/personal-info"} className={`expenses-container`}>
          <Module classProp="full-h-w col-c-c">
            <h2>Debt</h2>
            <h3>-{statementInfo.debt}</h3>
          </Module>
        </Link>
        <Link to={"/personal-info"} className={`spend-container`}>
          <Module classProp="full-h-w col-c-c">
            <div className="dashboard-spend-bar">
              <h3>Spending Categories</h3>

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
            <div className="tips-container">
              <h2>Tips</h2>
              <ul className="tips col-c-fs">
                {[
                  "Putting your savings into investments as part of a financial plan can help you achieve your financial goals. It all starts with personalised investment advice just for you.",
                  "A mortgage is a loan from a bank or alternate lender that helps you buy property, like a house, a condo, or a commercial building",
                  "Protect your money with a bank account. Use your chequing account to make everyday payments and your savings account for your future financial needs.",
                ].map((tip) => (
                  <li>{tip}</li>
                ))}
              </ul>
            </div>
          </Module>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
