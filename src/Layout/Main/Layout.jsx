import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Style.css";
import { useDispatch, useSelector } from "react-redux";
import { bannerCheck } from "../../features/bannerCheck/bannerCheckSlice";

function Layout({ children, className = "" }) {
	const { pathname } = useLocation();
	const { isBanner } = useSelector((state) => state.bannerState);

	const dispatch = useDispatch();

	useEffect(() => {
		const hasBanner = document.getElementById("home-hero-banner");
		if (hasBanner) {
			dispatch(bannerCheck(true));
		} else {
			dispatch(bannerCheck(false));
		}
	}, [pathname]);

	return (
		<main
			id={`page-content`}
			className={`${pathname === "/" ? "home" : ""} ${
				isBanner ? "" : "without-banner"
			} page-content position-relative ${className}`}
		>
			{children}
		</main>
	);
}

export default Layout;
