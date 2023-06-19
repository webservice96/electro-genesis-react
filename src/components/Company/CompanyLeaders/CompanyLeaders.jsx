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
					<Col className="col-md-6">
						<img
							src="https://cdn.sanity.io/images/6g05c3t1/production/6a8694c0d8d07f98ec384be66b6b51146c514c02-3840x5760.jpg"
							alt="..."
						/>
					</Col>
					<Col className="col-md-5 offset-md-1">
						<SectionNumber textNumber={`1`} className="mb-4" />

						<h1 className="mb-md-5">
							Industry <br /> Leaders
						</h1>

						<p>
							We are industry leaders in the field of integrated
							pathology services for drug development and
							immuno-oncology testing.
						</p>

						<p className="mb-md-5">
							Since 2007, we have been optimizing our testing
							methods to provide the highest levels of
							performance, quality, and sustainability.
						</p>

						<h3 className="fs-3 mb-md-5">Unbending...</h3>

						<p className="mb-md-5">
							Hematogenix® was established with a clear commitment
							— to put patient care above all. We are unbending
							when it comes to being patient centric. With no
							venture capitalists or shareholders to influence our
							decisions, we refuse to put finances above patients’
							medical care.
						</p>

						<h3 className="fs-3 mb-md-5">... Yet Agile</h3>

						<p>
							We also pride ourselves in being agile by providing
							high quality testing with rapid turnaround times. We
							are attentive to our clients’ needs: we are able to
							rapidly implement any necessary changes to testing
							services due to the diversity in equipment in our
							laboratories and our vast scientific expertise in
							multiple therapeutic fields.
						</p>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default CompanyLeaders;
