import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function Hematopathology() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"Hematopathology"} />

				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="description">
								We provide specialized services and extensive
								experience to provide accurate diagnosis and
								monitoring of hematological disorders, including
								AML, CLL, MM, and others.
							</h3>
							<p className="ps-2 mt-5">
								Our AML MRD flow assay is in alignment with the
								guidelines set forth by the European LeukemiaNet
								MRD Working party. We have also validated a
								highly-sensitive, comprehensive, 73-gene myeloid
								panel for AML MRD detection by NGS. These assays
								are available at all of our locations (US, EU,
								Asia-Pacific, and China) and have been used for
								multiple phase 3 registrational clinical trials,
								with single-subject reports provided to the
								sites to support treatment decisions.
							</p>
						</Col>
						<Col
							md={6}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-box">
								<img
									src="/assets/img/expertise/hematopathology.png"
									alt="image"
								/>
							</div>
						</Col>
					</Row>
					{/* only 2 column text row */}
				</div>
			</div>
		</>
	);
}

export default Hematopathology;
