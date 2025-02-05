import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: false,
  isComposeExpanded: false,
  activeTab: "Inbox",
  user: null,
  emails: []
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    }
  },
});

export const { toggleSidebar, setIsComposeExpanded, setActiveTab, setUser, setEmails } = appSlice.actions;
export default appSlice.reducer;
