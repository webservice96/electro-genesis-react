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
				</div>
			</div>
		</>
	);
}

export default Logistics;
