import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function MolecularGenetic() {
	return (
		<>
			<section className="block-inner bg-gray-pink Flow-Cytometry-section">
				<TechnologiesTitle title="Molecular Genetics" />
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
									src="/assets/img/technology/Illumina.png"
									alt="image"
								/>
								<div className="image-caption mb-1">
									<span className="pt-5">
										Illumina NextSeq 550Dx
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
								The Molecular Genetics Department at Workflow 24
								offers a vast array of molecular diagnostic
								tests to facilitate patient care.
							</h3>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Our molecular assays are an excellent choice to
								stratify patients and identify those who are
								likely to benefit from certain drugs in order to
								improve patient outcome and avoid unnecessary
								risks and complications.
							</p>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Our molecular assays are validated in-house to
								ensure the highest level of quality and superb
								patient outcome. We offer a variety of tests
								across many platforms including many FDA
								approved companion diagnostic assays. Our
								scientific experts can assist you in selecting
								the most appropriate assay for your clinical
								trial. Additionally, our scientists can work
								with you to design and validate custom assays
								for your biomarker of interest.
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
							<span>Molecular Genetics</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default MolecularGenetic;
