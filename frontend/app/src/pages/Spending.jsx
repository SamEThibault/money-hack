import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { setStatementInfo } from "../redux/userSlice";

function Spending({ barData }) {
  const { statementInfo } = useSelector(({ user }) => user);
  return (
    <div className="spending-container">
      <Nav />
      <Container classProp={"spending col-c-fs"}>
        <h1>Spending</h1>
        <div className="spending-content">
          <div className="spending-tips row-fs-c">
          <h2>
            {
              statementInfo.spendingMessage
            }
            </h2>
          </div>
          <div className="spending-chart-container col-c-c">
            <h2>Spending Categories</h2>
            <div className="spending-chart">
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
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Spending;
