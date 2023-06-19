import React, { useRef } from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
	{
		photo: "https://hematogenix.com/_nuxt/image/2b9ab8.auto",
		name: "Dr. Hytham Al-Masri",
		position: "President & CEO",
	},
	{
		photo: "https://hematogenix.com/_nuxt/image/6b6b1e.auto",
		name: "Renee Porras",
		position: "Vice President of Global Operations",
	},
	{
		photo: "https://hematogenix.com/_nuxt/image/1b0d93.auto",
		name: "Mahdy Amine",
		position: "SVP, General Counsel",
	},
	{
		photo: "https://hematogenix.com/_nuxt/image/364d42.auto",
		name: "Bridgette Bonilla",
		position: "Vice President of Quality Assurance",
	},
	{
		photo: "https://hematogenix.com/_nuxt/image/93c8bd.auto",
		name: "Michael Salerno",
		position: "Director of Operations",
	},
	{
		photo: "https://hematogenix.com/_nuxt/image/611b72.auto",
		name: "Hikmat Daghestani",
		position: "Senior Scientific Director",
	},
];

function CompanyTeamMembers() {
	const barRef = useRef(null);
	return (
		<>
			<div className="company-team-members section-padding">
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
					<Splide
						hasTrack={false}
						options={{
							type: "loop",
							perPage: 4,
							perMove: 1,
							autoplay: false,
							pagination: false,
							arrows: true,
						}}
						onMove={(splide) => {
							var end = splide.Components.Controller.getEnd() + 1;
							var rate = Math.min((splide.index + 1) / end, 1);
							barRef.current.style.width =
								String(100 * rate) + "%";
						}}
					>
						<Container>
							<div className="technology-slider-arrow">
								<div className="splide__arrows">
									<button className="splide__arrow splide__arrow--prev">
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
									<button className="splide__arrow splide__arrow--next">
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
								</div>
							</div>
						</Container>

						<div className="technology-slider mb-5">
							<SplideTrack>
								{teamMembers.map((member) => (
									<SplideSlide key={member.name}>
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
									</SplideSlide>
								))}
							</SplideTrack>
						</div>

						<Container>
							<div className="technology-slider-progress">
								<div
									className="technology-slider-progress-bar"
									ref={barRef}
								></div>
							</div>
						</Container>
					</Splide>
				</div>
			</div>
		</>
	);
}

export default CompanyTeamMembers;
