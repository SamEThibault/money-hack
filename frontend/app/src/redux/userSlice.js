import { createSlice } from "@reduxjs/toolkit";
import { toggleDisplayMode } from "../App";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    password: "",
    confirmPassword: "",
    age: "",
    salary: "",
    personalDebt: "",
    eStatement: "",
    age: "",
    loginVerify: false,
    navUrl: "",
    isLightMode: false,
    statementInfo: {},
    submitted: false,
  },
  reducers: {
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setConfirmPassword: (state, { payload }) => {
      state.confirmPassword = payload;
    },
    setAge: (state, { payload }) => {
      state.age = payload;
    },
    setSalary: (state, { payload }) => {
      state.salary = payload;
    },
    setPersonalDebt: (state, { payload }) => {
      state.personalDebt = payload;
    },
    setEStatement: (state, { payload }) => {
      state.eStatement = payload;
      console.log(state.eStatement);
    },
    setEStatement: (state, { payload }) => {
      state.eStatement = payload;
      console.log(state.eStatement);
    },
    setEStatement: (state, { payload }) => {
      state.eStatement = payload;
    },
    setNavUrl: (state, { payload }) => {
      state.navUrl = payload;
    },
    setIsLightMode: (state, { payload }) => {
      state.isLightMode = payload;
    },
    setStatementInfo: (state, { payload }) => {
      state.statementInfo = payload;
    },
    setLoginVerify: (state, { payload }) => {
      state.loginVerify = payload;
    },
    setSubmitted: (state, { payload }) => {
      state.submitted = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const {
  setUserName,
  setPassword,
  setConfirmPassword,
  setAge,
  setSalary,
  setPersonalDebt,
  setEStatement,
  setIsLightMode,
  setLoginVerify,
  setStatementInfo,
  setSubmitted,
} = userSlice.actions;
export default userSlice.reducer;
