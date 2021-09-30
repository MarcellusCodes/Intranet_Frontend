import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
    title: "Test",
    content: [{ id: 1, title: "Tester", text: "Lorem ipsum dolor sit amet" }],
  },
  reducers: {
    openModal: (state) => {
      state.open = true;
    },
    closeModal: (state) => {
      state.open = false;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { openModal, closeModal, setTitle, setContent } =
  modalSlice.actions;

export const selectModal = (state) => state.modal.open;

export const selectTitle = (state) => state.modal.title;

export const selectContent = (state) => state.modal.content;

export default modalSlice.reducer;
