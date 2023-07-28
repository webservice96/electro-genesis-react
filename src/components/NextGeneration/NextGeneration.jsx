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
				</div>
			</div>
		</>
	);
}

export default NextGeneration;
