import React from "react";
import Nav from "./Nav";
import Container from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import {
  setAge,
  setConfirmPassword,
  setEmail,
  setPassword,
  setPersonalDebt,
  setSalary,
} from "../redux/userSlice";
import { numbersOnly } from "../utils/formValidation";
function Financial_Info() {
  const { email, password, confirmPassword, age, personalDebt, salary } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  return (
    <div className="personal-container">
      <Nav />

      <div className="personal-content ">
        <Container classProp={"personal col-fs-c"}>
          <h1>Personal Info</h1>
          <p>
            To get started using our finance literacy app, please fill in the following information to allow
            the application to run your data through the financial analysis algorithm.
          </p>
          <div className="personal-inputs full-w">
            <div className="info-card personal-account">
              <h2>Account Registration</h2>
              <div className="personal-email">
                <label className="col-c-fs">
                  <span>Email</span>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                      dispatch(setEmail(e.target.value));
                    }}
                  />
                </label>
              </div>
              <div className="personal-password">
                <label className="col-c-fs">
                  <span>Password</span>
                  <input
                    type="text"
                    value={password}
                    pattern={"\\d+"}
                    onChange={(e) => {
                      dispatch(setPassword(numbersOnly(e.target.value)));
                    }}
                  />
                </label>
              </div>
              <div className="personal-password">
                <label className="col-c-fs">
                  <span>Confirm Password</span>
                  <input
                    type="text"
                    value={confirmPassword}
                    onChange={(e) => {
                      dispatch(setConfirmPassword(e.target.value));
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="info-card personal-age">
              <h2>Age</h2>
              <input
                type="text"
                value={age}
                onChange={(e) => {
                  dispatch(setAge(numbersOnly(e.target.value)));
                }}
              />
            </div>
            <div className="info-card personal-salary">
              <h2>Salary</h2>
              <input
                type="text"
                value={salary}
                onChange={(e) => {
                  dispatch(setSalary(numbersOnly(e.target.value)));
                }}
              />
            </div>
            <div className="info-card personal-debt">
              <h2>Personal Debt</h2>
              <input
                type="text"
                value={personalDebt}
                onChange={(e) => {
                  dispatch(setPersonalDebt(numbersOnly(e.target.value)));
                }}
              />
            </div>
            <button className="personal-submit">Submit</button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Financial_Info;
