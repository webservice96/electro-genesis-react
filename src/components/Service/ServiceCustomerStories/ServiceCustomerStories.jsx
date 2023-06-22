import React from "react";
import "./Style.css";
import { Card, Col, Row } from "react-bootstrap";

function ServiceCustomerStories() {
	return (
		<>
			<div className="customer-stories section-padding">
				<div className="customer-stories-container container-fluid">
					<div
						className="customer-stories-header"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1000"
					>
						<h2 className="mb-5 pb-3 d-inline-block">
							Customer Stories
						</h2>
					</div>

					<div
						className="stories"
						data-aos="flip-down"
						data-aos-duration="2000"
					>
						<Row>
							<Col md={4} className="mobile-mb-20">
								<Card>
									<div className="story-item">
										<span className="story-excerpt">
											“We greatly appreciate all the hard
											work from the Hematogenix team!
											Everything for our trial was handled
											with ease. Would definitely use them
											again for other studies. ”
										</span>

										<span className="story-name-location">
											<span className="name">
												Translational Lead
											</span>
											<span className="location">
												Pharma Company
											</span>
										</span>
									</div>
								</Card>
							</Col>
							<Col md={4} className="mobile-mb-20">
								<Card>
									<div className="story-item">
										<span className="story-excerpt">
											“I couldn't be more satisfied! GREAT
											JOB! I look forward to working
											together on the next project.”
										</span>

										<span className="story-name-location">
											<span className="name">
												Director
											</span>
											<span className="location">
												Clinical Development & Biomarker
												Research, Pharma
											</span>
										</span>
									</div>
								</Card>
							</Col>
							<Col md={4} className="mobile-mb-20">
								<Card>
									<div className="story-item">
										<span className="story-excerpt">
											“The quality of the data from your
											site was excellent.”
										</span>

										<span className="story-name-location">
											<span className="name">
												Lead Clinical Scientist
											</span>
											<span className="location">
												Companion Diagnostic Company
											</span>
										</span>
									</div>
								</Card>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceCustomerStories;
