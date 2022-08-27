import { createSlice } from "@reduxjs/toolkit";

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
    loginVerify: false
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
    setEStatement:(state, {payload})=>{
      state.eStatement = payload;
      console.log(state.eStatement)
    },
    setLoginVerify: (state, { payload }) => {
      state.loginVerify = payload;
    }
  },
});

//Action creators are generated for each case reducer function
export const { setUserName, setPassword, setConfirmPassword, setAge, setSalary, setPersonalDebt, setEStatement, setLoginVerify} =
  userSlice.actions;
export default userSlice.reducer;
