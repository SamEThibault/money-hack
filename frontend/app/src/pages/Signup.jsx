import React from "react";
import Nav from "./Nav";
import Container from "../components/Container";
import { useSelector, useDispatch } from "react-redux";
import {
  setAge,
  setConfirmPassword,
  setUserName,
  setPassword,
  setPersonalDebt,
  setSalary,
} from "../redux/userSlice";
import { numbersOnly } from "../utils/formValidation";
import "../styles/signup.scss";

function Dashboard() {

    const { userName, password, confirmPassword, age, personalDebt, salary } = useSelector(({ user }) => user);
    const dispatch = useDispatch();

  return (
    <div className="signup-parent ">
        <div className="signup-container">
            <h2>Account Registration</h2>
            <div className="personal-userName">
                <label className="col-c-fs">
                  <span>UserName</span>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => {
                      dispatch(setUserName(e.target.value));
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
              <div className="signup-submit">
              <button className="signup-button" type = "submit">Sign Up</button>
              </div>
            </div>
      </div>
  );
}

export default Dashboard;
