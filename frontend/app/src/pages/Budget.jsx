import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["Necessities", "Discretionary", "Savings"];
const data = {
  labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["#8cccab", "#405f77", "#3d7e8a"],
      borderColor: "black",
      data: [10, 10, 5],
    },
  ],
};
function Budget() {
  return (
    <div className="budget-container">
      <Nav />
      <Container classProp={"budget row-c-c"}>
        <div className="budget-content">
          <div className="budget-tips row-fs-c">
            {[1, 2, 3, 4, 5].map(() => (
              <div className="budget-tip">HI</div>
            ))}
          </div>
          <div className="budget-pie-container row-c-c">
            <div className="budget-pie">
              <Pie data={data} />
            </div>
          </div>
          <div className="budget-salary">Salary</div>
          <div className="budget-expenses">Expenses</div>
        </div>
      </Container>
    </div>
  );
}

export default Budget;
