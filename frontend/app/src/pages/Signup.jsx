import React, {useState} from "react";
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
import {Link, useNavigate} from 'react-router-dom'

function Dashboard() {
  const { userName, password, confirmPassword} = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [error, setError] = useState('')
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

    console.log('test')

    fetch("http://127.0.0.1:5000/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    navigate("/dashboard")
  };

  const handleSubmit = ()=>{

    if (password !== confirmPassword)
    {
        return setError('Passwords do not match')
    }
    else
    {
      handleSignup();
      return setError(null)

    }
    

  }
  
  return (
    <div className="signup-parent ">
      <div className="signup-container">
        <h2>Welcome to SCOTIABANK</h2>
        {error && (<p>{error}</p>)}
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
        <div className="signup-password">
          <label className="col-c-fs">
            <span>Confirm Password</span>
            <input
              type="password"
              value={confirmPassword}
              placeholder=""
              onChange={(e) => {
                dispatch(setConfirmPassword(e.target.value));
              }}
            />
          </label>
        </div>
        <div className="signup-submit">
          <button
            className="signup-button"
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Sign Up
          </button>
        </div>
        <p>Already have an account? <Link to="/login" className="signup-login">Log In</Link></p>
      </div>
    </div>
  );
}

export default Dashboard;
