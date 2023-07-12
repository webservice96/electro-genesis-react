import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Style.css";
import Button from "../../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ClinicalTrials() {
	return (
		<section className="glance-section bg-white">
			<Container
				className="mb-5"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<div className="section-header position-relative">
					<span className="bottom-line"></span>
					<Row className="align-items-center">
						<Col lg={{ span: 9 }}>
							<h1 className="section-title">Efficiencies</h1>
						</Col>
					</Row>
				</div>

				<div className="section-description">
					<Row>
						<Col lg={6} className="pe-lg-5 pe-md-5">
							<h3 className="subtitle">
								Workflow 24's mission is to assist critical
								industries unlock 360 solutions from top floor
								to shop floor.
							</h3>
						</Col>
						<Col lg={6} className="pe-lg-5 pe-md-5">
							<p className="description">
								Our use of cutting-edge industry 4.0
								technologies, highly sensitive sensors, and
								expert interpretation of data that is required
								to open up Decision Intelligence required for
								novel and competitive business advantages.
							</p>
						</Col>
					</Row>
				</div>
			</Container>

			<Container
				className="glance-wrapper"
				fluid
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<Row className="row-cols-lg-2 row-cols-1 align-items-center">
					<Col className="p-0">
						<div className="galnce-left-image h-100">
							<img
								className="w-100 img-fluid h-100"
								src="/assets/images/workflow-24.7894.jpeg"
								alt="Not found!"
							/>
						</div>
					</Col>
					<Col className="glance-right p-lg-5 p-md-5">
						<div className=" text-center">
							<h1 className="galnce-title mb-5">At a Glance</h1>
							<div className="row row-cols-2 g-lg-3">
								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25 text-dark">
											<svg
												xmlSpace="preserve"
												viewBox="0 0 200 200"
												y="0"
												x="0"
												xmlns="http://www.w3.org/2000/svg"
												id="Layer_1"
												version="1.1"
											>
												<path
													d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2"
													className="st0"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											{" "}
											Streamlined Business Ops{" "}
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												xmlSpace="preserve"
												viewBox="0 0 200 200"
												y="0"
												x="0"
												xmlns="http://www.w3.org/2000/svg"
												id="Layer_1"
												version="1.1"
											>
												<path
													d="M116.3 84.2V45h23v39.2M65.2 84.2V45h23.1v39.2M154.5 154.5h-108V88.9h18.7v39.2c0 6.4 5.2 11.5 11.5 11.5 6.4 0 11.5-5.2 11.5-11.5V88.9h3.2c3.5 0 6 .7 8.3 2.6 2.6 2.3 10 9 10 15.4 0 6.7-5.2 8.4-7.5 8.4s-7.5-1.8-7.5-8.4c0-6.4 7.4-13.1 10-15.4 2.2-1.9 4.8-2.6 8.3-2.6h3.2v39.2c0 6.4 5.2 11.5 11.5 11.5 6.4 0 11.5-5.2 11.5-11.5V88.9h15.1"
													className="st0"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Single Dashboard
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												xmlSpace="preserve"
												viewBox="0 0 200 200"
												y="0"
												x="0"
												xmlns="http://www.w3.org/2000/svg"
												id="Layer_1"
												version="1.1"
											>
												<path
													d="M121.8 94.9l-22.4 18-19.3-24.2 62.5-50.2L162 62.6l-30.8 24.8c-2.1 1.6-4.7 2.6-7.5 2.6-6.7 0-12.2-5.5-12.2-12.2 0-6.7 5.5-12.2 12.2-12.2 3.4 0 6.4 1.4 8.6 3.6 15.2 15.5 14 43.8 3.3 61-13.3 21.4-41.7 27.7-63.1 14.3-5.5-3.5-10.1-8-13.5-13.1M36 131.4h46.9M72.4 162h46.9M95 162v-10.4"
													className="st0"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Unified Name Space
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeMiterlimit="10"
													strokeWidth="1.9"
													stroke="#2c2c2c"
													fill="none"
													d="M110.5 105.5v-54H35v71.9h17.9c7.6 0 22.1 5.6 22.1 15.7 0 7.4-6.4 9.4-9 9.4-2.6 0-9-2-9-9.4 0-10.1 14.5-15.7 22.1-15.7h46.3c7.6 0 22.1 5.6 22.1 15.7 0 7.4-6.4 9.4-9 9.4-2.6 0-9-2-9-9.4 0-10.1 14.5-15.7 22.1-15.7H165V93.8l-26.7-27.5h-21.9"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Logistics
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeMiterlimit="10"
													strokeWidth="1.9"
													stroke="#2c2c2c"
													fill="none"
													d="M145.2 122.7c-4.7 3.8-19.8 17.8-19.8 29.1 0 11.7 9.2 14.9 13.2 14.9s13.2-3.1 13.2-14.9c0-11.3-15.1-25.3-19.8-29.1h.1l-26.9-21-13.8-7.9L50.5 53c-4.1-4.1-3.4-11.3 1.5-16.3 4.9-4.9 12.2-5.6 16.3-1.5L109.2 76l7.9 13.8 21 26.9"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Digital Twinning
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												viewBox="0 0 200 200"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeMiterlimit="10"
													strokeWidth="1.9"
													stroke="#2c2c2c"
													fill="none"
													d="M149.8 81.8V64.9h-14.1c-6.4 0-18.5-4.6-18.5-13.1 0-6.2 5.4-7.8 7.6-7.8 2.2 0 7.6 1.7 7.6 7.8 0 8.5-12.1 13.1-18.5 13.1H99.7 85.6c-6.4 0-18.5-4.6-18.5-13.1 0-6.2 5.4-7.8 7.6-7.8 2.2 0 7.6 1.7 7.6 7.8 0 8.5-12.1 13.1-18.5 13.1H49.6v23.2h100.3v67.2H49.5V96.2"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Processes
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												xmlSpace="preserve"
												style={{
													enableBackground:
														"new 0 0 200 200",
												}}
												viewBox="0 0 200 200"
												y="0px"
												x="0px"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												xmlns="http://www.w3.org/2000/svg"
												id="Layer_1"
												version="1.1"
											>
												<g>
													<path
														d="M103,137.5c23.8,0,43-19.3,43-43c0-23.8-19.3-43-43-43s-43,19.3-43,43S79.2,137.5,103,137.5z"
														className="st0"
													></path>
													<path
														d="M71.5,168h64.6"
														className="st0"
													></path>
													<path
														d="M94.2,168c2.2-6.7,8.7-13,11.6-15.2c4.7-3.5,7.7-3.8,7.7-3.8c11.2-2.1,21.3-7.6,29.1-15.4"
														className="st0"
													></path>
													<path
														d="M103,39c-30.6,0-55.5,24.8-55.5,55.5c0,27.1,19.5,49.7,45.2,54.5c0,0,3,0.3,7.7,3.8c3,2.2,9.4,8.4,11.6,15.2"
														className="st0"
													></path>
												</g>
											</svg>
										</div>
										<div className="icon-text">
											Project Management
										</div>
									</div>
								</div>

								<div className="col">
									<div className="glance-item d-flex align-items-center">
										<div className="w-25">
											<svg
												xmlSpace="preserve"
												viewBox="0 0 200 200"
												y="0"
												x="0"
												xmlns="http://www.w3.org/2000/svg"
												id="Layer_1"
												version="1.1"
											>
												<path
													d="M102.1 136.7c5.8 4.7 11 9 11 12.6M113.1 83.1c0 9.9-26.6 19.4-26.6 33.1 0 6.8 6.6 13 13.3 18.6"
													className="st0"
												></path>
												<path
													d="M102.3 100.3c5.7 4.8 10.8 10 10.8 16 0 13.7-26.6 24.8-26.6 33.1M86.5 83.1c0 5 6.6 9.8 13.3 15.2"
													className="st0"
												></path>
												<path
													d="M84.4 47.8h-25v13.9h25.1c8.9 0 25.8-6.5 25.8-18.3 0-8.7-7.6-11-10.6-11s-10.6 2.3-10.6 11c0 11.8 16.9 18.3 25.8 18.3H140V167H59.4V70.7M141 47.8h-26.2"
													className="st0"
												></path>
											</svg>
										</div>
										<div className="icon-text">
											Problem Statement
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="clinic-button mt-5 d-flex justify-content-center">
							<Button
								lavel="Efficiencies"
								link={`/system-efficiencies`}
								icon={faArrowRight}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ClinicalTrials;
