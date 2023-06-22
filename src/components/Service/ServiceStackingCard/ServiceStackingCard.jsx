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
			<div ref={containerRef} id="services-stacking" className="services-stacking mb-4">
				<div className="bg-gray-pink stack" id="pathology">
					<div className="block-inner pt-5">
						<TitleHeader title={"Pathology Services"} />

						<div className="content-text-part max-width">
							<Row>
								<Col
									md={6}
									data-aos="fade-right"
									data-aos-duration="2000"
								>
									<div className="image-box margin-less">
										<img
											className="w-75"
											src="/assets/img/b3af76.png"
											alt="image"
										/>
										<ul className="list w-75 mobile-w-100">
											<li className="item">
												<span className="name">
													World-renowned pathologists
													with expertise in multiple
													subspecialties
												</span>
											</li>
											<li className="item">
												<span className="name">
													Full-time and employed in
													all global locations
												</span>
											</li>
											<li className="item">
												<span className="name">
													Available to serve as
													Principal Investigators and
													Consultants
												</span>
											</li>
										</ul>
									</div>
								</Col>
								<Col
									md={6}
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<h3 className="description mb-5">
										World-renowned pathologists with
										expertise in many different
										subspecialties lead Hematogenix®
										research studies, analyses, and
										integrated reporting.
									</h3>
									<div className="d-flex flex-column w-75 mobile-w-100">
										<div
											className="col service-item"
											data-aos="fade-up"
											data-aos-duration="2000"
										>
											<div className="image">
												<img
													className="w-75"
													src="/assets/img/technology/cytovysion.png"
													alt="Not found!"
												/>
											</div>
											<div className="image-text ms-3">
												<h6 className="fs-4">
													Cytogenetics / FISH
												</h6>
												<ReadMoreButton lable="More" link={"/technologies/cytogenetics-fish"} />
											</div>
										</div>
										<div
											className="col service-item"
											data-aos="fade-up"
											data-aos-duration="2000"
										>
											<div className="image">
												<img
													className="w-75"
													src="/assets/img/technology/benchmark.png"
													alt="Not found!"
												/>
											</div>
											<div className="image-text ms-2">
												<h6 className="fs-4">
													Histology / IHC
												</h6>
												<ReadMoreButton lable="More" link={"/technologies/histology"} />
											</div>
										</div>
										<div
											className="col service-item"
											data-aos="fade-up"
											data-aos-duration="2000"
										>
											<div className="image">
												<img
													className="w-75"
													src="/assets/img/technology/digital-pathology.png"
													alt="Not found!"
												/>
											</div>
											<div className="image-text ms-2">
												<h6 className="fs-4">
													Digital Pathology
												</h6>
												<ReadMoreButton lable="More" link={"/technologies/digital-pathology"} />
											</div>
										</div>
										<div
											className="col service-item"
											data-aos="fade-up"
											data-aos-duration="2000"
										>
											<div className="image">
												<img
													className="w-75"
													src="/assets/img/technology/Illumina.png"
													alt="Not found!"
												/>
											</div>
											<div className="image-text ms-2">
												<h6 className="fs-4">
													Molecular Genetics
												</h6>
												<ReadMoreButton lable="More" link={"/technologies/molecular-genetics"} />
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
						<Row
							className="pagination mx-3 pb-3"
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
								<div className="text ms-3">
									<span>Pathology Services</span>
								</div>
							</Col>
						</Row>
					</div>
				</div>

				<div className="bg-gray-pink bg-gray-secondary-pink stack" id="test-offering">
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
										HEMATOGENIX® IS AT THE FOREFRONT OF
										BIOMARKER ASSAY DEVELOPMENT, FROM EARLY
										EXPLORATORY MARKERS TO PERSONALIZED
										MARKERS FOR COMPANION DIAGNOSTIC
										TESTING.The scientific team has
										extensive experience evaluating custom
										biomarkers for different disease
										indications and sample types, while
										utilizing multiple technologies and
										methodologies. Some examples of
										biomarker assays developed at
										Hematogenix include: PD-L1, BCMA, and
										FLT3.
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
										Hematogenix®’s scientific experts are
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
										Hematogenix has also co-developed
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
