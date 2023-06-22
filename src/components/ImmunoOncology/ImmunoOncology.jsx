import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import { BorderAnimation } from "../common/BorderAnimation/BorderAnimation";
import TitleHeader from "../common/TitleHeader/TitleHeader";

function ImmunoOncology() {
	BorderAnimation();
	return (
		<>
			<div className="block-inner gray-pink-bg">
				<TitleHeader title={"Immuno-Oncology"} />
				<div className="content-text-part">
					{/* text and image row */}
					<Row>
						<Col
							md={6}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="image-box">
								<img
									src="/assets/img/expertise/immuno-oncology.png"
									alt="image"
								/>
							</div>
						</Col>
						<Col
							md={5}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3 className="solidTitle">
								As immuno-oncology ushers in a new era in the
								fight against cancer, we also strive to provide
								innovative services to help our clients better
								understand how the immune system can be
								channeled to eradicate cancer cells.
							</h3>
						</Col>
					</Row>
					{/* only 2 column text row */}
					<Row data-aos="fade-right" data-aos-duration="2000">
						<Col md={4}>
							<div className="mb-5">
								<p>
									Our understanding of the innate and adaptive
									immune responses has led to the development
									of key therapies in the fight against
									cancer. Specifically, cancer immunotherapy
									focuses on activation of the immune system
									to recognize and kill cancer cells. Some of
									the immunotherapies currently being adopted
									in clinical trials include targeting of
									inhibitory receptors (e.g., PD-L1 and
									CTLA4), utilizing bi-specific antibodies,
									and incorporating adoptive cell transfers
									(e.g., Chimeric Antigenic Receptor (CAR) T
									Cells). As biopharmaceutical companies
									continue to design and develop
									immunotherapies, the need to assess the
									efficacies of these therapies grows. The
									Hematogenix® clinical, scientific and
									project management teams serve our biopharma
									partners as they advance these therapies.
								</p>
								<p>
									Hematogenix has been, and continues to be,
									involved in several clinical trials
									monitoring key biomarkers, such as PD-L1 and
									BCMA, and changes to the immune response
									during these trials. The BCMA IHC assay has
									been validated on FFPE tissue blocks,
									including decalcified bone marrow core
									biopsies as a single stain and as a dual
									stain with other biomarkers such as CD138.
									Multiple BCMA flow cytometry assays have
									also been validated on bone marrow aspirate,
									alone or as part of a broader multiple
									myeloma minimal residual disease (MRD)
									panel.
								</p>
							</div>
						</Col>
						<Col md={4}>
							<div>
								<p>
									Hematogenix is also one of the leading
									global facilities for PD-L1 IHC testing,
									utilizing all major PD-L1 clones (Ventana
									SP263, Ventana SP142, Dako 22C3, Dako 28-8
									and Dako 73-10) for diagnostics, clinical
									trials, and reproducibility studies.
									Multiple diagnostic PD-L1 tests are being
									used to understand how PD-L1 expression
									predicts responses to therapies. It is vital
									to compare these assays through concordance
									studies in various indications. Through
									collaborations with major pharmaceutical
									companies, we have published concordance
									studies on commercially available PD-L1
									clones in respected peer reviewed journals,
									in an effort to provide insight to
									harmonization of the PD-L1 diagnostic
									assays. Hematogenix also provides additional
									comprehensive assays by flow cytometry to
									assess the immune response, with targeted
									focus on PD-L1 in multiple disease types.
								</p>
								<p>
									As immunotherapies continue to develop,
									Hematogenix continues to grow with the
									field. We currently provide services for
									CAR-T cell clinical trials and look forward
									to providing this service for new and
									upcoming trials.
								</p>
							</div>
						</Col>
						<Col md={3}>
							<div className="">
								<h4 className="publications-title">
									PD-L1 Publications:
								</h4>
								<ul className="publications-list">
									<li className="item">
										<span className="name">
											Agreement Between Programmed Cell
											Death Ligand-1 Diagnostic Assays
											Across Multiple Protein Expression
											Cut-offs in Non-Small Cell Lung
											Cancer
										</span>
										<span className="date">
											Published 10 January 2017
										</span>
									</li>
									<li className="item">
										<span className="name">
											Concordance of tumor cell (TC) and
											immune cell (IC) staining with
											Ventana SP142, Ventana SP263, Dako
											28-8 and Dako 22C3 PD-L1 IHC tests
											in NSCLC patient samples
										</span>
										<span className="date">
											Journal of Clinical Oncology, 2017
										</span>
									</li>
									<li className="item">
										<span className="name">
											Concordance of Tumour and Immune
											Cell staining with SP142, SP263,
											22C3 and 28-8 PD-L1 tests across
											different Cancer Types
										</span>
										<span className="date">
											SITC, November 2017
										</span>
									</li>
									<li className="item">
										<span className="name">
											Concordance among four commercially
											available, validated programmed cell
											death ligand-1 assays in urothelial
											carcinoma
										</span>
										<span className="date">
											Diagnostic Pathology, December 2019
										</span>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
				</div>
				<Row className="pagination">
					<Col md={2}>
						<div className="number">
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text ms-3">
							<span>Immuno-Oncology</span>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default ImmunoOncology;
