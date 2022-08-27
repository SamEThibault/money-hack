import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  reducers: {
    setEmail: (state, { payload }) => {
      state.email = payload;
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
      state.setPersonalDebt = payload;
    },
  },
});

//Action creators are generated for each case reducer function
export const { setEmail, setPassword, setConfirmPassword, setAge, setSalary, setPersonalDebt } =
  userSlice.actions;
export default userSlice.reducer;
