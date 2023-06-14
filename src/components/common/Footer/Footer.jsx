import React from "react";
import "./Style.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="site-footer position-relative">
			<Container fluid className="footer-top">
				<Row>
					<Col></Col>
					<Col>
					<Link to={'expertise'}><h4 className="footer-title">Expertise</h4></Link>
						
						<ul>
							<li>
								<Link to={'expertise/hematopathology'}>
									<span>Hematopathology</span>
								</Link>
							</li>
							<li>
								<Link to={'expertise/solid-tumor-pathology'}>
									<span>Solid Tumor Pathology</span>
								</Link>
							</li>
							<li>
								<Link to={'expertise/minimal-residual-disease'}>
									<span>Minimal Residual Disease (MRD)</span>
								</Link>
							</li>
							<li>
								<Link to='expertise/companion-diagnostics-cdx'>
									<span>Companion Diagnostics (CDx)</span>
								</Link>
							</li>
							<li>
								<Link to='expertise/next-generation-sequencing'>
									<span>Next-Generation Sequencing (NGS)</span>
								</Link>
							</li>
							<li>
								<Link to={'expertise/immuno-oncology'}>
									<span>Immuno-Oncology</span>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
					<Link to={'service'}><h4 className="footer-title">Services</h4></Link>
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
						<Link to={'clinical-trials'}><h4 className="footer-title">Clinical Trials</h4></Link>
						<ul>
							<li>
								<Link to="clinical-trials/test-offering">
									<span>Test Offering</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/processes">
									<span>Processes</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/assay-development">
									<span>Assay Development</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/logistics">
									<span>Logistics</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/companion-diagnostics">
									<span>Companion Diagnostics</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/project-management">
									<span>Project Management</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/global">
									<span>Global</span>
								</Link>
							</li>
							<li>
								<Link to="clinical-trials/reporting">
									<span>Reporting</span>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
					<Link to={'technologies'}><h4 className="footer-title">Technologies</h4></Link>
						
						<ul>
							<li>
								<Link to="technologies/flow-cytometry">
									<span>Flow Cytometry</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/molecular-genetics">
									<span>Molecular Genetics</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/cytogenetics-fish">
									<span>Cytogenetics / FISH</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/histology">
									<span>Histology / IHC</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/immunoassays">
									<span>
										Immunoassays & Clinical Chemistry
									</span>
								</Link>
							</li>
							<li>
								<Link to="technologies/digital-pathology">
									<span>Digital Pathology</span>
								</Link>
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
