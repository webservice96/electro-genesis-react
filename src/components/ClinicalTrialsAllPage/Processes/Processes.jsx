import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function Processes() {
	return (
		<>
			<div className="block-inner">
				<TitleHeader title={"PROCESSES"} />
				<div className="mt-4">
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="text-content">
								<h2 className="mb-3">
									Hematogenix® is committed to providing the
									highest level of quality services compliant
									with all laws, rules, and applicable
									regulations.
								</h2>
								<p>
									Hematogenix® is at the forefront of
									biomarker assay development, from early
									exploratory markers to personalized markers
									for companion diagnostic testing. The
									scientific team has extensive experience
									evaluating custom biomarkers for different
									disease indications and sample types, while
									utilizing multiple technologies and
									methodologies.
								</p>
							</div>
						</Col>
						<Col
							md={6}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-div w-75 mb-3">
								<img
									className="rounded-3 w-100"
									src="/assets/img/clinical/Proces-lab.png"
									alt="madecin test"
								/>
							</div>
						</Col>
					</Row>
				</div>

				<div className="mx-width-information">
					<Row>
						<Col
							md={{ span: 12 }}
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<div className="description-title mb-3">
								<h2 className="title">
									Information Protection
								</h2>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 6 }}>
							<div
								className="text-content"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<h2 className="mb-3">
									Hematogenix® will not use or disclose
									protected health information (PHI) or
									confidential client information without
									prior consent, and is fully compliant with
									the (amended) Health Insurance Portability
									and Accountability Act of 1996 (“HIPAA”).
									Upon hire, each employee is trained on HIPAA
									regulations.
								</h2>
							</div>
						</Col>
						<Col md={{ span: 6 }}>
							<div
								className="text-content pe-0"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<p className="mt-5">
									Hematogenix® offers a secure method for data
									transfer, sample tracking, and trial
									management called HematoPass. Both internal
									and external internet and interface
									connectivity to the system is encrypted,
									password protected, and access is granted
									only with authorization. Hematogenix®
									utilizes layered physical security measures
									through electronic badge access, security
									cameras, and alarm monitoring systems, and
									planned redundancy measures. De-identified
									test result data may be made available to
									pharmaceutical companies and other third
									parties involved in cancer research, but
									this data will never include protected
									patient or confidential client information.
									Our customized reporting and customizable
									laboratory information system offers a
									thorough chain of custody for specimens, and
									is compliant with 21 CFR Part 11
									requirements. We are compliant with the
									current EU General Data Protection
									Regulation (GDPR), and abide strictly to our
									Hematogenix® Privacy Policy.
								</p>
							</div>
						</Col>
					</Row>
				</div>
				<Row className="mb-5">
					<Col md={1} data-aos="fade-up" data-aos-duration="2000">
						<div className="order-number-wrapper order-number">
							<span className="index">01</span>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 0 }}>
						<div
							className="description-title mb-1"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title pt-0">CLIA</h2>
						</div>
						<div
							className="text-content pe-0"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<p className="">
								The Centers for Medicare & Medicaid Services
								(CMS) regulates all clinical laboratory testing
								performed on humans in the U.S. through the
								Clinical Laboratory Improvement Amendments
								(CLIA). Hematogenix® is CLIA- certified to
								accept Medicare and Medicaid payments as a US
								laboratory providing quality testing services.
								Clinical diagnostic tests without US Food and
								Drug Administration (FDA) approval (class I and
								II in Vitro Diagnostic medical device-based
								methods) must meet CLIA performance
								specifications. Hematogenix® maintains full
								compliance with regulations for labeling non-FDA
								approved tests.
							</p>
						</div>
					</Col>
					<Col md={{ span: 1, offset: 1 }}>
						<div
							className="order-number-wrapper order-number"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<span className="index">02</span>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 0 }}>
						<div
							className="description-title mb-1"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title pt-0">CAP</h2>
						</div>
						<div
							className="text-content pe-0"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<p className="">
								Hematogenix® is accredited through the College
								of American Pathologists (CAP) Laboratory
								Accreditation Program for comprehensive
								integrated Pathology services, and employs
								in-house Staff Pathologists from Chicago,
								Illinois USA headquarters, as well as many
								partnering pathologists and specialists.
								Hematogenix® staff pathologists and
								PhD-credentialed scientists train to master
								cutting-edge diagnostic techniques and new
								technologies, while specializing in pertinent
								clinical and research areas such as
								hematopathology, prostate and solid tumor
								pathology, immune-oncology, genetics, molecular
								diagnostics, and precision medicine.
							</p>
						</div>
					</Col>
				</Row>
				<Row className="mb-5">
					<Col md={1}>
						<div
							className="order-number-wrapper order-number"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<span className="index">03</span>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 0 }}>
						<div
							className="description-title mb-1"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title pt-0">GCP</h2>
						</div>
						<div
							className="text-content pe-0"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<p className="">
								The International Conference on Harmonization of
								technical requirements for registration of
								pharmaceuticals for human use has outlined
								standards for the design, conduct, performance,
								monitoring, auditing, recording, analyses, and
								reporting of clinical trials. These standards
								provide assurance that the data and reported
								results are credible and accurate, and that the
								rights, integrity, and confidentiality of trial
								subjects are protected. Hematogenix® is
								compliant with these standards, and supportive
								to all pharmaceutical clients sponsoring
								GCP-compliant clinical trials.
							</p>
						</div>
					</Col>
					<Col md={{ span: 1, offset: 1 }}>
						<div
							className="order-number-wrapper order-number"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<span className="index">04</span>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 0 }}>
						<div
							className="description-title mb-1"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title pt-0">Audits</h2>
						</div>
						<div
							className="text-content pe-0"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<p className="mb-3">
								Audits provide independent evidence of
								compliance status with relevant regulatory
								requirements and sponsor contracts. Hematogenix®
								conducts internal audits through its Quality
								Assurance program, and welcomes audits from
								external partners. We request advance notice to
								ensure availability of relevant personnel.
							</p>
							<p className="">
								If a regulatory body or certification agency
								requests test performance or quality assurance
								data for Hematogenix® testing, please contact
								the Hematogenix® Quality & Regulatory
								department.
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={1}>
						<div
							className="order-number-wrapper order-number"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<span className="index">05</span>
						</div>
					</Col>
					<Col md={{ span: 5, offset: 0 }}>
						<div
							className="description-title mb-1"
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h2 className="title pt-0">Quality Assurance</h2>
						</div>
					</Col>
				</Row>

				<div className="mt-4">
					<Row>
						<Col md={{ span: 5, offset: 1 }}>
							<div
								className="image-div mb-3"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<img
									className="rounded-3 w-100"
									src="/assets/img/clinical/Proces-lab-2.png"
									alt="madecin test"
								/>
							</div>
						</Col>
						<Col md={{ span: 4, offset: 1 }}>
							<div className="text-content pe-0">
								<h2
									className="mb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Our Quality and Regulatory department leads
									Hematogenix® Compliance and Quality
									Assurance programs globally, and is based
									within company headquarters in Chicago,
									Illinois, USA.
								</h2>
								<p data-aos="fade-up" data-aos-duration="2000">
									Hematogenix® utilizes standardize validation
									practices for the installation qualification
									(IQ), operational qualification (OQ), and
									performance qualification (PQ) of laboratory
									instrumentation during initial installation,
									after substantial repair, after relocation,
									or any other instance that may affect the
									function of instruments. For each platform,
									department, and client project, experiment
									protocols are maintained, and reagent,
									sample and operator information is recorded
									in SOP-specific worksheets, data files, and
									notebooks. Hematogenix® has a numbering
									system to systematically identify and label
									SOPs, and maintains top line informational
									management hardware, software, personnel,
									and technical capabilities to ensure systems
									uptime, data integrity and availability, and
									business continuity.
								</p>
								<p
									className="mt-4"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Continual Process Improvement at
									Hematogenix® ensures we strive for
									excellence and take every opportunity to
									make changes that decrease errors and
									successfully deliver to clients. We engage
									in ongoing regular communication with
									clients and partners in an honest dialogue.
									We encourage the identification of these
									opportunities to improve as well as any
									collaborative suggestions that will
									ultimately impact patient care.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Processes;
