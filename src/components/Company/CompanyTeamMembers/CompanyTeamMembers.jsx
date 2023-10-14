import React, { useRef } from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
	{
		photo: "/assets/img/our-story/member-1.jpeg",
		name: "Pete Preston",
		position: "CEO",
	},
	// {
	// 	photo: "/assets/img/our-story/member-3.jpeg",
	// 	name: "Naveen Reddy",
	// 	position: "Director of Operations",
	// },
	// {
	// 	photo: "/assets/img/our-story/member-2.jpg",
	// 	name: "Deena Tissera",
	// 	position: "Operations Manager",
	// },
];

function CompanyTeamMembers() {
	const barRef = useRef(null);
	return (
		<>
			<div className="company-team-members section-padding" id="team">
				<div className="company-team-header mb-md-5">
					<Container>
						<Row>
							<Col className="col-md-6">
								<SectionNumber
									className="mb-3"
									textNumber={`03`}
								/>
								<h2
									className="comp-team-headline"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Our team members are our greatest asset
								</h2>
							</Col>
						</Row>
					</Container>
				</div>

				<div
					className="company-team-slider"
					data-aos="flip-down"
					data-aos-duration="3000"
				>
					<Container>
						<div className="technology-slider mb-5">
							<Row className="justify-center">
								{teamMembers.map((member) => (
									<Col md={4} key={member.photo}>
										<div className="slide-item h-100">
											<div className="photo-container">
												<img
													src={member.photo}
													alt={member.name}
												/>
											</div>
											<div className="title-container">
												<h3>{member.name}</h3>
												<p>{member.position}</p>
											</div>
										</div>
									</Col>
								))}
							</Row>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default CompanyTeamMembers;
