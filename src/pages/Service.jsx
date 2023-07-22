import React from "react";
import Layout from "../Layout/Main/Layout";
import Banner from "../components/common/Banner/Banner";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../Service_Clinical_Technology.css";
import { ReadMoreButton } from "../components/common/ReadMoreButton/ReadMoreButton";
import { Link } from "react-router-dom";
import ServiceOurClient from "../components/Service/ServiceOurClient/ServiceOurClient";
import ServiceCustomerStories from "../components/Service/ServiceCustomerStories/ServiceCustomerStories";
import ServiceStackingCard from "../components/Service/ServiceStackingCard/ServiceStackingCard";
import GradientBg from "../components/GradientBg/GradientBg";

function Service() {
	return (
		<>
			<GradientBg variant={3} />
			<Banner
				isBanner={true}
				title="Streamlined Workflow For Any Industry"
				video={"/assets/videos/services-hd.mp4"}
				className={`service-banner`}
			/>
			<Layout className="bg-white overflow-hidden service-template">
				<Container>
					<Row className="py-5" id="capabilities">
						<Col
							sm={{ span: 6, offset: 3 }}
							md={{ span: 8, offset: 2 }}
						>
							<div
								className=" text-center"
								data-aos="fade-up"
								data-aos-anchor-placement="top-bottom"
								data-aos-duration="2000"
							>
								<div className="o-number mx-auto">
									<span>01</span>
								</div>
								<h2 className="grand_title">
									A Patient & Client-Centric Laboratory
								</h2>
							</div>
						</Col>
					</Row>
					<Row
						className="py-5"
						data-aos="fade-up"
						data-aos-anchor-placement="top-bottom"
						data-aos-duration="2000"
					>
						<Col md={4}>
							<Card className="image_box text-center">
								<Card.Img
									variant="top"
									src="/assets/img/SALDATURA MIG 1.webp"
								/>
								<Card.Body>
									<Card.Title className="fs-3">
										Science
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="image_box text-center">
								<Card.Img
									variant="top"
									src="/assets/img/SALDATURA TIG-p-500.webp"
								/>
								<Card.Body>
									<Card.Title className="fs-3">
										Service
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="image_box text-center">
								<Card.Img
									variant="top"
									src="/assets/img/PIEGATURA 1-p-800.webp"
								/>
								<Card.Body>
									<Card.Title className="fs-3">
										Patient
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row
						className="py-5"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<Col
							sm={{ span: 6, offset: 3 }}
							md={{ span: 8, offset: 2 }}
						>
							<div className=" text-center">
								<h2 className="grand_title">
									Workflow 24 is proud to offer the highest
									standard of pharmaceutical research and
									diagnostic services.
								</h2>

								<p className="pt-5">
									Our laboratories are recognized as:
								</p>
							</div>
						</Col>
					</Row>
				</Container>
				{/* our client start */}
				<ServiceOurClient />

				{/* customer stories start */}
				<ServiceCustomerStories />
				{/* customer stories end */}

				<ServiceStackingCard />
			</Layout>
		</>
	);
}

export default Service;
