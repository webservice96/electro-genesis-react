import React from "react";
import Banner from "../components/common/Banner/Banner";
import Layout from "../Layout/Main/Layout";
import { Col, Container, Row } from "react-bootstrap";
import "../components/Hematopathology/Style.css";
import { ReadMoreButton } from "../components/common/ReadMoreButton/ReadMoreButton";
import TitleHeader from "../components/common/TitleHeader/TitleHeader";

function Expertise() {
	return (
		<>
			<Banner
				title="Advance Modelling One Day at a Time"
				video={
					"https://hematogenix.sfo3.cdn.digitaloceanspaces.com/Hematogenix/video/expertise/expertise-hd.mp4"
				}
			/>
			<Layout className="bg-white expertise-template">
				<Container className="">
					<Row className="py-5 mx-auto z-index">
						<Col
							md={8}
							lg={{ span: 8, offset: 2 }}
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h3 className="description expartise">
								Our scientific experts at Workflow 24 have the
								experience and tools that allow them to be
								highly responsive to the needs of our clients.
							</h3>
						</Col>
					</Row>
				</Container>

				{/* Hematopathology section */}
				<div className="bg-gray-pink">
					<div className="block-inner pt-5">
						<TitleHeader title={"Hematopathology"} />
						<div className="content-text-part max-width">
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="description mb-5">
										We provide specialized services and
										extensive experience to provide accurate
										diagnosis and monitoring of
										hematological disorders, including AML,
										CLL, MM, and others.
									</h3>
									<ReadMoreButton link={"/expertise/hematopathology"} />
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
						</div>
						<Row
							className="pagination mx-3 pb-3"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text ms-3">
									<span>Hematopathology</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				{/* solid tumor pathology section */}
				<div className="bg-gray-pink bg-gray-secondary-pink mt-2">
					<div className="block-inner pt-5">
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
									<h3 className="solidTitle mb-5">
										Our pathologists are world-renowned
										experts in multiple subspecialties.
									</h3>
									<ReadMoreButton link={"/expertise/solid-tumor-pathology"} />
								</Col>
							</Row>
						</div>
						<Row className="pagination" data-aos="fade-up"
							data-aos-duration="1000">
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
				</div>

				{/* Minimal Residual Disease section */}
				<div className="bg-gray-pink mt-2">
					<div className="block-inner pt-5">
						<TitleHeader title={"Minimal Residual Disease (MRD)"} />

						<div className="content-text-part max-width">
							{/* text and image row */}
							<Row>
								<Col
									md={5}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="Minimal_description">
										We are leaders in the field when it
										comes to monitoring measurable/minimal
										residual disease (MRD), which can be a
										deciding factor in a patient's treatment
										regimen.
									</h3>

									<ReadMoreButton link={"/expertise/minimal-residual-disease"} />
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
						<Row className="pagination" data-aos="fade-up"
							data-aos-duration="1000">
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text">
									<span>Minimal Residual Disease (MRD)</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				{/* Companion Diagnostics section */}
				<div className="bg-gray-pink bg-gray-secondary-pink mt-2">
					<div className="block-inner pt-5">
						<TitleHeader title={"Companion Diagnostics (CDx)"} />

						<div className="content-text-part max-width">
							{/* text and image row */}
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="Companion_description mb-5">
										Our mission is to advance the reach of
										precision medicine to all patients.
									</h3>
									<ReadMoreButton link={"/expertise/companion-diagnostics-cdx"} />
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
						</div>
						<Row className="pagination" data-aos="fade-up"
							data-aos-duration="1000">
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text">
									<span>Companion Diagnostics (CDx)</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				{/* Next-Generation Sequencing section */}
				<div className="bg-gray-pink mt-2">
					<div className="block-inner pt-5">
						<TitleHeader
							title={"Next-Generation Sequencing (NGS)"}
						/>

						<div className="content-text-part max-width">
							{/* text and image row */}
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="Companion_description mb-5">
										Along with our expert scientists and
										biostatisticians, our NGS services will
										assist you with better understanding the
										molecular characteristics of cancer
										cells.
									</h3>
									<ReadMoreButton link={"/expertise/next-generation-sequencing"} />
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
						<Row className="pagination" data-aos="fade-up"
							data-aos-duration="1000">
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text">
									<span>
										Next-Generation Sequencing (NGS)
									</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				{/* Immuno-Oncology section */}
				<div className="bg-gray-pink bg-gray-secondary-pink mt-2">
					<div className="block-inner pt-5">
						<TitleHeader title={"Immuno-Oncology"} />

						<div className="content-text-part max-width">
							{/* text and image row */}
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div className="image-box">
										<img
											src="/assets/img/expertise/immuno-oncology.png"
											alt="image"
										/>
									</div>
								</Col>
								<Col
									md={5}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<h3 className="solidTitle mb-5">
										As immuno-oncology ushers in a new era
										in the fight against cancer, we also
										strive to provide innovative services to
										help our clients better understand how
										the immune system can be channeled to
										eradicate cancer cells.
									</h3>
									<ReadMoreButton link={"/expertise/immuno-oncology"} />
								</Col>
							</Row>
						</div>
						<Row className="pagination" data-aos="fade-up"
							data-aos-duration="1000">
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text ms-3">
									<span>Immuno-Oncology</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Expertise;
