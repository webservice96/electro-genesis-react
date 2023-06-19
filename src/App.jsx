import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
