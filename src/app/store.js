import { configureStore } from "@reduxjs/toolkit";
import menuIconReducer from "../features/scrollPositionTracker/scrollPositionTrackerSlice";
import bannerCheckReducer from "../features/bannerCheck/bannerCheckSlice";
import noisePlayerReducer from "../features/noisePlayer/noisePlayer";

export const store = configureStore({
	reducer: {
		menuIcon: menuIconReducer,
		bannerState: bannerCheckReducer,
		bgNoise: noisePlayerReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
