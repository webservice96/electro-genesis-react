import React from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";

function Services() {
	return (
		<section className="service-section">
			<Container className="mb-5">
				<div className="section-header position-relative">
					<span className="bottom-line"></span>
					<Row className="align-items-center" data-aos="fade-up" data-aos-duration="1000" >
						<Col lg={{ span: 9 }}>
							<h1 className="section-title" >Services</h1>
						</Col>
						<Col lg={3}>
							<Button
								link={`/service`}
								lavel={"Services"}
								icon={faArrowRight}
							/>
						</Col>
					</Row>
				</div>

				<div className="section-description">
					<Row data-aos="fade-up" data-aos-duration="1000">
						<Col lg={6} className="pe-5">
							<h3 className="subtitle">
								Our laboratories feature the most advanced
								instruments available.
							</h3>
						</Col>
						<Col lg={6} className="pe-5">
							<p className="description">
								We continuously invest in state-of-the-art
								technologies to provide the highest quality of
								data to our clients.
							</p>
						</Col>
					</Row>
				</div>
			</Container>

			<Container>
				<Row data-aos="fade-up" data-aos-duration="1000">
					<div className="col-md-6 ">
						<div className="d-flex flex-column w-75">
							<div className="col service-item">
								<div className="image">
									<img
										className="w-75"
										src="/assets/img/b3af76.png"
										alt="Not found!"
									/>
								</div>
								<div className="image-text">
									Pathology Services
								</div>
							</div>
							<div className="col service-item">
								<div className="image">
									<img
										className="w-75"
										src="/assets/img/2.png"
										alt="Not found!"
									/>
								</div>
								<div className="image-text">Test Offering</div>
							</div>
							<div className="col service-item">
								<div className="image">
									<img
										className="w-75"
										src="/assets/img/3.png"
										alt="Not found!"
									/>
								</div>
								<div className="image-text">
									Assay Development
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="service-right-text">
							<div className="title-text mb-5">
								<h3 className="subtitle">
									Propelling Cancer Diagnostics & Treatments
								</h3>
							</div>
							<ul className="underline-text">
								<li className="underline-item mb-3 pb-3">
									<div>CAP-Accredited</div>
									<img
										className="w-25"
										src="/assets/img/4.png"
										alt="Not found!"
									/>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>CLIA-Certified</div>
									<img
										className="w-25"
										src="/assets/img/5.png"
										alt="Not found!"
									/>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>GCP-Compliant</div>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>A Global Reference Laboratory</div>
								</li>
							</ul>
						</div>
					</div>
				</Row>
				<Row className="row-cols-lg-3 row-cols-1 g-3 py-5 w-75 m-auto" data-aos="fade-up" data-aos-duration="1000">
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/b054344c93541ede6e0f43da26466c0d31b37aee-89x136.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/39264784a180e9c8f1849d09f85f9cef422fc8de-85x98.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/87fd2d923b19cd52f0d1d953280214926b14012a-94x94.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
				</Row>
			</Container>
		</section>
	);
}

export default Services;
