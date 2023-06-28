import React from "react";
import Layout from "../Layout/Main/Layout";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/privacy-cooki.css";
import TableOfContents from "../components/TableOfContentMacker/TableOfContentMacker";

function PrivacyPolicy() {
	return (
		<Layout className="privacy-cooki">
			<Container>
				<Row>
					<Col>
						<div className="privacy-cookie-page-title">
							<h2>Privacy Policy</h2>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={8} xs={12} className="privacy-cooki-content-column">
						<div className="privacy-cooki-content">
							<div className="privacy-cookie-item">
								<h2
									className="privacy-cookie-title"
									id="table-of-cont-1"
								>
									Privacy Policy Notice
								</h2>
								<h4>Personal data collection</h4>

								<ul>
									<li>Your personal data processing</li>
									<li>
										Your personal data shared with
										Third-Party
									</li>
									<li>Your individual rights</li>
									<li>Internet cookies</li>
									<li>Data security and protection</li>
									<li>Transparent Privacy Explanations</li>
									<li>Retention of your personal data</li>
									<li>
										Changes to the terms of this Privacy
										Policy
									</li>
									<li>How to contact Workflow 24</li>
									<li>Automated Decision Making</li>
									<li>Personal Data for Marketing</li>
									<li>Children’s Data</li>
								</ul>
							</div>
							<div className="privacy-cookie-item">
								<h2
									className="privacy-cookie-title"
									id="table-of-cont-2"
								>
									Policy
								</h2>
								<p>
									This privacy policy notice relates to the
									users of this website and
									anyone sharing/disclosing personal data to
									Workflow 24, and this notice is served by
									Workflow 24. The purpose of this policy is
									to explain to you how we control, process,
									handle and protect your personal information
									including your rights under current laws and
									regulations. If you do not agree to the
									following policy, you may wish to cease
									using the website.
								</p>

								<p>
									<strong>
										Will the Company Use My Personal Data
										for Marketing?
									</strong>
								</p>

								<p>
									We will ask for your consent before sending
									your marketing communications. Any marketing
									communication will also include a means for
									opting out of future marketing
									communications.
								</p>

								<p>
									<strong>Children’s Data</strong>
								</p>

								<p>
									The website is not directed to, nor do we
									knowingly collect information from, anyone
									under the age of 18. If you become aware
									that your child or any minor under your care
									has provided us with information without
									your consent, please contact us at the
									contact information listed above.
								</p>
							</div>
							<div className="privacy-cookie-item">
								<h2
									className="privacy-cookie-title"
									id="table-of-cont-3"
								>
									Policy key definitions
								</h2>
								<ol>
									<li>
										", "our", "us", or "we" refer to the
										business, Workflow 24
									</li>
									<li>
										"you", "the user" refer to the person(s)
										using the website or otherwise
										sharing/disclosing personal data with
										the business
									</li>
									<li>
										GDPR means General Data Protection Act
									</li>
									<li>
										PECR means Privacy & Electronic
										Communications Regulation
									</li>
									<li>
										ICO means Information Commissioner's
										Office
									</li>
									<li>
										Cookies mean small files stored on a
										user’s computer or device
									</li>
								</ol>
							</div>
						</div>
					</Col>
					<Col md={4} className="table-of-content-column d-mobile-none">
						<TableOfContents />
					</Col>
				</Row>
			</Container>
		</Layout>
	);
}

export default PrivacyPolicy;
