import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Style.css";

function CompanyHistoryBox({ history, count }) {
	const { imgSrc, year, historyDec } = history;

	let reverseClass = "";

	if (count % 2 === 1) {
		reverseClass = "flex-row-reverse";
	} else {
		reverseClass = "justify-content-start";
	}

	return (
		<>
			<div className="company-history-item" data-aos="zoom-out-down" data-aos-duration="1000" data-aos-offset="200">
				<Row className={`${reverseClass} align-items-center`}>
					{imgSrc && (
						<Col md={4} className="w-25">
							<img src={imgSrc} alt={year} />
						</Col>
					)}
					<Col md={4}>
						<span className="history-year position-relative d-block">
							{year}
						</span>
						<span className="history-description position-relative d-block">
							{historyDec}
						</span>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default CompanyHistoryBox;
