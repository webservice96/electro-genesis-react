import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function DigitalPathology() {
	return (
		<>
			<section className="block-inner bg-gray-pink">
				<TechnologiesTitle title="Flow Cytometry" />

				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={5}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div
								className="flowcy_image-box"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<img
									src="/assets/img/technology/techno-1.png"
									alt="image"
								/>
								<div className="image-caption">
									<span>Navios EX (10 color)</span>
								</div>
							</div>
						</Col>

						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">
								Harnessing Multi-Parameter Flow Cytometry
								Capabilities for In-Depth Characterization of
								Cellular Biomarkers
							</h3>

							<p className="mt-5 pe-5">
								Workflow 24 offers the same flow cytometry
								capabilities at all of our locations. Our assays
								are harmonized by using the same platforms,
								cytometer settings, and calibration standards
								throughout our global laboratories. Workflow 24
								also employs either automated liquid handling
								systems or dried-down formats for precise and
								reproducible antibody mixtures in our flow
								cytometry assays.
							</p>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
}

export default DigitalPathology;
