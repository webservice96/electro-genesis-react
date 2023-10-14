import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";

const coreValues = [
	{
		title: "Service",
		desc: "At Workflow 24, our quality is coupled with an exceptional customer experience. Our expert staff is known for their supportive and professional manner. ",
		photo: "/assets/img/our-story/Service-44984451.jpeg",
	},
	{
		title: "Accessible",
		desc: "We strive to be always available to respond to all your queries and questions promptly and efficiently. It is our goal to go above and beyond your expectations to support your success.",
		photo: "/assets/img/our-story/Accessible-4646464.jpeg",
	},
	{
		title: "Personal",
		desc: "Workflow 24 looks beyond the expected. We work to understand the differences individual clients and deliver tailor-made and streamlined solutions.",
		photo: "/assets/img/our-story/Personal-4164646.jpeg",
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
								className="core-vl-crd"
							>
								<Card.Img
									variant="top"
									src={value.photo}
									className="core-value-crd-img"
								/>
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
