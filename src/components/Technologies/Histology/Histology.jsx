import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function Histology() {
	return (
		<>
			<section className="block-inner Histology-section">
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
								The Histology Department at Hematogenix®
								provides a full range of anatomic pathology
								tests and services.
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
								and duplex IHC assays, Hematogenix® also
								provides expertise in multiplex IHC assays (up
								to 6 colors) utilizing our very own proprietary
								multiplex IHC assays. Histology testing and
								validation services at Hematogenix® are guided
								by our experienced pathologists in multiple
								subspecialties.
							</p>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Whether customized assay validation, clinical
								trials or diagnostic testing, our histology
								laboratories provide the same quality of
								expertise and testing at all of our global
								locations (US, EU, Asia-Pacific and China).
								Hematogenix® offers an array of validated
								IHC/ISH assays across multiple top-tier
								automated IHC staining platforms.
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

			<section className="block-inner Diseases-section">
				<TechnologiesTitle title="Diseases" />
				<div className="content-text-part max-width mb-5">
					{/* text and image row */}
					<Row>
						<Col md={{ span: 5, offset: 0 }}>
							<ul className="underline-text mt-5">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Solid Tumors</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Myeloma (MM)</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Lymphomas</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Melanoma</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Ovarian Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Head and Neck Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div>Triple Negative Breast Cancer</div>
								</li>
							</ul>
						</Col>
						<Col md={{ span: 5, offset: 1 }}>
							<ul className="underline-text mt-5">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Bladder Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Non-Small Cell Lung Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Small Cell Lung Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Pancreatic Cancer</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Diffuse Large B Cell Lymphoma</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Mesothelioma</div>
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
							<h3 className="flowcy_description">Ventana</h3>
						</Col>
						<Col md={8}>
							<Row>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/benchmark.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>BenchMark Ultra</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/benchmark.png"
											alt="image"
										/>
										<div className="image-caption Platforms-img-caption">
											<span>Discovery Ultra</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/nexus.png"
											alt="image"
										/>
										<div className="image-caption Platforms-img-caption">
											<span>Nexus Special Stainer</span>
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
							<h3 className="flowcy_description">Dako/Agilent</h3>
						</Col>
						<Col md={8}>
							<Row>
								<Col
									md={{ span: 4 }}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/dako-autostainer.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>
												Dako Autostainer Link 48
											</span>
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
							<h3 className="flowcy_description">Leica</h3>
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
											src="/assets/img/technology/leica-bond.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>
												Leica Bond III/Leica Bond III RX
											</span>
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
									<div>Chromogenic Immunohistochemistry</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Chromogenic In Situ Hybridization</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Special Stains</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>RNAscope ISH</div>
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
				<div className="content-text-part">
					<Row
						className="pb-5"
						data-aos="fade-right"
						data-aos-duration="2000"
					>
						<Col md={{ span: 4, offset: 0 }}>
							<p className="pt-5">
								Our scientific experts can assist you in
								selecting the most appropriate assay for your
								clinical trial. Additionally, our scientists can
								work with you to design and validate custom
								assays for your biomarker of interest.
							</p>
						</Col>
						<Col md={{ span: 6, offset: 1 }}>
							<Row
								className="list margin-top-lass"
								data-aos="fade-left"
								data-aos-duration="2000"
							>
								<Col xs={4} className="column item">
									<div className="inner">
										<span className="label">
											Fresh Tissue
										</span>
									</div>
								</Col>
								<Col xs={4} className="column item">
									<div className="inner">
										<span className="label">
											Formalin-Fixed, Paraffin-Embedded
											Tissue
										</span>
									</div>
								</Col>
								<Col xs={4} className="column item">
									<div className="inner">
										<span className="label">
											Unstained Slides
										</span>
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

export default Histology;
