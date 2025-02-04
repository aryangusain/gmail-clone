import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: false,
  isComposeExpanded: false,
  activeTab: "Inbox",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    setIsComposeExpanded: (state, action) => {
      state.isComposeExpanded = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { toggleSidebar, setIsComposeExpanded, setActiveTab } = appSlice.actions;
export default appSlice.reducer;
