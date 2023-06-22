import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function CompanionDiagnosticsClinical() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"COMPANION DIAGNOSTICS"} />

				<div className="mt-4">
					<Row className="align-items-center">
						<Col
							md={{ span: 6 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="text-content pe-0 ms-3">
								<h2 className="mb-3">
									Our mission is to advance the reach of
									precision medicine to all patients.
								</h2>

								<p>
									We have extensive experience in developing
									Companion Diagnostics (CDx) through our
									partnerships with pharmaceutical sponsors
									and diagnostic manufacturers. We work
									closely with our partners from early stages
									of assay development to CDx
									commercialization. In addition, we offer
									multiple CDx assays utilizing our
									exceptional proficiency in the areas of
									immunohistochemistry and molecular genetics.
								</p>
							</div>
						</Col>
						<Col
							md={{ span: 5, offset: 0 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="image-div mb-3 ">
								<img
									className="rounded-3 w-75 mx-auto"
									src="/assets/img/2.png"
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

export default CompanionDiagnosticsClinical;
