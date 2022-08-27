import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["TFSA", "RRSP", ""];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [2, 3, 5],
    },
  ],
};
function Investing() {
  return (
    <div className="investing-container">
      <Nav />
      <Container classProp={"investing row-c-c"}>
        <div className="investing-content">
          <div className="investing-tips row-fs-c">
            {[1, 2, 3, 4, 5].map(() => (
              <div className="investing-tip">{"Ivesting"}</div>
            ))}
          </div>
          <div className="investing-tfsa col-c-c">
            <h1>
              Projected Yearly <br /> TFSA Contribution
            </h1>
            <h2>512312.123</h2>
          </div>
          <div className="investing-rrsp col-c-c">
            <h1>
              Projected Yearly
              <br /> RRSP Contribution
            </h1>
            <h2>512312.123</h2>
          </div>
          <div className="investing-rrsp col-c-c">
            <h1>Extra <br/> Savings</h1>
            <h2>512312.123</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Investing;
