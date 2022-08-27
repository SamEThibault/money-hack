import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import { Pie } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { setSalary } from "../redux/userSlice";

function Budget({ pieData }) {
  const { statementInfo, salary } = useSelector(({ user }) => user);
  return (
    <div className="budget-container">
      <Nav />
      <Container classProp={"budget col-c-fs"}>
        <h1>Budget</h1>

        <div className="budget-content">
          <div className="budget-tips row-fs-c">
            
            {statementInfo?.tips?.Budget?.map((tip) => (
              <div className="budget-tip">{tip}</div>
            ))}
          </div>
          <div className="budget-pie-container row-c-c">
            <div className="budget-pie">
              <Pie data={pieData} />
            </div>
          </div>
          <div className="budget-salary"><h2>Salary</h2>
            <h2>{salary}</h2>
          </div>
          
          <div className="budget-expenses"><h2>Debt</h2>
            <h2>{statementInfo?.debt}</h2>
            <h3>{statementInfo?.tips?.Debt[Math.floor(Math.random() * 4)]}</h3>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Budget;
