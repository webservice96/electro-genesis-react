import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PopupSearchMenu from "../../components/common/PopupSearchMenu/PopupSearchMenu";
import Footer from "../../components/common/Footer/Footer";
import GradientBg from "../../components/GradientBg/GradientBg";
import { useDispatch } from "react-redux";
import { bannerCheck } from "../../features/bannerCheck/bannerCheckSlice";

const Main = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	useEffect(() => {
		const hasBanner = document.getElementById("home-hero-banner");
		if (hasBanner) {
			dispatch(bannerCheck(true));
		} else {
			dispatch(bannerCheck(false));
		}
	}, [pathname]);

	return (
		<>
			<GradientBg />
			<PopupSearchMenu />
			<Outlet />
			<Footer />
		</>
	);
};

export default Main;
