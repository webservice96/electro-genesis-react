import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";
import "./index.css";
import "./ResponsiveStyle.css"; 
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	// </React.StrictMode>
);
