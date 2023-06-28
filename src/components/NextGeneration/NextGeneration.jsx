import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function NextGeneration() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"Next-Generation Sequencing (NGS)"} />
				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="Companion_description">
								Along with our expert scientists and
								biostatisticians, our NGS services will assist
								you with better understanding the molecular
								characteristics of cancer cells.
							</h3>

							<p className="mt-5 pe-5">
								The use of NGS has ushered in a new era of
								precision oncology, and Workflow 24 employs this
								advanced technology to understand a tumor’s
								molecular characteristics in order to improve
								patient classification and predict patient
								response to targeted therapy. The scientific
								experts at Workflow 24 have validated multiple
								NGS assays to cover AML, MDS, and other
								hematological disorders. Additionally, the
								Workflow 24 Bioinformatics team has developed
								proprietary analysis pipelines to harness the
								vast data provided by NGS.
							</p>
						</Col>
						<Col
							md={6}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="Companion_image-box">
								<img
									src="/assets/img/expertise/next-gene-sequencing.png"
									alt="image"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col
							md={3}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="Companin_content-box mb-3">
								<h4 className="block-title">PLATFORMS</h4>
								<div className="List-box ">
									<li className="item">Illumina MiSeqDx</li>
									<li className="item">
										Illumina NextSeq 550Dx
									</li>
								</div>
							</div>
						</Col>
						<Col
							md={{ span: 3, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="Companin_content-box mb-3">
								<h4 className="block-title">ASSAYS</h4>
								<div className="List-box ">
									<li className="item">
										Myeloid Genotyping Panel
									</li>
									<li className="item">Myeloid MRD Panel</li>
									<li className="item">Custom Assays</li>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination m-0"
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
							<span>Next-Generation Sequencing (NGS)</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default NextGeneration;
