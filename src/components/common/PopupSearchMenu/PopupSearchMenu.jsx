import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useScrollDirection from "../../../hooks/useScrollDirection";

const NavLink = ({ to, level, target, onClick, className = "" }) => {
	return (
		<li className={`${className}`}>
			<Link onClick={onClick} to={to} target={target}>
				<span>{level}</span>
			</Link>
		</li>
	);
};

function PopupSearchMenu() {
	const { menuIconDark } = useSelector((state) => state.menuIcon);
	const [menuOpen, setMenuOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const { isBanner } = useSelector((state) => state.bannerState);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const scrollDirection = useScrollDirection();

	const handleMenuOpen = () => {
		setMenuOpen(false);
	};

	useEffect(() => {
		// Update windowWidth state when the window is resized
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	let searchPlaceHolder = "";
	if (windowWidth >= 768) {
		searchPlaceHolder = "Search for something in the Hematogenix world...";
	} else {
		searchPlaceHolder = "Search...";
	}

	console.log("screen size:", windowWidth);

	return (
		<>
			<div
				className={`poup-menu-container ${
					menuOpen ? "popup-open" : ""
				}`}
			>
				<div className="popup-right-bg"></div>
				<Row>
					<Col lg={3} className="d-none d-md-block">
						<div className="popup-menu-first-col p-4 d-flex flex-column justify-content-between">
							<div className="popup-menu-logo">
								<Link onClick={() => handleMenuOpen()} to={"/"}>
									<img
										src="/assets/img/white-logo.png"
										alt="Not found!"
									/>
								</Link>
							</div>
							<div className="popup-left-menu">
								<ul>
									<NavLink
										to="/"
										level="Made by Pete"
										target=""
										onClick={() => handleMenuOpen()}
									/>
								</ul>
							</div>
						</div>
					</Col>
					<Col lg={5} xs={12}>
						<div className="mobile-popup-logo d-none">
							<Row className="align-items-center">
								<Col xs={9}>
									<Link
										onClick={() => handleMenuOpen()}
										to={"/"}
									>
										<img
											src="/assets/img/white-logo.png"
											alt="Not found!"
										/>
									</Link>
								</Col>
								<Col xs={2}>
									<div className="popup-right-top">
										<button
											onClick={() => setMenuOpen(!open)}
											className="menu-btn menu-popup-op-cl-btn position-relative"
										>
											<span className="line-wrapper">
												<span className="line-1 line"></span>
												<span className="line-2 line"></span>
											</span>
										</button>
									</div>
								</Col>
							</Row>
						</div>

						<div className="popup-main-menu p-2">
							<ul>
								<NavLink
									to="/"
									level="Home"
									target=""
									onClick={() => handleMenuOpen()}
								/>
								<NavLink
									to="/expertise"
									level="Expertise"
									target=""
									onClick={() => handleMenuOpen()}
								/>
								<NavLink
									to="/service"
									level="Services"
									target=""
									onClick={() => handleMenuOpen()}
								/>
								<NavLink
									to="/clinical-trials"
									level="Clinical Trials"
									target=""
									onClick={() => handleMenuOpen()}
								/>
								<NavLink
									to="/technologies"
									level="Technologies"
									target=""
									onClick={() => handleMenuOpen()}
								/>
								<NavLink
									to="/company"
									level="Company"
									target=""
									onClick={() => handleMenuOpen()}
								/>
							</ul>
						</div>

						{/* mobile popup small menu start */}
						<div className="mobile-popup-sm-menu d-none d-mobile-block p-2 mt-4">
							<Row className="align-items-center">
								<Col xs={6}>
									<ul className="first-menu mb-4">
										<NavLink
											to="/careers"
											level="Careers"
											target=""
											onClick={() => handleMenuOpen()}
										/>
										<NavLink
											to="/resources"
											level="Resources"
											target=""
											onClick={() => handleMenuOpen()}
										/>
										<NavLink
											to="/contact"
											level="Contact"
											target=""
											onClick={() => handleMenuOpen()}
										/>
									</ul>
								</Col>
								<Col xs={6}>
									<ul className="second-menu">
										<NavLink
											to="/privacy-policy-and-cookies"
											level="Privacy Policy & Cookies"
											target=""
											onClick={() => handleMenuOpen()}
										/>
										<NavLink
											to="/hippa-notice"
											level="HIPAA Notice"
											target=""
											onClick={() => handleMenuOpen()}
										/>
									</ul>
								</Col>
							</Row>
						</div>
						{/* mobile popup small menu end */}
					</Col>
					<Col lg={4} xs={0} className="d-mobile-none">
						<div className="popup-others-menu p-4 d-flex flex-column justify-content-between align-items-center">
							<div className="popup-right-top">
								<button
									onClick={() => setMenuOpen(!open)}
									className="menu-btn menu-popup-op-cl-btn position-relative"
								>
									<span className="line-wrapper">
										<span className="line-1 line"></span>
										<span className="line-2 line"></span>
									</span>
								</button>
							</div>
							<div className="popup-right-bottom">
								<ul className="first-menu mb-4">
									<NavLink
										to="/careers"
										level="Careers"
										target=""
										onClick={() => handleMenuOpen()}
									/>
									<NavLink
										to="/resources"
										level="Resources"
										target=""
										onClick={() => handleMenuOpen()}
									/>
									<NavLink
										to="/contact"
										level="Contact"
										target=""
										onClick={() => handleMenuOpen()}
									/>
								</ul>

								<ul className="second-menu">
									<NavLink
										to="/privacy-policy-and-cookies"
										level="Privacy Policy & Cookies"
										target=""
										onClick={() => handleMenuOpen()}
									/>
									<NavLink
										to="/hippa-notice"
										level="HIPAA Notice"
										target=""
										onClick={() => handleMenuOpen()}
									/>
								</ul>
							</div>
						</div>
					</Col>
				</Row>
				<div className="popup-left-bg"></div>
			</div>
			<div
				className={`search-wrapper position-fixed ${
					searchOpen ? "search-open" : ""
				} ${!isBanner && "no-banner"} ${
					scrollDirection === "down"
						? "hide-search-menu"
						: "show-search-menu"
				}`}
			>
				<div
					onClick={() => setSearchOpen(!searchOpen)}
					className="search-overlay"
				></div>
				<div className="search-bar-container">
					<Container fluid>
						<Row className="align-items-center">
							<div className="search-open-bg"></div>
							<Col
								lg={3}
								xs={6}
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div className="site-logo">
									<Link to="/">
										{searchOpen ? (
											<img
												src="/assets/img/white-logo.png"
												alt="Not found!"
											/>
										) : (
											<img
												src="/assets/img/dark-logo.png"
												alt="Not found!"
											/>
										)}
									</Link>
								</div>
							</Col>
							<Col
								lg={7}
								xs={4}
								className="search-form-column position-relative"
							>
								<div className="searc-container d-none">
									<form>
										<input
											placeholder={`${searchPlaceHolder}`}
											type="search"
											name="search"
										/>
									</form>
								</div>
							</Col>
							<Col
								lg={2}
								xs={2}
								data-aos="fade-left"
								data-aos-duration="1000"
							>
								<div className="search-box d-flex justify-content-end justify-content-md-center align-items-center">
									{searchOpen ? (
										<button
											onClick={() =>
												setSearchOpen(!searchOpen)
											}
											className="search-button search-closer"
										>
											<span className="search-label">
												Close
											</span>
											<span className="search-icon-sp">
												<svg
													width="27"
													height="26"
													viewBox="0 0 27 26"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="search-icon"
													data-v-96ba656a=""
												>
													<line
														x1="2.06066"
														y1="1"
														x2="25.8909"
														y2="24.8302"
														stroke="white"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
														data-v-96ba656a=""
													></line>
													<line
														x1="1"
														y1="24.8302"
														x2="24.8302"
														y2="0.999996"
														stroke="white"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
														data-v-96ba656a=""
													></line>
												</svg>
											</span>
										</button>
									) : (
										<>
											<button
												onClick={() =>
													setSearchOpen(!searchOpen)
												}
												className={`search-button ${
													isBanner
														? ""
														: "dark-search-icon"
												}`}
											>
												<span className="search-label">
													Search
												</span>
												<span className="search-icon-sp">
													<svg
														width="28"
														height="26"
														viewBox="0 0 28 26"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="search-icon"
														data-v-61e15438=""
													>
														<circle
															cx="11"
															cy="11"
															r="10"
															stroke="white"
															strokeWidth="2"
															data-v-61e15438=""
														></circle>{" "}
														<line
															x1="18.6585"
															y1="18.2474"
															x2="26.6585"
															y2="25.2474"
															stroke="white"
															strokeWidth="2"
															data-v-61e15438=""
														></line>
													</svg>
												</span>
											</button>
											<button
												onClick={() =>
													setMenuOpen(!menuOpen)
												}
												className={`menu-btn menu-opener position-relative ${
													menuIconDark || !isBanner
														? "dark-menu-icon"
														: ""
												} ${
													menuOpen ? "menu-open" : ""
												}`}
											>
												<span className="line-wrapper">
													<span className="line-1 line"></span>
													<span className="line-2 line"></span>
												</span>
											</button>
										</>
									)}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	);
}

export default PopupSearchMenu;
