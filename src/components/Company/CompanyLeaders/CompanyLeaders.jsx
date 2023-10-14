import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Style.css";
import SectionNumber from "../../common/SectionNumber/SectionNumber";

function CompanyLeaders() {
	return (
		<>
			<div
				id="leaders"
				className="company-leaders-wrapper container-fluid section-space"
				data-aos="fade-right"
				data-aos-duration="2000"
			>
				<Row className="align-items-center">
					<Col className="col-md-6" xs={12}>
						{/* <img
							src="https://cdn.sanity.io/images/6g05c3t1/production/6a8694c0d8d07f98ec384be66b6b51146c514c02-3840x5760.jpg"
							alt="..."
						/> */}
						<video
							autoPlay
							muted="muted"
							loop="loop"
							className="industry-leaders-bg-video"
							playsInline
						>
							<source
								type="video/webm"
								src={`assets/videos/404-hd.webm`}
							/>
						</video>
					</Col>
					<Col className="col-md-5 offset-md-1" xs={12}>
						<SectionNumber textNumber={`1`} className="mb-4" />

						<h1 className="mb-md-5 main-pages-header-title">
							Industry <br /> Leaders
						</h1>
						<p className="mb-md-5">
							We are industry leaders in the field of integrated
							solutions. We focus our strengths to identify and
							suites that provide a unified control interface that
							connects inventory, shipping, warehousing, offshore,
							manufacturers, distributors, and end users, to a
							singular platform that drives real-time data
							analysis.
						</p>

						<h3 className="fs-3 mb-md-5">Unbending...</h3>

						<p className="mb-md-5">
							Workflow 24 was established with a clear commitment
							— to put client deliverables above all. We are
							unbending when it comes to being solution focused.
							No problem is too big. believes in developing
							innovative solutions to give Better business value
							to their business customers by exploring white
							market spaces to utilise the full potential of the
							IIOT infrastructure.
						</p>

						<h3 className="fs-3 mb-md-5">... Yet Agile</h3>

						<p>
							We pride ourselves in being agile by. believes in an
							agile bottom-up approach for an Organic Evolution,
							with exposure to first-hand business practices in
							every complex market condition. Transparency in
							transactions and building mutual trust in all
							relations to honour every commitment is the baseline
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default CompanyLeaders;
