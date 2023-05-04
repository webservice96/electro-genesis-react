import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import Button from "../../Button/Button";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useDispatch } from "react-redux";
import { menuIconMode } from "../../../features/scrollPositionTracker/scrollPositionTrackerSlice";

function OurTechnology() {

	const dispatch = useDispatch();

	const barRef = useRef(null);
	const sectionRef = useRef();

	useScrollPosition(
		({ prevPos, currPos }) => {
			let technologyPosition = Math.floor(currPos.y);
			if(technologyPosition < 77){
				dispatch(menuIconMode(true))
			}else{
				dispatch(menuIconMode(false))
			}
		},
		[],
		sectionRef,
		false,
		300
	);

	return (
		<>
			<section
				ref={sectionRef}
				className="our-technology position-relative"
			>
				<Container
					className="mb-5"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<div className="section-header position-relative">
						<span className="bottom-line"></span>
						<Row className="align-items-center">
							<Col lg={{ span: 9 }}>
								<h1 className="section-title">
									Our Technologies
								</h1>
							</Col>
							<Col lg={3}>
								<Button
									link={`#`}
									lavel={"Technology"}
									icon={faArrowRight}
								/>
							</Col>
						</Row>
					</div>

					<div
						className="section-description"
						data-aos="fade-up"
						data-aos-duration="2000"
					>
						<Row>
							<Col lg={6} className="pe-5">
								<h3 className="subtitle">
									Our laboratories feature the most advanced
									instruments available.
								</h3>
							</Col>
							<Col lg={6} className="pe-5">
								<p className="description">
									We continuously invest in state-of-the-art
									technologies to provide the highest quality
									of data to our clients.
								</p>
							</Col>
						</Row>
					</div>
				</Container>

				<div
					className="technology-slider-sec py-5"
					data-aos="flip-down"
					data-aos-duration="3000"
				>
					<Splide
						hasTrack={false}
						options={{
							type: "loop",
							perPage: 4,
							perMove: 1,
							autoplay: true,
							pagination: false,
							arrows: true,
						}}
						onMove={(splide) => {
							var end = splide.Components.Controller.getEnd() + 1;
							var rate = Math.min((splide.index + 1) / end, 1);
							barRef.current.style.width =
								String(100 * rate) + "%";
						}}
					>
						<Container>
							<div className="technology-slider-arrow">
								<div className="splide__arrows">
									<button className="splide__arrow splide__arrow--prev">
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
									<button className="splide__arrow splide__arrow--next">
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
								</div>
							</div>
						</Container>

						<div className="technology-slider mb-5">
							<SplideTrack>
								<SplideSlide>
									<div className="techno-sliode-item">
										<div className="number">
											<span>01</span>
										</div>
										<div className="slide-thumb">
											<img
												src="/assets/img/technology/techno-1.png"
												alt="Not found!"
											/>
										</div>
										<div className="technology-name">
											<h4>Flow Cytometry</h4>
										</div>
									</div>
								</SplideSlide>
								<SplideSlide>
									<div className="techno-sliode-item">
										<div className="number">
											<span>01</span>
										</div>
										<div className="slide-thumb">
											<img
												src="/assets/img/technology/techno-1.png"
												alt="Not found!"
											/>
										</div>
										<div className="technology-name">
											<h4>Flow Cytometry</h4>
										</div>
									</div>
								</SplideSlide>
								<SplideSlide>
									<div className="techno-sliode-item">
										<div className="number">
											<span>01</span>
										</div>
										<div className="slide-thumb">
											<img
												src="/assets/img/technology/techno-1.png"
												alt="Not found!"
											/>
										</div>
										<div className="technology-name">
											<h4>Flow Cytometry</h4>
										</div>
									</div>
								</SplideSlide>
							</SplideTrack>
						</div>

						<Container>
							<div className="technology-slider-progress">
								<div
									className="technology-slider-progress-bar"
									ref={barRef}
								></div>
							</div>
						</Container>
					</Splide>
				</div>
			</section>
		</>
	);
}

export default OurTechnology;
