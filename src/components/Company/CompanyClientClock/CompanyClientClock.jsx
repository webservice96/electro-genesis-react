import React from "react";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import { Col, Row } from "react-bootstrap";
import "./Style.css";

function CompanyClientClock() {
	return (
		<div className="section-space">
			<div className="company-clients-block position-relative mb-md-5">
				<div
					className="company-client-header text-center"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1000"
				>
					<Row className="justify-content-center">
						<Col className="col-md-5 text-center">
							<SectionNumber
								textNumber={`02`}
								className="m-auto"
							/>
							<h2>Our clients are global and so are we</h2>
						</Col>
					</Row>
				</div>

				<div
					className="company-map"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="1000"
				>
					<img src="/assets/img/clients-map.png" alt="..." />
				</div>
			</div>

			<div
				className="company-clients-detail"
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1000"
			>
				<Row>
					<Col className="col-md-6 offset-md-3">
						<p>
							The demand on the pharmaceutical industry to develop
							drugs at a rapid pace continues to increase. It is
							our vision to continue to support your efforts by
							providing access to top scientists and high-quality
							testing services at each of our facilities around
							the world. Workflow 24 has fully staffed
							laboratories in North America, Europe, China and
							Asia-Pacific that are ready to serve you.
						</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default CompanyClientClock;
