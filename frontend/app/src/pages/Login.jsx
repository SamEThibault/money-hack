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
  setLoginVerify
} from "../redux/userSlice";
import { numbersOnly } from "../utils/formValidation";
import "../styles/signup.scss";
import {Link, useNavigate} from 'react-router-dom'

function Dashboard() {
  const { userName, password, loginVerify} = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSignup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", userName);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:5000/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    dispatch(setLoginVerify(true))
    
    navigate("/dashboard")
  };

  return (
    <div className="signup-parent ">
      <div className="signup-container">
        <h2>Welcome to SCOTIABANK</h2>
        <div className="signup-userName">
          <label className="col-c-fs">
            <span>UserName</span>
            <input
              type="text"
              value={userName}
              placeholder=""
              onChange={(e) => {
                dispatch(setUserName(e.target.value));
              }}
            />
          </label>
        </div>
        <div className="signup-password">
          <label className="col-c-fs">
            <span>Password</span>
            <input
              type="password"
              value={password}
              placeholder=""
              onChange={(e) => {
                dispatch(setPassword(e.target.value));
              }}
            />
          </label>
        </div>
        <div className="signup-submit">
          <button
            className="signup-button"
            type="submit"
            onClick={() => {
              handleSignup();
            }}
          >
            Login
          </button>
        </div>
        <p>Don't have an account? <Link to="/sign-up" className="signup-login">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Dashboard;
