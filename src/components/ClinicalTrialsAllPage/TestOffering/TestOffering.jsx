import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function TestOffering() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"TEST OFFERING"} />
				<div className="max-width">
					<Row data-aos="fade-right" data-aos-duration="2000">
						<div className="description-title">
							<h2 className="title">Biomarkers</h2>
						</div>
					</Row>
					<Row>
						<Col md={6}>
							<div
								className="text-content"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<p>
									Workflow 24 is at the forefront of biomarker
									assay development, from early exploratory
									markers to personalized markers for
									companion diagnostic testing. The scientific
									team has extensive experience evaluating
									custom biomarkers for different disease
									indications and sample types, while
									utilizing multiple technologies and
									methodologies.
								</p>
							</div>
						</Col>
						<Col
							md={6}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-div w-75 mb-3">
								<img
									className="rounded-3 w-100"
									src="/assets/img/clinical/madecin.png"
									alt="madecin test"
								/>
							</div>
						</Col>
					</Row>
				</div>

				<Row
					className="my-5"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="1000"
				>
					<div className="test-offer-full-width-img "></div>
				</Row>

				<div>
					<Row>
						<div
							className="description-title mb-3"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<h2 className="title">Digital Pathology</h2>
						</div>
					</Row>
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<div className="image-div w-75 mb-3">
								<img
									className="rounded-3 w-100"
									src="/assets/img/clinical/degital-pathology.png"
									alt="degital-pathology"
								/>
							</div>
						</Col>

						<Col
							md={6}
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<div className="text-content">
								<h1 className="sub-title">
									We believe that digital pathology is the
									future of pathology.
								</h1>
								<p>
									Our expert knowledge and global thinking
									propelled us to adopt Digital Pathology,
									which integrates efficient high throughput
									platforms and quality by design procedures.
									We utilizes smart systems that are empowered
									by a sophisticated in-house IT
									infrastructure to manage the images, and
									automate the processes of organizing,
									archiving, and retrieving the slides. We
									offer a flexible and broad range of digital
									pathology services, including slide scanning
									(with 20x and 40x magnification), archiving,
									and storage.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default TestOffering;
