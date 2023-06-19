import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomModal from "../../common/Modals/CustomModal";
import { ReadMoreButton } from "../../common/ReadMoreButton/ReadMoreButton";
import "./Style.css";

function ContactFormPopup() {
	const [show, setShow] = useState(false);
	return (
		<>
			<div className="contact-form-popup">
				<Container>
					<Row>
						<Col md={8} data-aos="fade-up" data-aos-duration="2000">
							<h2 className="mb-3">
								Need to ask us something else?
							</h2>

							<ReadMoreButton
								lable="Contact us"
								setShow={setShow}
							/>
						</Col>
					</Row>
				</Container>
				<CustomModal setShow={setShow} show={show} />
			</div>
		</>
	);
}

export default ContactFormPopup;
