import { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";
import { AudioIcon } from "../../Icons/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { bgNoisePlayer } from "../../../features/noisePlayer/noisePlayer";

function Banner({ isPost = false, title, video, className }) {
	const dispatch = useDispatch();
	const { isPlayer } = useSelector((state) => state.bgNoise);

	const [audioPlay, setAudioPlay] = useState(false);

	console.log("Audio on/off:-", audioPlay);

	const handleClickScroll = () => {
		const element = document.getElementById("page-content");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handeAudioPlayer = () => {
		setAudioPlay(!isPlayer);
		dispatch(bgNoisePlayer(audioPlay))
	};

	return (
		<>
			<header
				className={`home-hero-banner position-relative ${className}`}
				id="home-hero-banner"
			>
				<div className="header-background video" id="banner-video">
					<video
						id="backgroundVideo"
						autoPlay
						muted="muted"
						loop="loop"
						playsInline
					>
						<source src={video} type="video/mp4" />
					</video>
				</div>
				<div className="home-hero-text">
					<Row>
						<Col
							lg={{ span: 8, offset: 2 }}
							xs={12}
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title text-white">{title}</h2>
						</Col>
					</Row>
				</div>
				<div
					className="home-scroll-wrapper home-scroll-down-container"
					data-aos="fade-up"
					data-aos-duration="3000"
				>
					<Container
						fluid="xl"
						className="audio-arrow-slide-container"
					>
						<Row className="justify-content-between">
							<Col lg={2} xs={6}>
								<div className="arrow-down-container">
									<button
										onClick={handleClickScroll}
										className="big-circle-btn"
									>
										<span className="bg"></span>
										<span className="arrow-down-icon">
											<svg
												width="18"
												height="24"
												viewBox="0 0 18 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className="shadow-icon"
											>
												<path
													data-v-11235114=""
													d="M1 14L9 22L17 14"
													stroke="white"
													strokeWidth="1.5"
												></path>
												<path
													data-v-11235114=""
													d="M9 0L9 21"
													stroke="white"
													strokeWidth="1.5"
												></path>
											</svg>

											<svg
												width="18"
												height="24"
												viewBox="0 0 18 24"
												fill="none"
												className="arrow-down-red-svg"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													data-v-11235114=""
													d="M1 14L9 22L17 14"
													stroke="#C3D1AB"
													strokeWidth="1.5"
												></path>
												<path
													data-v-11235114=""
													d="M9 0L9 21"
													stroke="#C3D1AB"
													strokeWidth="1.5"
												></path>
											</svg>
										</span>
									</button>
								</div>
							</Col>
							<Col lg={10} xs={6}>
								{isPost ? (
									<div className="hero-post-slider d-mobile-none">
										<Splide
											hasTrack={false}
											options={{
												type: "loop",
												perPage: 1,
												perMove: 1,
												autoplay: true,
												pagination: false,
												arrows: true,
												// direction: "ttb",
												// height: "38.5px",
											}}
											onMounted={(splide) => {}}
										>
											<div className="post-slider-progress-bar">
												<div className="audio-container d-flex justify-content-end">
													<button
														onClick={
															handeAudioPlayer
														}
														className={`audio-btn ${
															audioPlay
																? "audio-on"
																: "audio-off"
														} d-flex align-items-center`}
													>
														<span className="audio-label">
															Turn audio{" "}
															{audioPlay
																? "Off"
																: "On"}
														</span>
														<span className="audio-icon position-relative">
															<AudioIcon />
														</span>
													</button>
												</div>

												<div className="my-3 splide__progress">
													<div className="splide__progress__bar" />
												</div>
											</div>

											<div className="post-sliders position-relative">
												<SplideTrack>
													<SplideSlide>
														<div className="post-slide-item d-flex align-content-center align-items-center">
															<div className="slide-lebel-btn">
																<a href="#">
																	Link Button
																</a>
															</div>
															<div className="ms-2 slide-post-content">
																<a href="#">
																	<span className="slide-date">
																		2022-03-19
																	</span>
																	<span className="slide-title">
																		Workflow
																		24
																		Launches
																		FDA
																		Approved
																		Companion
																		Diagnostic
																		Immuno-oncology
																		Test for
																		...
																	</span>
																</a>
															</div>
														</div>
													</SplideSlide>
												</SplideTrack>

												<div className="banner-slider-arrow">
													<div className="splide__arrows">
														<button className="splide__arrow splide__arrow--prev">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 40 40"
																width="40"
																height="40"
																focusable="false"
															>
																<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
															</svg>
														</button>
														<button className="splide__arrow splide__arrow--next">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 40 40"
																width="40"
																height="40"
																focusable="false"
															>
																<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</Splide>
									</div>
								) : (
									<div className="audio-container d-flex justify-content-end">
										<button
											onClick={handeAudioPlayer}
											className={`audio-btn ${
												audioPlay
													? "audio-on"
													: "audio-off"
											} d-flex align-items-center`}
										>
											<span className="audio-label">
												Turn audio{" "}
												{audioPlay ? "Off" : "On"}
											</span>
											<span className="audio-icon position-relative">
												<AudioIcon />
											</span>
										</button>
									</div>
								)}
								<div className="audio-container d-flex justify-content-end d-none">
									<button
										onClick={handeAudioPlayer}
										className={`audio-btn ${
											audioPlay ? "audio-on" : "audio-off"
										} d-flex align-items-center`}
									>
										<span className="audio-label">
											Turn audio{" "}
											{audioPlay ? "Off" : "On"}
										</span>
										<span className="audio-icon position-relative">
											<AudioIcon />
										</span>
									</button>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</header>
		</>
	);
}

export default Banner;
