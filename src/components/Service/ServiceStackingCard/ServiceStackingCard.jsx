import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { ReadMoreButton } from "../../common/ReadMoreButton/ReadMoreButton";
import "./Style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../../common/TitleHeader/TitleHeader";

function ServiceStackingCard() {
	const main = useRef();

	// useLayoutEffect(() => {
	// 	const ctx = gsap.context((self) => {
	// 		const boxes = self.selector(".panel");

	// 		boxes.forEach((box) => {
	// 			gsap.to(box, {
	// 				x: 150,
	// 				scrollTrigger: {
	// 					trigger: box,
	// 					start: "bottom bottom",
	// 					end: "top 20%",
	// 					scrub: true,
	// 				},
	// 			});
	// 		});
	// 	}, main);
	// 	return () => ctx.revert();
	// }, []);

	const containerRef = useRef(null);

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	gsap.to(".stack:not(:last-child)", {
	// 		yPercent: -100,
	// 		ease: "none",
	// 		stagger: 0.5,
	// 		scrollTrigger: {
	// 			trigger: containerRef.current,
	// 			start: "top top",
	// 			end: "+=300%",
	// 			scrub: true,
	// 			pin: true,
	// 		},
	// 	});

	// 	gsap.set(".stack", {
	// 		zIndex: (i, target, targets) => targets.length - i,
	// 	});
	// }, []);

	return (
		<>
			<div
				ref={containerRef}
				id="services-stacking"
				className="services-stacking mb-4"
			>
				<div
					className="bg-gray-pink bg-gray-secondary-pink stack"
					id="test-offering"
				>
					<div className="block-inner  pt-5">
						<TitleHeader title={"Test Offering"} />

						<div className="content-text-part max-width">
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<h3 className="Companion_description mb-4">
										Biomarkers
									</h3>

									<p className=" pe-5">
										Workflow 24 IS AT THE FOREFRONT OF
										BIOMARKER ASSAY DEVELOPMENT, FROM EARLY
										EXPLORATORY MARKERS TO PERSONALIZED
										MARKERS FOR COMPANION DIAGNOSTIC
										TESTING.The scientific team has
										extensive experience evaluating custom
										biomarkers for different disease
										indications and sample types, while
										utilizing multiple technologies and
										methodologies. Some examples of
										biomarker assays developed at Workflow
										24 include: PD-L1, BCMA, and FLT3.
									</p>
								</Col>
								<Col
									md={6}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="Companion_image-box">
										<img
											className="w-75"
											src="/assets/img/2.png"
											alt="image"
										/>
									</div>
								</Col>
							</Row>
							<Row className="align-items-end pb-5">
								<Col
									md={6}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<h3 className="Companion_description mb-4">
										Digital Pathology
									</h3>

									<p className=" pe-5">
										THE USE OF DIGITAL PATHOLOGY PROVIDES
										NEW OPPORTUNITIES FOR SCIENTIFIC AND
										MEDICAL ADVANCEMENTS.Our expert
										knowledge and global thinking propelled
										us to adopt Digital Pathology, which
										integrates efficient high throughput
										platforms and quality by design
										procedures. We utilizes smart systems
										that are empowered by a sophisticated
										in-house IT infrastructure to manage the
									</p>
								</Col>
								<Col
									md={6}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<p className=" pe-5">
										images, and automate the processes of
										organizing, archiving, and retrieving
										the slides. We offer a flexible and
										broad range of digital pathology
										services, including slide scanning (with
										20x and 40x magnification), archiving,
										and storage.
									</p>
								</Col>
							</Row>
						</div>
						<Row
							className="pagination"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<Col md={2}>
								<div className="number">
									<span>1.2</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text">
									<span>Test Offering</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				<div className="bg-gray-pink stack" id="assay-development">
					<div className="block-inner  pt-5">
						<TitleHeader title={"Assay Development"} />

						<div className="content-text-part max-width">
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div className="Companion_image-box margin-less">
										<img
											className="w-100"
											src="/assets/img/3.png"
											alt="image"
										/>
									</div>
								</Col>
								<Col
									md={6}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<h3 className="Companion_description mb-4">
										Workflow 24’s scientific experts are
										well equipped to develop an assay that
										is specific to your clinical trial.
									</h3>

									<p className=" pe-5 pb-3">
										We have extensive experience evaluating
										biological targets in multiple disease
										areas. Our team will ensure that an
										assay is optimized by evaluating
										multiple biomarkers and assay
										conditions, while using the most
										appropriate platform. Assays then
										undergo stringent validation and QA
										processes to ensure the assay is robust,
										provides accurate results, and is
										reproducible across multiple instruments
										and our global (US, EU, Asia-Pacific,
										and China) laboratories. Our utilization
										of fresh patient samples (within hours
										of sample collection) for validation
										provides us with a unique advantage to
										assess sample stability from Day 0.
										These samples are also instrumental in
										better understanding the performance of
										the assay, which may not be apparent
										with cell lines or other contrived
										samples.
										<br /> We have a proven track record
										validating and utilizing our assays for
										multiple Phase 3 registrational trials.
										Workflow 24 has also co-developed
										several assays as a companion
										diagnostic.
									</p>
								</Col>
							</Row>
						</div>
						<Row
							className="pagination"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1000"
						>
							<Col md={2}>
								<div className="number">
									<span>1.3</span>
								</div>
							</Col>
							<Col md={8}>
								<div className="text">
									<span>Assay Development</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceStackingCard;
