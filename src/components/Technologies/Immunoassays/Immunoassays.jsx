import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function Immunoassays() {
	return (
		<>
			<section className="block-inner Flow-Cytometry-section">
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
								Hematogenix® offers an extensive test menu for
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

			<section className="block-inner Diseases-section">
				<TechnologiesTitle title="Diseases" />
				<div className="content-text-part max-width mb-5">
					{/* text and image row */}
					<Row>
						<Col md={{ span: 4, offset: 0 }}>
							<ul className="underline-text mt-5">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Leukemias & Lymphomas</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Multiple Myeloma</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>COVID-19</div>
								</li>
							</ul>
						</Col>
						<Col md={{ span: 7, offset: 1 }}>
							<div
								className="flowcy_image-box margin-top-lass"
								data-aos="fade-left"
								data-aos-duration="2000"
							>
								<img
									src="/assets/img/technology/lab-test-moluc.png"
									alt="image"
								/>
							</div>
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
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Diseases</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner platform-section">
				<TechnologiesTitle title="Platforms" />
				<div className="content-text-part max-width">
					<Row className="pb-5 borderd border-bottom border-1 border-dark">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">Roche</h3>
						</Col>
						<Col md={8}>
							<Row>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/roche-cobas.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Roche Cobas 601</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/roche-cobas-2.png"
											alt="image"
										/>
										<div className="image-caption Platforms-img-caption">
											<span>Roche Cobas e411</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="py-5 borderd border-bottom border-1 border-dark">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">MSD</h3>
						</Col>
						<Col
							md={8}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<Row>
								<Col md={{ span: 4 }}>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/meso-quick.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>MESO QuickPlex SQ 120</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="py-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">Sebia</h3>
						</Col>
						<Col
							md={8}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<Row>
								<Col md={{ span: 4 }}>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/sebia.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Sebia CAPILLARYS 3</span>
										</div>
									</div>
								</Col>
							</Row>
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
							<span>1.3</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Platforms</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Assays-section">
				<TechnologiesTitle title="Assays" />
				<div className="content-text-part max-width">
					<Row className="pb-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<p>
								Our scientific experts can assist you in
								selecting the most appropriate assay for your
								clinical trial. Additionally, our scientists can
								work with you to design and validate custom
								assays for your biomarker of interest.
							</p>
						</Col>
						<Col md={{ span: 4, offset: 3 }}>
							<ul className="underline-text margin-top-lass">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>
										Quantitative and Qualitative
										Immunological Analysis (100+ Assays)
									</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>
										High-Sensitivity, Multiplex
										Cytokine/Chemokine Assays
									</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>
										Protein Electrophoresis & Immunofixation
									</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Clinical Chemistry Assays</div>
								</li>
							</ul>
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
							<span>1.4</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Assays</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Sample-type-section">
				<TechnologiesTitle title="Sample Types" />
				<div className="content-text-part max-width">
					<Row className="pb-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<p className="pt-5">
								Our scientific experts can assist you in
								selecting the most appropriate assay for your
								clinical trial. Additionally, our scientists can
								work with you to design and validate custom
								assays for your biomarker of interest.
							</p>
						</Col>
						<Col
							md={{ span: 4, offset: 2 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<Row className="list margin-top-lass">
								<Col xs={6} className="column item">
									<div className="inner">
										<span className="label">
											Peripheral Blood
										</span>
									</div>
								</Col>
								<Col xs={6} className="column item">
									<div className="inner">
										<span className="label">Serum</span>
									</div>
								</Col>
								<Col xs={6} className="column item">
									<div className="inner">
										<span className="label">Plasma</span>
									</div>
								</Col>
								<Col xs={6} className="column item">
									<div className="inner">
										<span className="label">Urine</span>
									</div>
								</Col>
							</Row>
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
							<span>1.5</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Sample Types</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default Immunoassays;
