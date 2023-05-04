import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {

	useEffect(() => {
		const threeScript = document.createElement("script");
		threeScript.setAttribute("id", "threeScript");
		threeScript.setAttribute(
			"src",
			"https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
		);
		document.getElementsByTagName("head")[0].appendChild(threeScript);
		return () => {
			if (threeScript) {
				threeScript.remove();
			}
		};
	}, []);

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
