import React from "react";
import "./Style.css";
import TitleHeader from "../../common/TitleHeader/TitleHeader";
import { Col, Row } from "react-bootstrap";

function Processes() {
	return (
		<>
			<div className="block-inner gray-pink-bg">
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
									Workflow 24 is committed to providing the
									highest level of quality services compliant
									with all laws, rules, and applicable
									regulations.
								</h2>
								<p>
									Workflow 24 is at the forefront of biomarker
									assay development, from early exploratory
									markers to personalized markers for
									companion diagnostic testing. The scientific
									team has extensive experience evaluating
									custom biomarkers for different disease
									indications and sample types, while
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
			</div>
		</>
	);
}

export default Processes;
