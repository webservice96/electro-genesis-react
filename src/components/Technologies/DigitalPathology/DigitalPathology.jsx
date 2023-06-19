import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function DigitalPathology() {
	return (
		<>
			<section className="block-inner Flow-Cytometry-section">
				<TechnologiesTitle title="Digital Pathology" />
				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row className="justifiy-content-center">
						<Col
							md={5}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="flowcy_image-box">
								<img
									src="/assets/img/technology/digital-pathology.png"
									alt="image"
								/>
								<div className="image-caption mb-1">
									<span className="pt-0">
										Digital Pathology
									</span>
								</div>
							</div>
						</Col>

						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<p className=" pe-5">
								Our expert knowledge and global thinking
								propelled us to adopt Digital Pathology, which
								integrates efficient high throughput platforms
								and quality by design procedures. We utilizes
								smart systems that are empowered by a
								sophisticated in-house IT infrastructure to
								manage the images, and automate the processes of
								organizing, archiving, and retrieving the
								slides. We offer a flexible and broad range of
								digital pathology services, including slide
								scanning (with 20x and 40x magnification),
								archiving, and storage.
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
							<span>Digital Pathology</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Analysis-section">
				<TechnologiesTitle title="Image Analysis" />
				<div className="content-text-part max-width mb-5">
					{/* text and image row */}
					<Row>
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<p>
								Hematogenix employs the latest technologies in
								machine learning and computerized algorithms to
								navigate the complex interpretation of digital
								images.
							</p>
							<p>
								The goal is to be a leader in this new era of
								modern pathology practice and enable our
								partners to utilize these technologies in
								gathering and analyzing biomarker data from
								tumor tissue.
							</p>
						</Col>
						<Col
							md={{ span: 7, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="flowcy_image-box margin-top-lass">
								<img
									src="/assets/img/technology/analysis.png"
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
							<span>Image Analysis</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default DigitalPathology;
