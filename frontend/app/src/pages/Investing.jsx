import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
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
              <div className="investing-tip">HI</div>
            ))}
          </div>
          <div className="investing-pie-container row-c-c">
            <div className="investing-pie">
              <Bar data={data} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Investing;
