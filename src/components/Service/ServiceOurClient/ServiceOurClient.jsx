import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";

function ServiceOurClient() {
	return (
		<>
			<section className="our-claint position-relative">
				<Row className="py-5 mb-5">
					<Col
						sm={{ span: 6, offset: 3 }}
						md={{ span: 8, offset: 2 }}
					>
						<div className=" text-center">
							<div
								className="o-number mx-auto"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<span>02</span>
							</div>
							<h2
								className="grand_title"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								Our Clients
							</h2>
							<h6
								className="fs-6 w-75 mx-auto mt-2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								Workflow 24 globally provides services to
								industry, Manufacturing, and Renewables
								services.
							</h6>
						</div>
					</Col>
				</Row>

				<div className="percentage-boxes container-fluid mb-5">
					<Row className="justify-content-center align-content-center">
						<Col
							md={3}
							data-aos="fade-right"
							data-aos-duration="1000"
							data-aos-offset="400"
						>
							<div className="percentage-box d-flex justify-content-center align-items-center flex-column">
								<span className="percentage d-block">55%</span>
								<span className="percentage-text text-center d-block w-50">
									Renewables
								</span>
							</div>
						</Col>
						<Col md={3} data-aos="fade-up" data-aos-duration="1000">
							<div className="percentage-box d-flex justify-content-center align-items-center flex-column">
								<span className="percentage d-block">15%</span>
								<span className="percentage-text text-center d-block w-50">
									Biotech
								</span>
							</div>
						</Col>
						<Col
							md={3}
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<div className="percentage-box d-flex justify-content-center align-items-center flex-column">
								<span className="percentage d-block">15%</span>
								<span className="percentage-text text-center d-block w-50">
									Manufacturing
								</span>
							</div>
						</Col>
						<Col
							md={3}
							data-aos="fade-left"
							data-aos-duration="1000"
							data-aos-offset="400"
						>
							<div className="percentage-box d-flex justify-content-center align-items-center flex-column">
								<span className="percentage d-block">15%</span>
								<span className="percentage-text d-block text-center w-50">
									Forensics
								</span>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
}

export default ServiceOurClient;
