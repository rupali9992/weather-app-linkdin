import { createSlice } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";
export const FormSlice = createSlice({
  name: "FormSlice",
  initialState: {
    value: ""
  
  },
  reducers: {
    shareMessagedata: (state, actions) => {
      console.log("share data");
      console.log(actions);
      state.value = actions.payload;
    },
  },
});
export const { shareMessagedata } = FormSlice.actions;

export default FormSlice.reducer;
