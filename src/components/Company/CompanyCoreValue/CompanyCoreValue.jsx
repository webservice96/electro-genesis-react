import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";

const coreValues = [
	{
		title: "Service",
		desc: "At Workflow 24, our high-quality science is coupled with an exceptional customer experience. Our expert staff is known for their supportive and professional manner. It is our goal to go above and beyond your expectations to support your success.",
		photo: "https://hematogenix.com/_nuxt/image/9a0547.auto",
	},
	{
		title: "Accessibility",
		desc: "Our board-certified Pathologists and scientific team are always available for consultation to discuss your trial needs.",
		photo: "https://hematogenix.com/_nuxt/image/2f68f5.auto",
	},
	{
		title: "Personal",
		desc: "Workflow 24 looks beyond the boxes marked on a test request form. What we see each time is a patient waiting eagerly for a diagnostic decision to be made. We work to understand the differences each patient's disease presents and how our diagnosis will impact their treatment.",
		photo: "https://hematogenix.com/_nuxt/image/4e78dc.auto",
	},
];

function CompanyCoreValue() {
	return (
		<>
			<div className="company-core-value section-padding" id="mission">
				<Container className="company-core-container">
					<Row className="mb-md-5">
						<Col md={4}>
							<div className="company-culture-header">
								<SectionNumber
									className="mb-3"
									textNumber={`06`}
									mode="light"
								/>
								<h2
									className="comp-team-headline text-white"
									data-aos="fade-down"
									data-aos-easing="linear"
									data-aos-duration="1000"
								>
									Our core values
								</h2>
							</div>
						</Col>
					</Row>

					<CardGroup>
						{coreValues.map((value) => (
							<Card
								key={value.title}
								data-aos="fade-down"
								data-aos-easing="linear"
								data-aos-duration="1000"
							>
								<Card.Img variant="top" src={value.photo} />
								<Card.Body>
									<Card.Title as={"h3"}>
										{value.title}
									</Card.Title>
									<Card.Text>{value.desc}</Card.Text>
								</Card.Body>
							</Card>
						))}
					</CardGroup>
				</Container>
			</div>
		</>
	);
}

export default CompanyCoreValue;
