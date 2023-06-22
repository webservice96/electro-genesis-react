import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Style.css";

function CompanyHeroText() {
	return (
		<>
			<Container className="section-space" id="about">
				<Row>
					<Col className="col-md-10 offset-md-1 offset-lg-1">
						<div
							className="company-hero-text position-relative pt-4"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h1>
								Hematogenix® provides reference laboratory
								services in North America, Europe, China, and
								Asia-Pacific. We assist our clients with finding
								new and more effective ways to diagnose, treat,
								or prevent cancer.
							</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CompanyHeroText;
