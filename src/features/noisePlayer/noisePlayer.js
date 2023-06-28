import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isPlayer: false,
};

const noisePlayerSlice = createSlice({
	name: "noisePlayer",
	initialState,
	reducers: {
		bgNoisePlayer: (state, action) => {
			state.isPlayer = action.payload;
		},
	},
});

export const { bgNoisePlayer } = noisePlayerSlice.actions;
export default noisePlayerSlice.reducer;
