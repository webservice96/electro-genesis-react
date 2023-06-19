import React from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../Button/Button";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ContactPlace({
	country,
	officePhoto,
	mapLink,
	address,
	tollFreeNumber,
	telephone,
	fax,
	email,
}) {
	return (
		<>
			<div className="contact-place-container">
				<Container>
					<div className="contact-place-header" data-aos="fade-up" data-aos-duration="2000">
						<h2>{country}</h2>
					</div>
				</Container>
				<div className="contact-place-photo my-4 my-md-5" data-aos="zoom-in-up" data-aos-duration="2000">
					<img src={officePhoto} alt={country} />
				</div>
				<Container>
					<Row>
						<Col md={6} data-aos="zoom-out-right" data-aos-duration="2000">
							<div className="location-map">
								<p className="mb-4">{address}</p>
								<Button
									link={mapLink}
									lavel={`View on Google Maps`}
									icon={faUpRightFromSquare}
									className={`contact-map-location`}
								/>
							</div>
						</Col>
						<Col md={6} data-aos="zoom-out-left" data-aos-duration="2000">
							<div className="contact-details">
								{tollFreeNumber && (
									<p className="phone">
										<span className="label">Toll Free</span>
										<a href={`tel:${tollFreeNumber}`}>
											{tollFreeNumber}
										</a>
									</p>
								)}

								{telephone && (
									<p className="phone">
										<span className="label">Telephone</span>
										<a href={`tel:${telephone}`}>
											{telephone}
										</a>
									</p>
								)}

								{fax && (
									<p className="phone">
										<span className="label">Fax</span>
										<a href={`tel:${fax}`}>{fax}</a>
									</p>
								)}

								{email && (
									<p className="phone mt-md-5">
										<span className="label">Email</span>
										<a href={`mailto:${email}`}>{email}</a>
									</p>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default ContactPlace;
