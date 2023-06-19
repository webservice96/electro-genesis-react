import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";

function CompanyContact() {
	return (
		<>
			<div className="company-contact section-padding">
				<Container>
					<Row className="justify-content-center">
						<Col md={{ span: 7 }} className="text-center">
							<h3
								className="mb-2"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								Do you want to be considered for future
								openings?
							</h3>
							<p
								className="px-5"
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								If you believe that you have what it takes to be
								part of a highly successful team and you share
								our commitment to improve patient care, please
								send us your resume.
							</p>

							<div
								className="company-contact-btn d-flex justify-content-center mt-5"
								data-aos="fade-up"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<Button
									link={`mailto:careers@hematogenix.com`}
									lavel={"Send us your resume"}
									icon={faArrowRight}
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default CompanyContact;
