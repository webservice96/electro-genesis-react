import React from "react";
import { Col, Row } from "react-bootstrap";

import "./Style.css";

function ExpertiseBlock() {
	return (
		<section
			className="expertise-block position-relative"
			id="expertise-block"
		>
			<div className="floating-images d-mobile-none">
				<img src="/assets/img/expertise/expertise-1.jpg" className="img-1" alt="Not found!" data-aos="fade-up" data-aos-duration="2000" />
				<img src="/assets/img/expertise/expertise-2.jpg" className="img-2" alt="Not found!" data-aos="fade-up" data-aos-duration="2000" />
				<img src="/assets/img/expertise/expertise-3.jpg" className="img-3" alt="Not found!" data-aos="fade-up" data-aos-duration="2000" />
				<img src="/assets/img/expertise/expertise-4.jpg" className="img-4" alt="Not found!" data-aos="fade-up" data-aos-duration="2000" />
				<img src="/assets/img/expertise/expertise-5.jpg" className="img-5" alt="Not found!" data-aos="fade-up" data-aos-duration="2000" />
			</div>

			<div className="title-bio-list-container position-relative">
				<Row className="mb-4">
					<Col lg={7} xs={12}>
						<h2 data-aos="fade-up" data-aos-duration="2000">
							Transforming Discoveries
						</h2>
					</Col>
				</Row>
				<Row className={`bio-list-container`}>
					<Col lg={4} xs={12}>
						<div data-aos="fade-up" data-aos-duration="2000">
							<span className="sub-title">Our Bio</span>
							<span className="bio-subtile-line"></span>
							<p className="mt-4 text-white">
								Our scientific, pathology, and regulatory teams
								have the experience needed to propel novel drug
								discoveries and the development of companion
								diagnostics.
							</p>
						</div>
					</Col>
					<Col lg={4} xs={12} className="ms-md-4">
						<div
							className="bio-list"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<span className="sub-title">Expertise</span>
							<span className="bio-subtile-line"></span>
							<ul className="mt-4 text-white">
								<li className="bio-item">
									<span className="number">01</span>
									<span className="label">
										Hematopathology
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
								<li className="bio-item">
									<span className="number">02</span>
									<span className="label">
										Solid Tumor Pathology
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
								<li className="bio-item">
									<span className="number">03</span>
									<span className="label">
										Minimal Residual Disease (MRD)
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
								<li className="bio-item">
									<span className="number">04</span>
									<span className="label">
										Companion Diagnostics (CDx)
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
								<li className="bio-item">
									<span className="number">05</span>
									<span className="label">
										Next-Generation Sequencing (NGS)
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
								<li className="bio-item">
									<span className="number">06</span>
									<span className="label">
										Immuno-Oncology
									</span>
									<span className="icon">
										<svg
											width="17"
											height="16"
											viewBox="0 0 17 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											data-v-813f5b04=""
										>
											<path
												d="M2 7.67688L14.7728 7.67688"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>{" "}
											<path
												d="M9.20898 14.0632L14.9993 7.79036L9.20898 2.00002"
												stroke="white"
												strokeWidth="2.1288"
												strokeLinecap="round"
												strokeLinejoin="round"
												data-v-813f5b04=""
											></path>
										</svg>
									</span>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
}

export default ExpertiseBlock;
