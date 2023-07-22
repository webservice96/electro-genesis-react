import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function Histology() {
	return (
		<>
			<section className="block-inner bg-gray-pink bg-gray-secondary-pink Histology-section">
				<TechnologiesTitle title="Histology / IHC" />
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
									src="/assets/img/technology/benchmark.png"
									alt="image"
								/>
								<div className="image-caption mb-1">
									<span className="pt-5">
										BenchMark Ultra
									</span>
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
								The Histology Department at Workflow 24 provides
								a full range of anatomic pathology tests and
								services.
							</h3>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Specimens received are processed, sectioned, and
								tested by IHC/ISH utilizing techniques
								appropriate to the type of tissue and
								investigation required. In addition to routine
								testing of commonly used biomarkers for single
								and duplex IHC assays, Workflow 24 also provides
								expertise in multiplex IHC assays (up to 6
								colors) utilizing our very own proprietary
								multiplex IHC assays. Histology testing and
								validation services at Workflow 24 are guided by
								our experienced pathologists in multiple
								subspecialties.
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
							<span>Histology / IHC</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default Histology;
