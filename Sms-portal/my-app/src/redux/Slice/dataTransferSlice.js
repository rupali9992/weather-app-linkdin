import { createSlice } from "@reduxjs/toolkit";
export const dataTransferSlice = createSlice({
  name: "dataTransfer",
  initialState: {
    value: "",
    value1:""
    },
    reducers: {
        sharedata: (state,actions) => {
            console.log('share data');
        console.log(actions);
        state.value = actions.payload;
      },
        shareGroupdata: (state,actions) => {
            console.log('share group data');
        console.log(actions);
        state.value1 = actions.payload;
      }
  }
});
export const { sharedata,shareGroupdata } = dataTransferSlice.actions;

export default dataTransferSlice.reducer;