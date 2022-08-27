import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import { Pie } from "react-chartjs-2";

function Budget({pieData}) {
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
              <Pie data={pieData} />
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
