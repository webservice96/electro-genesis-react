import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function Immunoassays() {
	return (
		<>
			<section className="block-inner bg-gray-pink  Flow-Cytometry-section">
				<TechnologiesTitle title="Immunoassays & Clinical Chemistry" />
				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={5}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="flowcy_image-box">
								<img
									src="/assets/img/technology/roche-cobas.png"
									alt="image"
								/>
								<div className="image-caption mb-1">
									<span className="pt-0">
										Roche Cobas 601
									</span>
								</div>
							</div>
						</Col>

						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">
								Fully Automated Systems Are Available to Support
								a Broad Range of Applications
							</h3>

							<p className="mt-5 pe-5">
								Workflow 24 offers an extensive test menu for
								the measurement of antibodies, proteins,
								cytokines/chemokines, metabolites, and other
								chemical compounds.
							</p>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.1</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Immunoassays & Clinical Chemistry</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default Immunoassays;
