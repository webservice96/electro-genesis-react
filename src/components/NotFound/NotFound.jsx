import React from "react";
import "./Style.css";
import Button from "../Button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

function NotFound() {
	return (
		<div className="error-page position-relative">
			<div className="notfound-bg-div position-absolute w-100 h-100">
				<img
					src="assets/img/404-bg.jpg"
					alt="..."
					className="not-found-404-bg "
				/>
			</div>

			<video
				autoPlay
				muted="muted"
				loop="loop"
				className="notfound-bg-video"
			>
				<source type="video/webm" src={`assets/videos/404-hd.webm`} />
			</video>

			<div className="notfound-404-content position-absolute w-100 h-100 top-0">
				<Row className="justify-content-center align-items-center w-100 h-100">
					<Col className={`offset-md-3 col-md-12`}>
						<span className="_404-numb">404</span>
						<h1 className="not-found-big-heading text-white mb-4">
							Page not found
						</h1>

						<Button
							mod={`light`}
							lavel={`Go to Homepage`}
							link={`/`}
							icon={faArrowRight}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default NotFound;
