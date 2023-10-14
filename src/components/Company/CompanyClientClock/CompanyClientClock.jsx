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
		</div>
	);
}

export default CompanyClientClock;
