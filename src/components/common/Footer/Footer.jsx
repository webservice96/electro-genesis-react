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
						<Link to={"service"}>
							<h4 className="footer-title">Business Intel</h4>
						</Link>
						<ul>
							<li>
								<Link to="/service#capabilities">
									<span>Project Management</span>
								</Link>
							</li>
							<li>
								<Link to="/service#pathology">
									<span>Assay Development</span>
								</Link>
							</li>
							<li>
								<Link to="/service#test-offering">
									<span>Companion Diagnostics</span>
								</Link>
							</li>
							<li>
								<Link to="/service#assay-development">
									<span>Assay Development</span>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
						<Link to={"clinical-trials"}>
							<h4 className="footer-title">Efficiencies</h4>
						</Link>
						<ul>
							<li>
								<Link to="clinical-trials/test-offering">
									<span>Automation</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/processes">
									<span>Real-time</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/assay-development">
									<span>Self service</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/logistics">
									<span>Scalability</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<Link to={"technologies"}>
							<h4 className="footer-title">Industry 4.0</h4>
						</Link>
						<ul>
							<li>
								<Link to="technologies/flow-cytometry">
									<span>Sensor Data</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/molecular-genetics">
									<span>Visualisation</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/cytogenetics-fish">
									<span>Predictive Analytics</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/histology">
									<span>Decision Science</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<Link to={"expertise"}>
							<h4 className="footer-title">Advanced Modelling</h4>
						</Link>

						<ul>
							<li>
								<Link to={"expertise/hematopathology"}>
									<span>Predictive Modelling</span>
								</Link>
							</li>
							<li>
								<Link to={"expertise/solid-tumor-pathology"}>
									<span>Prescriptive Modelling</span>
								</Link>
							</li>
							<li>
								<Link to={"expertise/minimal-residual-disease"}>
									<span>Digital twinning</span>
								</Link>
							</li>
							<li>
								<Link to="expertise/companion-diagnostics-cdx">
									<span>Graph Modelling</span>
								</Link>
							</li>
						</ul>
					</Col>

					<Col>
						<h4 className="footer-title">Our Story</h4>
						<ul>
							<li>
								<Link to="/company#about">
									<span>About</span>
								</Link>
							</li>
							<li>
								<Link to="/company#leaders">
									<span>Team</span>
								</Link>
							</li>
							<li>
								<Link to="/company#history">
									<span>Mission</span>
								</Link>
							</li>
							<li>
								<Link to="/company#culture">
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
