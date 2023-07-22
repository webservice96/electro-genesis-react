import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function NextPage() {
	return (
		<>
			<div className="row justify-content-center align-items-center next-page-wrapper">
				<div className="next-page-img-wrapper">
					<img
						src="/assets/img/footer-next-page/services-footer-img.png"
						alt="Next Page Preview"
					/>
				</div>
				<div className="next-page-container text-center">
					<Row>
						<Col>
							<div className="arrow-down-container">
								<Link to="/business-intel">
									<button className="big-circle-btn next-page-btn">
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
													d="M1 14L9 22L17 14"
													stroke="white"
													strokeWidth="1.5"
												></path>
												<path
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
													d="M1 14L9 22L17 14"
													stroke="#C3D1AB"
													strokeWidth="1.5"
												></path>
												<path
													d="M9 0L9 21"
													stroke="#C3D1AB"
													strokeWidth="1.5"
												></path>
											</svg>
										</span>
									</button>
								</Link>
							</div>

							<h2>
								Our <strong>Services</strong>
							</h2>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default NextPage;
