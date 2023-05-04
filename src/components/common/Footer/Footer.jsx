import React from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
	return (
		<footer className="site-footer position-relative">
			<Container fluid className="footer-top">
				<Row>
					<Col>
						<h4 className="footer-title">Services</h4>
						<ul>
							<li>
								<a href="#">
									<span>Capabilities</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Pathology</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Test Offering</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Assay Development</span>
								</a>
							</li>
						</ul>
					</Col>
					<Col>
						<h4 className="footer-title">Clinical Trials</h4>
						<ul>
							<li>
								<a href="#">
									<span>Test Offering</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Processes</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Assay Development</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Logistics</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Companion Diagnostics</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Project Management</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Global</span>
								</a>
							</li>
						</ul>
					</Col>
					<Col>
						<h4 className="footer-title">Technologies</h4>
						<ul>
							<li>
								<a href="#">
									<span>Flow Cytometry</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Molecular Genetics</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Cytogenetics / FISH</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Histology / IHC</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>
										Immunoassays & Clinical Chemistry
									</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Digital Pathology</span>
								</a>
							</li>
						</ul>
					</Col>
					<Col>
						<h4 className="footer-title">Company</h4>
						<ul>
							<li>
								<a href="#">
									<span>About</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Leaders</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>History</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Culture</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Mission</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span>Careers</span>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>

			<Container fluid className="footer-bottom">
				<Row>
					<Col className="f-bt-first-col">
                        <span>2023 © 1moonshot</span>
                    </Col>
					<Col className="f-bt-second-col">
                        <a href="https://1moonshot.com/">Made by Helal Uddin</a>
                    </Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
