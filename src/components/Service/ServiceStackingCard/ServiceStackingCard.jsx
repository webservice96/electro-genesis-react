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
				<div className="bg-gray-pink stack" id="assay-development">
					<div className="block-inner  pt-5">
						<TitleHeader title={"A Unified Ecosystem"} />

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
										Workflow 24’s efficiency experts are
										well equipped to develop novel solutions
										to critical industries such as
										renewables and healthcare
									</h3>

									<p className=" pe-5 pb-3">
										Traditional user-based CRMs cannot work
										as process automation tools; their
										objectives are very specific. Usual
										Enterprise practice is to tailor reputed
										CRMs to work as process automation
										tools, offering minimal scope. Transform
										the extended ecosystem of your
										enterprise with White-labeled Mobile
										apps, Secondary & Tertiary data
										analytics, and Inventory Optimisation.
										Empower distributors and dealers with
										Process Automation on one reliable and
										secured platform.
									</p>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceStackingCard;
