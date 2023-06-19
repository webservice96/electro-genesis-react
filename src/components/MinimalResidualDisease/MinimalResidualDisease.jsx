import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function MinimalResidualDisease() {
	return (
		<>
			<div className="block-inner">
				<TitleHeader title={"Minimal Residual Disease (MRD)"} />
				<div className="content-text-part mb-4">
					{/* text and image row */}
					<Row>
						<Col
							md={5}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="Minimal_description">
								We are leaders in the field when it comes to
								monitoring measurable/minimal residual disease
								(MRD), which can be a deciding factor in a
								patient's treatment regimen.
							</h3>

							<p className="Minimal_paragrap mt-5 pe-5">
								Multiple studies have demonstrated that patients
								with no MRD detected have better overall
								survival (OS) and progression-free survival
								(PFS) rates, when compared to patients with
								detected MRD. MRD detection requires highly
								sensitive methods to assess these hidden cells.
								Hematogenix has validated multiple and
								complementary MRD assays by NGS and Flow
								Cytometry for AML and B-cell malignancies (e.g.,
								CLL, MM, and others).
							</p>
						</Col>
						<Col
							md={7}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-box">
								<img
									src="/assets/img/expertise/minimal-residual-disease.png"
									alt="image"
								/>
							</div>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-right"
					data-aos-duration="2000"
				>
					<Col md={2} className="p-0">
						<div className="number">
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8} className="p-0">
						<div className="text">
							<span>Minimal Residual Disease (MRD)</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default MinimalResidualDisease;
