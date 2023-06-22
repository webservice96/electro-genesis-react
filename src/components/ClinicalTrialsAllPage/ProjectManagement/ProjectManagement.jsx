import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function ProjectManagement() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"PROJECT MANAGEMENT"} />

				<div className="mt-4">
					<Row>
						<Col md={{ span: 6 }}>
							<div className="text-content pe-0 ms-3">
								<h2
									className="mb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									At Hematogenix®, Project Managers are highly
									skilled team members that employ best
									practices from past experiences.
								</h2>

								<p data-aos="fade-up" data-aos-duration="2000">
									Our Project Managers manage a project from
									conception to completion, assembling teams,
									assigning tasks and determining target
									completion dates for the project's different
									stages. We know it is your goal to make sure
									the drug or product you are taking to market
									is both safe and effective. Our Project
									Managers keep your need front and center
									through effective communications about each
									step of our collaborative project.
								</p>
								<p
									className="mt-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Our seasoned project managers have direct
									experience with US and global clinical
									trials. The Project Manager will serve as a
									critical resource and your primary point of
									contact and is also responsible for handling
									the queries from clinical sites, CROs and
									third-party laboratories.
								</p>
								<p
									className="mt-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									The Project Managers at Hematogenix®
									understand the management of tissue,
									development of molecular assays and the
									logistics of drug development. Our team
									monitors timelines, respects deadlines and
									pro-actively communicates emerging
									challenges. The Project Managers have direct
									experience with US and global clinical
									trials. The Project Managers will serve as
									your point of contact and are also
									responsible for handling the queries from
									clinical sites, CROs and third-party
									laboratories.
								</p>
							</div>
						</Col>
						<Col
							md={{ span: 5, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-div mb-3 ">
								<img
									className="rounded-3 w-md-75 w-lg-75 mx-auto"
									src="/assets/img/clinical/lady-lab.png"
									alt="madecin test"
								/>
							</div>
						</Col>
					</Row>

					<Row className="my-5">
						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title-text my-md-5 my-lg-5">
								We excel on morphological and molecular assays
								development.
							</h2>
						</Col>
					</Row>
					<Row>
						<Col
							md={{ span: 4, offset: 2 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="image-div mb-3 ms-3">
								<img
									className="rounded-3 w-100 mx-auto"
									src="/assets/img/clinical/lab-pan.png"
									alt="madecin test"
								/>
							</div>
						</Col>
						<Col md={{ span: 4, offset: 1 }}>
							<div className="text-content pe-0 ms-3">
								<p
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									Our Study Director has addressed challenging
									parameters stemming from pre-analytical
									conditions through complex image
									analysis-based algorithms. Our Study
									Director's understanding of multiple
									automated technologies and digital platforms
									are incorporated into the Scope of Work
									creation for each project.
								</p>
								<p
									className="mt-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									Both the Study Director and Project Manager
									will participate in interim updates and
									final summary presentations.
								</p>
								<p
									className="mt-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									Hematogenix® board-certified pathologists
									are full-time employees. A Principal
									Pathologist and a backup pathologist will be
									assigned to your project.
								</p>
								<p
									className="mt-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									A Research Pathologist may also act as a
									consultant through the project. The
									Principal Pathologist will provide the reads
									for your project. Both the Principal
									Pathologist and the backup pathologist will
									be trained on the interpretation needs of
									the project. As required, these pathologists
									are available for consult and can
									participate in the interim updates and final
									presentations.
								</p>
								<p
									className="mt-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									The Hematogenix® Scientific Team is well
									published in biomarker research and will
									accommodate requests to support and
									contribute to manuscripts and conference
									presentations.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default ProjectManagement;
