import React from "react";
import { useLocation } from "react-router-dom";
import "./Style.css";
import { useSelector } from "react-redux";

function Layout({ children, className = "" }) {
	const { pathname } = useLocation();
	const { isBanner } = useSelector((state) => state.bannerState);
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
