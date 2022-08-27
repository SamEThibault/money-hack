import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { AiOutlineLineChart, AiOutlinePieChart } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className="nav-container full-sh col-sb-c">
      <div className="nav-content col-c-fe full-w">
        <h1>Money Hack</h1>
        <ul className="nav-links col-c-fs full-w">
          <Link
            to="/personal-info"
            className={`${
              location.pathname === "/personal-info" ? "active-link" : ""
            } row-fs-c personal-link full-w `}
          >
            <p className="row-c-c">
              <BsPersonSquare />
            </p>
            <p className="row-c-c">Personal Info</p>
            {location.pathname === "/personal-info" && (
              <motion.div className="nav-underline" layoutId="nav-underline" />
            )}
          </Link>
          <Link
            to="/dashboard"
            exact
            className={`${
              location.pathname === "/dashboard" ? "active-link" : ""
            } row-fs-c personal-link full-w `}
          >
            <p className="row-c-c">
              <MdOutlineDashboard />
            </p>
            <p className="row-c-c">Dashboard</p>
            {location.pathname === "/dashboard" && (
              <motion.div className="nav-underline" layoutId="nav-underline" />
            )}
          </Link>
          <Link
            to="/budget"
            exact
            className={`${
              location.pathname === "/budget" ? "active-link" : ""
            } row-fs-c personal-link full-w `}
          >
            <p className="row-c-c">
              <BiMoney />
            </p>
            <p className="row-c-c">Budget</p>
            {location.pathname === "/budget" && (
              <motion.div className="nav-underline" layoutId="nav-underline" />
            )}
          </Link>
          <Link
            to="/investing"
            exact
            className={`${
              location.pathname === "/investing" ? "active-link" : ""
            } row-fs-c personal-link full-w `}
          >
            <p className="row-c-c">
              <AiOutlineLineChart />
            </p>
            <p className="row-c-c">Investing</p>
            {location.pathname === "/investing" && (
              <motion.div className="nav-underline" layoutId="nav-underline" />
            )}
          </Link>
          <Link
            to="/spending"
            exact
            className={`${
              location.pathname === "/spending" ? "active-link" : ""
            } row-fs-c personal-link full-w `}
          >
            <p className="row-c-c">
              <AiOutlinePieChart />
            </p>
            <p className="row-c-c">Spending</p>
            {location.pathname === "/spending" && (
              <motion.div className="nav-underline" layoutId="nav-underline" />
            )}
          </Link>
        </ul>
      </div>
      <div className="nav-footer">
        <p>2022 All Rights Reserved</p>
      </div>
    </nav>
  );
}

export default Nav;
