import { configureStore } from "@reduxjs/toolkit";
import menuIconReducer from "../features/scrollPositionTracker/scrollPositionTrackerSlice";
import bannerCheckReducer from "../features/bannerCheck/bannerCheckSlice";

export const store = configureStore({
	reducer: {
		menuIcon: menuIconReducer,
		bannerState: bannerCheckReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
