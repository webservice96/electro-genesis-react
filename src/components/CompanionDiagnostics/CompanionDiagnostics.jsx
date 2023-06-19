import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import { BorderAnimation } from "../common/BorderAnimation/BorderAnimation";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function CompanionDiagnostics() {
	BorderAnimation();

	return (
		<>
			<div className="block-inner">
				<TitleHeader title={"Companion Diagnostics (CDx)"} />
				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="Companion_description">
								Our mission is to advance the reach of precision
								medicine to all patients.
							</h3>

							<p className="mt-5 pe-5">
								We have extensive experience in developing
								Companion Diagnostics (CDx) through our
								partnerships with pharmaceutical sponsors and
								diagnostic manufacturers. We work closely with
								our partners from early stages of assay
								development to CDx commercialization. In
								addition, we offer multiple CDx assays utilizing
								our exceptional proficiency in the areas of
								immunohistochemistry and molecular genetics.
							</p>
						</Col>
						<Col
							md={6}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="Companion_image-box">
								<img
									src="/assets/img/expertise/companion-diagnostics.png"
									alt="image"
								/>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={3} data-aos="fade-up" data-aos-duration="2000">
							<div className="Companin_content-box mb-3">
								<h4 className="block-title">ASSAYS</h4>
								<div className="List-box ">
									<li className="item">
										FDA-Approved CDx Assays
									</li>
									<li className="item">
										Custom Assays and Processes for CDx
										Development
									</li>
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
					<Col md={2} className="p-0">
						<div className="number">
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8} className="p-0">
						<div className="text">
							<span>Companion Diagnostics (CDx)</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default CompanionDiagnostics;
