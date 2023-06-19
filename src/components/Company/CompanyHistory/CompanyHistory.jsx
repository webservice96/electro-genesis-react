import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import SectionNumber from "../../common/SectionNumber/SectionNumber";
import CompanyHistoryBox from "../CompanyHistoryBox/CompanyHistoryBox";

const histories = [
	{
		imgSrc: "https://hematogenix.com/_nuxt/image/f26e5f.auto",
		year: "2007",
		historyDec:
			"Hematogenix® is founded in Chicago, USA by Dr. Hytham Al-Masri with only two employees and a leased space of 2,000 sq. ft.",
	},
	{
		imgSrc: null,
		year: "2008",
		historyDec:
			"Hematogenix launches Flow Cytometry and Molecular Departments, receives and reports first patient sample, and is awarded CAP accreditation & CLIA certification.",
	},
	{
		imgSrc: "https://hematogenix.com/_nuxt/image/2c9205.auto",
		year: "2009",
		historyDec:
			"Hematogenix expands its workspace to 6,000 sq. ft., adds 20 full-time employees, and launches Cytogenetics Department.",
	},
	{
		imgSrc: "https://hematogenix.com/_nuxt/image/03acbb.auto",
		year: "2010",
		historyDec:
			"Hematogenix doubles its workforce, launches Histology Department, and Diagnostic Services expand to reach the entire United States.",
	},
	{
		imgSrc: null,
		year: "2012",
		historyDec:
			"Hematogenix designs and constructs a dynamic facility spanning 32,000 sq. ft. and launches Pharma Services division, R&D, and Biomarker Services.",
	},
	{
		imgSrc: null,
		year: "2014",
		historyDec:
			"Hematogenix expands internationally into Manchester, UK with Pharma Services extending to sponsors globally across multiple platforms and technologies.",
	},
	{
		imgSrc: null,
		year: "2016",
		historyDec:
			"Hematogenix receives CAP accreditation in Manchester, UK, employing over 100 professionals worldwide.",
	},
	{
		imgSrc: null,
		year: "2017",
		historyDec:
			"Hematogenix® is recognized as a global leader in immuno-oncology and PD-L1 testing, and launches Next-Generation Sequencing (NGS).",
	},
	{
		imgSrc: null,
		year: "2018",
		historyDec:
			"Hematogenix celebrates its 10th anniversary, with nearly 200 employees worldwide, and introduces an enhanced Digital Pathology solution.",
	},
	{
		imgSrc: "https://hematogenix.com/_nuxt/image/7bc77c.auto",
		year: "2019",
		historyDec:
			"Hematogenix expands into Kuala Lumpur, Malaysia and Shanghai, China.",
	},
	{
		imgSrc: "https://hematogenix.com/_nuxt/image/8445ad.auto",
		year: "2020",
		historyDec:
			"Hematogenix expands its services to include measurable/minimal residual disease (MRD) for Chronic Lymphocytic Leukemia (CLL) monitoring.",
	},
];

function CompanyHistory() {
	let historyCount = 0;
	return (
		<>
			<div className="company-history section-padding" id="history">
				<div className="container-fluid company-history-container">
					<Row data-aos="zoom-out-down" data-aos-duration="1000" data-aos-offset="200">
						<Col className="col-md-4">
							<SectionNumber
								mode="light"
								className="mb-3"
								textNumber={`04`}
							/>
							<h2 className="company-history-heading">
								The evolution of our company
							</h2>
						</Col>
					</Row>

					{histories.map((history) => {
						historyCount++;
						return (
							<CompanyHistoryBox
								key={history.year}
								history={history}
								count={historyCount}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default CompanyHistory;
