import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import BackgroundNoise from "./components/BackgroundNoise/BackgroundNoise";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			{/* <BackgroundNoise /> */}
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
