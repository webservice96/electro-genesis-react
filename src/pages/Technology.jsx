import React from "react";
import Layout from "../Layout/Main/Layout";
import Banner from "../components/common/Banner/Banner";
import { Col, Container, Row } from "react-bootstrap";
import "../Service_Clinical_Technology.css";
import { ReadMoreButton } from "../components/common/ReadMoreButton/ReadMoreButton";
import GradientBg from "../components/GradientBg/GradientBg";

function Technology() {
	return (
		<>
			<GradientBg variant={2} />
			<Banner
				isBanner={true}
				title="Business Intelligence"
				video={"/assets/videos/technologies-hd.mp4"}
				className={`technologies-banner`}
			/>
			<Layout className="bg-white technologies-template">
				<Container>
					<Row className="py-5">
						<Col
							sm={{ span: 6, offset: 3 }}
							md={{ span: 8, offset: 2 }}
						>
							<div
								className=" text-center py-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<h2 className="grand_title main-pages-header-title text-md-start">
									At Workflow 24, our solutions utilise
									feature the most comprehensive unification
									systems available. We continuously invest in
									state-of-the-art technologies to provide the
									highest quality of data to our clients.
								</h2>
							</div>
						</Col>
					</Row>
				</Container>

				<section className="card-section pt-5">
					<div className="card-wreper technologies-items">
						<div
							className="card-item position-relative"
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>01</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Material Management
										</h2>
										<h3 className="subtitle">
											— Factories with Industry 4.0
											capabilities can shift their
											operations on a dime, flexibly
											adapting to meet changing customer
											demands, enhance productivity,
											reduce waste, and accelerate
											production.
										</h3>
										<ReadMoreButton
											lable="More"
											link={
												"/technologies/flow-cytometry"
											}
										/>
									</div>
								</div>
								<div className="card-image ">
									<img
										src="/assets/img/industry/artificial-intelligence_9938756.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div
							className="card-item position-relative"
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>02</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Operational Architecture
										</h2>
										<h3 className="subtitle">
											— keep the big picture of Industry
											4.0 transformation in mind as the
											map that continues to guide and
											direct the organisation’s Industry
											4.0 journey.
										</h3>
										<ReadMoreButton
											lable="More"
											link={
												"/technologies/molecular-genetics"
											}
										/>
									</div>
								</div>
								<div className="card-image ">
									<img
										src="/assets/img/industry/chip_9938805.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div
							className="card-item position-relative"
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>03</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Connected Ecosystems
										</h2>
										<h3 className="subtitle">
											— A connected factory ecosystem is
											driven primarily by IT/OT
											convergence, which empowers
											operational excellence, maximises
											uptime, and increases throughput by
											allowing manufacturers to have a
											unified view of their enterprises
										</h3>
										<ReadMoreButton
											lable="More"
											link={
												"/technologies/cytogenetics-fish"
											}
										/>
									</div>
								</div>
								<div className="card-image">
									<img
										src="/assets/img/industry/light-bulb_9938806.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div
							className="card-item position-relative"
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>04</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Configurable Processes
										</h2>
										<h3 className="subtitle">
											— The principle of configurability
											permeates every part of a factory
											that embraces Industry 4.0. Unlike
											customisation
										</h3>
										<ReadMoreButton
											lable="More"
											link={"/technologies/histology"}
										/>
									</div>
								</div>
								<div className="card-image">
									<img
										src="/assets/img/industry/robotic-arm_9938796.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div
							className="card-item position-relative"
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>05</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Complex Simplicity
										</h2>
										<h3 className="subtitle">
											— the ability to communicate and
											display complex processes in a
											simplified format.
										</h3>
										<ReadMoreButton
											lable="More"
											link={"/technologies/immunoassays"}
										/>
									</div>
								</div>
								<div className="card-image">
									<img
										src="/assets/img/industry/robotics_9938683.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div
							className="card-item position-relative"
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<span className="top-line"></span>
							<span className="right-line"></span>
							<div className="card-content d-flex align-items-center">
								<div className="card-text">
									<div className="o-number text-center mt-0">
										<span>06</span>
									</div>
									<div className="card-title">
										<h2 className="grand_title mb-3">
											Intelligent Insights
										</h2>
										<h3 className="subtitle">
											— With multidirectional data
											synthesised from ever-changing
											sources, analytics can be
											communicated in real-time via
											operational dashboards.
										</h3>
										<ReadMoreButton
											lable="More"
											link={
												"/technologies/digital-pathology"
											}
										/>
									</div>
								</div>
								<div className="card-image">
									<img
										src="/assets/img/industry/robotic-surgery_9938803.png"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="support-bg contact-cta-area">
					<div className="d-flex contact-cta-row position-relative">
						<div
							className="contat_us_text bg-white border-right-runded d-flex align-items-center"
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="left-textAnd-button w-75 mx-auto text-center">
								<h2 className="grand_title ">
									We are here to support you.
								</h2>
								<h6 className="fs-5 main-pages-header-title">
									Contact us to find out how our services can
									help achieve your goals.
								</h6>
								<div className="d-flex contact-cta-btn-text py-5 align-items-center justify-content-evenly">
									<ReadMoreButton
										lable="Contact us"
										link={"/contact"}
									/>
									<span className="main-pages-header-title">
										A member of our team will contact you
										shortly.
									</span>
								</div>
							</div>
						</div>
						<div
							className="video-div"
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="w-100 h-100">
								<video
									autoPlay
									muted="muted"
									loop="loop"
									playsInline
									className="w-100 h-100"
								>
									<source
										type="video/mp4"
										src="/assets/videos/promo-block-small-uhd.mp4"
									/>
								</video>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export default Technology;
