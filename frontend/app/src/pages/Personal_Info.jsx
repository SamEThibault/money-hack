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
  setEStatement,
} from "../redux/userSlice";
import { numbersOnly } from "../utils/formValidation";
function Financial_Info() {
  const { userName, password, confirmPassword, age, personalDebt, salary, eStatement } = useSelector(
    ({ user }) => user
  );
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Disallow", "/not-for-robots.html");
    myHeaders.append("User-Agent", "*");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    let formData = new FormData();

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", userName);
    urlencoded.append("age", age);
    urlencoded.append("salary", salary);
    urlencoded.append("debt", personalDebt);

    var input = document.querySelector('input[type="file"]')
    formData.append("file", input.files[0]);
    formData.append("name", userName);

    var requestOptionsAddInfo = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    var requestOptionsFile = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    }

    // Sends the user's personal info then sends the e-statement
    fetch("http://127.0.0.1:5000/addinfo", requestOptionsAddInfo)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => {
        fetch("http://127.0.0.1:5000/file", requestOptionsFile)
          .then((response) => response.text())
          .then((result) => console.log(result));
      })
      .catch((error) => console.log("error", error));
  }

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
          <form className="personal-inputs full-w" onSubmit={handleSubmit}>
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
                id = "file"
                value={personalDebt}
                onChange={(e) => {
                  dispatch(setPersonalDebt(numbersOnly(e.target.value)));
                }}
              />
            </div>
            <div className="info-card personal-e-statment">
              <h2>Monthly E-Statement</h2>
              <label
              className="col-c-c"
              >
                <span>Select File</span>
                <input
                  type="file"
                  onChange={(e) => {
                    dispatch(setEStatement(e.target.value));
                  }}
                />
              </label>
            </div>
            <button className="personal-submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Financial_Info;
