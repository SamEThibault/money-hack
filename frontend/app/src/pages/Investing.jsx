import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { setStatementInfo } from "../redux/userSlice";

function Investing() {

  const { statementInfo } = useSelector(({ user }) => user);
  return (
    <div className="investing-container">
      <Nav />
      <Container classProp={"investing col-c-fs"}>
        <h1 className="investing-title">Investing</h1>
        <div className="investing-content">
          <div className="investing-tips row-fs-c">
            {statementInfo?.tips?.RRSP?.map((tip) => (
              <div className="investing-tip">{tip}</div>
            ))}
            {statementInfo?.tips?.TFSA?.map((tip) => (
              <div className="investing-tip">{tip}</div>
            ))}
            {statementInfo?.tips?.Save}
          </div>
          <div className="investing-stats investing-tfsa col-c-c">
            <h1>
              Projected Yearly <br /> TFSA Contribution
            </h1>
            <h2>{statementInfo?.TFSA?.toFixed(2)}</h2>
          </div>
          <div className="investing-stats investing-rrsp col-c-c">
            <h1>
              Projected Yearly
              <br /> RRSP Contribution
            </h1>
            <h2>{statementInfo?.RRSP?.toFixed(2)}</h2>
          </div>
          <div className="investing-stats investing-rrsp col-c-c">
            <h1>Extra <br/> Savings</h1>
            <h2>{statementInfo?.leftover?.toFixed(2)}</h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Investing;
