import { configureStore } from "@reduxjs/toolkit";
import dataTransferSlice from "./Slice/dataTransferSlice";
import FormSlice from "./Slice/FormSlice";

export default configureStore({
    reducer: {
    DataTransfer: dataTransferSlice,
    FormSlice: FormSlice
      
  },
});
