import React from "react";
import { BiBullseye } from "react-icons/bi";
import Container from "../components/Container";
import Nav from "./Nav";


function Investing() {
  return (
    <div className="investing-container">
      <Nav />
      <Container classProp={"investing col-c-fs"}>
        <h1 className="investing-title">Investing</h1>
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
