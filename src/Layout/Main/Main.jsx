import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import PopupSearchMenu from "../../components/common/PopupSearchMenu/PopupSearchMenu";
import Footer from "../../components/common/Footer/Footer";

const Main = () => {
	return (
		<>
			<PopupSearchMenu />
			<Outlet />
			<Footer />
			<ScrollRestoration />
		</>
	);
};

export default Main;
