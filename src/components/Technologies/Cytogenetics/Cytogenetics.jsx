import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function Cytogenetics() {
	return (
		<>
			<section className="block-inner bg-gray-pink Cytogenetics-section">
				<TechnologiesTitle title="Cytogenetics / FISH" />
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
									src="/assets/img/technology/cytogenetic-1.png"
									alt="image"
								/>
								<div className="image-caption benner-caption">
									<span>Cytovysion-Review-Stations</span>
								</div>
							</div>
						</Col>

						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3
								className="flowcy_description"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Workflow 24 offers routine analysis of
								chromosomes and a wide variety of fluorescent in
								situ hybridization (FISH) probes.
							</h3>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Workflow 24 uses a variety of commercially
								available RUO and IVD FISH probes. The
								Cytogenetics Department utilizes automation for
								processing and analysis workflow to increase
								service efficiency. As biomarkers are discovered
								and targeted therapies are developed, results
								from testing performed in cytogenetics has
								become an indispensable tool for diagnosis,
								treatment and management.
							</p>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
}

export default Cytogenetics;
