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
							<h1 className="main-pages-header-title">
								Workflow 24 our primary focus is efficiencies
								and business intelligence. We aim to squeeze the
								industrial lemon even more to eke out additional
								insights and marginal gains using our
								understanding of the industrial and
								manufacturing processes.
							</h1>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CompanyHeroText;
