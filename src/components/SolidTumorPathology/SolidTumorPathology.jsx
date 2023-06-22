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
					{/* only 2 column text row */}
					<Row data-aos="fade-right" data-aos-duration="2000">
						<div className="content-box">
							<h4 className="block-title">
								OUR PATHOLOGISTS ARE:
							</h4>
							<ul className="ourPatho_list">
								<li className="item">
									<span className="name">
										Available to serve as Principal
										Investigators and Consultants
									</span>
								</li>
								<li className="item">
									<span className="name">
										Employed full-time and at all of our
										locations
									</span>
								</li>
								<li className="item">
									<span className="name">
										Experienced in performing Phase 3
										clinical trials for bladder, breast,
										colon, head &amp; neck, lung, melanoma,
										ovarian, and other tumors.
									</span>
								</li>
								<li className="item">
									<span className="name">
										Prepared to excel in inter-laboratory
										reducibility studies (ILRs)
									</span>
								</li>
							</ul>
						</div>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-left"
					data-aos-easing="linear"
					data-aos-duration="1000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text ms-3">
							<span>Solid Tumor Pathology</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default SolidTumorPathology;
