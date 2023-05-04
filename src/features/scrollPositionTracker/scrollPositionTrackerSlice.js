import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	menuIconDark: false,
};

const scrollPositionTrackerSlice = createSlice({
	name: "scrollTracker",
	initialState,
	reducers: {
		menuIconMode: (state, action) => {
			state.menuIconDark = action.payload;
		},
	},
});

export const { menuIconMode } = scrollPositionTrackerSlice.actions;
export default scrollPositionTrackerSlice.reducer;
