import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { AiOutlineLineChart, AiOutlinePieChart } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container full-sh col-sb-c">
      <div className="nav-content col-c-fe full-w">
        <h1>Money Hack</h1>
        <ul className="nav-links col-c-fs full-w">
          <Link to="personal-info" className="row-fs-c full-w">
            <p className="row-c-c">
              <BsPersonSquare />
            </p>
            <p className="row-c-c">Personal Info</p>
          </Link>
          <Link to="/" className="row-fs-c full-w">
            <p className="row-c-c">
              <MdOutlineDashboard />
            </p>
            <p className="row-c-c">Dashboard</p>
          </Link>
          <Link to="/budget" className="row-fs-c full-w">
            <p className="row-c-c">
              <BiMoney />
            </p>
            <p className="row-c-c">Budget</p>
          </Link>
          <Link to="/investing" className="row-fs-c full-w">
            <p className="row-c-c">
              <AiOutlineLineChart />
            </p>
            <p className="row-c-c">Investing</p>
          </Link>
          <Link to="/spending" className="row-fs-c full-w">
            <p className="row-c-c">
              <AiOutlinePieChart />
            </p>
            <p className="row-c-c">Spending</p>
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
