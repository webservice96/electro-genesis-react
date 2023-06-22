import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function Logistics() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"Logistics"} />

				<div className="mt-4">
					<Row className="mb-md-5 mb-lg-5">
						<Col md={{ span: 6 }}>
							<div
								className="text-content pe-0 ms-3"
								data-aos="fade-right"
								data-aos-duration="2000"
							>
								<h2 className="mb-3">Custom Kit Development</h2>

								<p>
									Our custom kits are designed around the
									specific needs for each assay in order to
									maintain the integrity of the specimens
									submitted and are UN3373 compliant. The
									contents for each custom kit developed are
									unique to support the needs of the clinical
									trial. Our logistics group works directly
									with project management and the scientific
									team to ensure all custom kit components are
									appropriately selected prior to the initial
									kit build. Examples of custom kits can be
									shared with the sponsor for review prior
									finalization.
								</p>
							</div>
						</Col>
						<Col md={{ span: 5, offset: 1 }}>
							<div
								className="image-div mb-md-3 mb-lg-3"
								data-aos="fade-left"
								data-aos-duration="2000"
							>
								<img
									className="rounded-3 w-75 mx-auto"
									src="/assets/img/clinical/custom-kid.png"
									alt="madecin test"
								/>
							</div>
						</Col>
					</Row>
					<Row className="py-md-5 py-lg-5">
						<Col md={{ span: 4, offset: 2 }}>
							<div
								className="image-div mb-3 "
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<img
									className="rounded-3 w-100"
									src="/assets/img/clinical/logistik-page-form.png"
									alt="madecin test"
								/>
							</div>
						</Col>
						<Col md={{ span: 5, offset: 1 }}>
							<div className="text-content px-md-5 px-lg-5">
								<h2
									className="mb-3 ps-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Requisition Design and Development
								</h2>

								<p
									className="ps-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Requisitions are unique to every trial. We
									do not have a ‘one size fits all’ concept
									when designing requisitions. Our
									requisitions are color coded and watermarked
									with the clinical trial protocol number for
									ease of identification at both the
									collection site and within our facility.
									Clinical trial protocols are reviewed and
									the schedule of assessments for every trial
									is incorporated clearly on the requisition.
									Requisitions are prepared for each site
									enrolled in the clinical trial. Requisitions
									can include unique barcode identification
									and peel and stick labels to be used when
									collecting clinical trial specimens. Patient
									demographics to be collected on the
									requisition are discussed with the sponsor
									and incorporated into each requisition
									design.
								</p>
							</div>
						</Col>
					</Row>

					<Row className="mb-5">
						<Col md={{ span: 6 }}>
							<div className="text-content pe-0 ms-3">
								<h2
									className="mb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Custom Kit Development
								</h2>

								<p data-aos="fade-up" data-aos-duration="2000">
									Our custom kits are designed around the
									specific needs for each assay in order to
									maintain the integrity of the specimens
									submitted and are UN3373 compliant. The
									contents for each custom kit developed are
									unique to support the needs of the clinical
									trial. Our logistics group works directly
									with project management and the scientific
									team to ensure all custom kit components are
									appropriately selected prior to the initial
									kit build. Examples of custom kits can be
									shared with the sponsor for review prior
									finalization.
								</p>
							</div>
						</Col>
						<Col md={{ span: 5, offset: 0 }}>
							<div
								className="image-div mb-3 "
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								<img
									className="rounded-3 w-75 mx-auto"
									src="/assets/img/clinical/other-logo.png"
									alt="madecin test"
								/>
							</div>
						</Col>
					</Row>

					<Row className="my-5 mx-3">
						<div
							className="full-width-img"
							data-aos="fade-up"
							data-aos-duration="2000"
						></div>
					</Row>
					<Row className="py-5">
						<Col md={{ span: 4, offset: 1 }}>
							<div className="text-content pe-1">
								<h2
									className="mb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Transportation Management and Oversight Per
									Shipment
								</h2>

								<p
									className=""
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									We have dedicated teams that are assigned to
									oversee shipments of supplies as well as the
									shipment of samples scheduled to arrive at
									any of the Hematogenix® laboratories.
									Oversight of shipments allows us to modify
									staffing in instances when there are
									unforeseen courier delays.
								</p>
							</div>
						</Col>
						<Col md={{ span: 4, offset: 2 }}>
							<div className="text-content pe-2">
								<h2
									className="mb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Non-Study Specific Material/Supply Requests
								</h2>

								<p
									className=""
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									Material requests are easy, and streamlined
									via our kit and supply request form that is
									available on-line.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default Logistics;
