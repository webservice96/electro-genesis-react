import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main/Main";
import Resources from "../pages/Resources";
import Expertise from "../pages/Expertise";
import HematopathologyPage from "../pages/Expertise/HematopathologyPage";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/expertise",
				element: <Expertise />,
			},
			{
				path: "resources",
				element: <Resources />,
			},
			{
				path: "expertise/hematopathology",
				element: <HematopathologyPage />,
			},
		],
	},
]);

export default routes;
