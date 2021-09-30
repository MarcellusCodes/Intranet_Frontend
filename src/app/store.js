import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/ui/modalSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
  },
});
