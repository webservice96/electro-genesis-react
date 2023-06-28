import React from "react";
import "./Style.css";

import { Col, Row } from "react-bootstrap";
import Button from "../../Button/Button";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function Support() {
	return (
		<section className="support-section" data-aos="zoom-in-down" data-aos-duration="1000">
			<Row className="align-items-center">
				<Col lg={6} className="support-left">
					<div className="support-content text-white">
						<h1 className=" ">We are here to support you.</h1>
						<div className="button-text mt-5 d-flex justify-content-between align-items-center">
							<div className="support-btn">
								<Button
									lavel="Contact us"
									icon={faPen}
									link="/contact"
								/>
							</div>
							<div className="support-short-desc">
								<p className="m-0">
									A member of our team will contact you
									shortly.
								</p>
							</div>
						</div>
					</div>
				</Col>
				<Col lg={6} className="pe-0">
					<div className="support-right-video">
						<video autoPlay muted="muted" loop="loop" playsInline>
							<source type="video/mp4" src="/assets/videos/promo-block-small-uhd.mp4" />
						</video>
					</div>
				</Col>
			</Row>
		</section>
	);
}

export default Support;
