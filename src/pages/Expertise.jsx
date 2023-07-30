import React from "react";
import Banner from "../components/common/Banner/Banner";
import Layout from "../Layout/Main/Layout";
import { Col, Container, Row } from "react-bootstrap";
import "../components/Hematopathology/Style.css";
import { ReadMoreButton } from "../components/common/ReadMoreButton/ReadMoreButton";
import TitleHeader from "../components/common/TitleHeader/TitleHeader";
import GradientBg from "../components/GradientBg/GradientBg";

function Expertise() {
	return (
		<>
			<GradientBg variant={5} />
			<Banner
				title="Advance Modelling One Day at a Time"
				video={
					"https://hematogenix.sfo3.cdn.digitaloceanspaces.com/Hematogenix/video/expertise/expertise-hd.mp4"
				}
				className={"advanced-modelling-hero"}
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
								Our cutting edge simulation and modelling team
								at Workflow 24 have the experience and tools
								that allow them to be highly responsive to the
								needs of our clients.
							</h3>
						</Col>
					</Row>
				</Container>

				{/* Hematopathology section */}
				<div className="bg-gray-pink">
					<div className="block-inner pt-5">
						<TitleHeader title={"Finite Element Analysis "} />
						<div className="content-text-part max-width">
							<Row className="align-items-center">
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="description mb-5">
										Advanced modelling and simulation using
										mathematical and computational
										techniques to create models that can
										simulate complex systems and processes.
										We create digital twinning and models
										that can be used to analyse and predict
										the behaviour of the system under
										different conditions, allowing for
										better decision-making and optimisation.
									</h3>
									<ReadMoreButton
										link={"/expertise/hematopathology"}
									/>
								</Col>
								<Col
									md={6}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="image-box">
										<img
											src="/assets/img/nanotechnology_7498596.png"
											alt="image"
										/>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Expertise;
