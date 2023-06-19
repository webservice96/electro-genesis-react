import React from "react";
import "./Style.css";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import { Col, Row } from "react-bootstrap";

function CompanyCultureBlock() {
	return (
		<>
			<div className="company-culture container-fluid section-padding" id="culture">
				<Row>
					<Col md={4}>
						<div className="company-culture-header">
							<SectionNumber className="mb-3" textNumber={`05`} />
							<h2
								className="comp-team-headline"
								data-aos="fade-up"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								The elements that form our company
							</h2>
						</div>
					</Col>
				</Row>

				<Row className="culture-second-row">
					<Col md={4} className="p-0">
						<div className="culture-item">
							<span
								className="culture-name"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<span className="short-name">Qu</span>
								<span className="full-name">Quality</span>
							</span>
							<span
								className="culture-content"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<h3>We focus on quality</h3>
								<p>
									Our team of board-certified clinical,
									anatomic, and hematopathologists work in
									conjunction with top scientists from around
									the world to provide quality testing,
									consultation, and guidance for all aspects
									of the services we provide.
								</p>
							</span>
						</div>
					</Col>
					<Col md={4} className="p-0">
						<div className="culture-item">
							<span
								className="culture-name"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<span className="short-name">Sp</span>
								<span className="full-name">Specialized</span>
							</span>
							<span
								className="culture-content"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<h3>We are cancer specialists</h3>
								<p>
									Across all of our global locations, we have
									a strong and experienced team of
									pathologists, scientists, and project
									managers.
								</p>
							</span>
						</div>
					</Col>
					<Col md={4} className="p-0">
						<div className="culture-item">
							<span
								className="culture-name"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<span className="short-name">Pa</span>
								<span className="full-name">Patient</span>
							</span>
							<span
								className="culture-content"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<h3>We are patient-centric</h3>
								<p>
									Above all, patients come first. With no
									venture capitalists or shareholders to
									influence our decisions, we focus on what is
									best for the patient.
								</p>
							</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default CompanyCultureBlock;
