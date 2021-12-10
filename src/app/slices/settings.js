import { createSlice } from "@reduxjs/toolkit";

const settings = createSlice({
  name: "settings",
  initialState: {
    lan: "en",
    isSent: false,
  },
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.lan = payload?.language;
    },
    handleSend: (state, { payload }) => {
      state.isSent = payload?.isSent;
    },
  },
});

export const { changeLanguage, handleSend } = settings.actions;

export default settings.reducer;
