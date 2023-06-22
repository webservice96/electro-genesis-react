import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../../../Button/Button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

function JobItem({ job }) {
	const { title, jobType, location, mailTo, category } = job;

	return (
		<div
			className="job-item mb-3"
			data-aos="zoom-in-up"
			data-aos-duration="2000"
		>
			<Row className="justify-content-center align-items-center">
				<Col md={6} xs={6}>
					<span className="job-title">{title}</span>
				</Col>
				<Col md={2} className="d-mobile-none">
					<span className="job-type">{jobType}</span>
				</Col>
				<Col md={2} className="d-mobile-none">
					<span className="job-location">{location}</span>
				</Col>
				<Col md={2} xs={6}>
					<div className="job-apply">
						<Button
							className={`job-appy-btn`}
							link={`mailto:${mailTo}`}
							lavel={`Apply`}
							icon={faEnvelope}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default JobItem;
