import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isBanner: false,
};

const bannerCheckSlice = createSlice({
	name: "bannerCheck",
	initialState,
	reducers: {
		bannerCheck: (state, action) => {
			state.isBanner = action.payload;
		},
	},
});

export const { bannerCheck } = bannerCheckSlice.actions;
export default bannerCheckSlice.reducer;
