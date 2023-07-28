import React from "react";
import "./SolidTumorStyle.css";
import { Col, Row } from "react-bootstrap";
import { BorderAnimation } from "../common/BorderAnimation/BorderAnimation";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function SolidTumorPathology() {
	BorderAnimation();
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"Solid Tumor Pathology"} />

				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={7}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="SolidTumor-image-box">
								<img
									src="/assets/img/expertise/solid-tumor-pathology.png"
									alt="image"
								/>
							</div>
						</Col>
						<Col
							md={5}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3 className="solidTitle">
								Our pathologists are world-renowned experts in
								multiple subspecialties.
							</h3>
							<ul className="list ul-box">
								<li className="item">
									<span className="name">
										Anatomic Pathology
									</span>
								</li>
								<li className="item">
									<span className="name">
										Clinical Pathology
									</span>
								</li>
								<li className="item">
									<span className="name">Cytopathology</span>
								</li>
								<li className="item">
									<span className="name">
										Dermatopathology
									</span>
								</li>
								<li className="item">
									<span className="name">
										GI and GU Pathology
									</span>
								</li>
								<li className="item">
									<span className="name">
										Hematopathology
									</span>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default SolidTumorPathology;
