import React from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
	const { isBanner } = useSelector((state) => state.bannerState);

	return (
		<footer
			className={`site-footer position-relative ${
				!isBanner && "default-footer-bg"
			}`}
		>
			<Container fluid className="footer-top">
				<Row>
					<Col>
						<Link to="/business-intel">
							<h4 className="footer-title">Business Intel</h4>
						</Link>
						<ul>
							<li>
								<Link to="/project-management">
									<span>Project Management</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Assay Development</span>
								</Link>
							</li>
							<li>
								<Link to="/companion-diagnostics">
									<span>Companion Diagnostics</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Assay Development</span>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
						<Link to={"/system-efficiencies"}>
							<h4 className="footer-title">Efficiencies</h4>
						</Link>
						<ul>
							<li>
								<Link to="/project-management">
									<span>Automation</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Real-time</span>
								</Link>
							</li>
							<li>
								<Link to="/companion-diagnosticst">
									<span>Self service</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Scalability</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<Link to={"/industry"}>
							<h4 className="footer-title">Industry 4.0</h4>
						</Link>
						<ul>
							<li>
								<Link to="/project-management">
									<span>Sensor Data</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Visualisation</span>
								</Link>
							</li>
							<li>
								<Link to="/companion-diagnostics">
									<span>Predictive Analytics</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Decision Science</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<Link to={"/advanced-modelling"}>
							<h4 className="footer-title">Advanced Modelling</h4>
						</Link>

						<ul>
							<li>
								<Link to={"/project-management"}>
									<span>Predictive Modelling</span>
								</Link>
							</li>
							<li>
								<Link to={"/assay-development"}>
									<span>Prescriptive Modelling</span>
								</Link>
							</li>
							<li>
								<Link to={"/companion-diagnostics"}>
									<span>Digital twinning</span>
								</Link>
							</li>
							<li>
								<Link to="/assay-development">
									<span>Graph Modelling</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<h4 className="footer-title">Our Story</h4>
						<ul>
							<li>
								<Link to="/our-story#about">
									<span>About</span>
								</Link>
							</li>
							<li>
								<Link to="/our-story#team">
									<span>Team</span>
								</Link>
							</li>
							<li>
								<Link to="/our-story#mission">
									<span>Mission</span>
								</Link>
							</li>
							<li>
								<Link to="/our-story">
									<span>Delta Mindset</span>
								</Link>
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
						<a href="https://1moonshot.com/">Made by 1moonshot</a>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
