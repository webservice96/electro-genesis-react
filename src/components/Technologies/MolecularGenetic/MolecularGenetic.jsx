import React from "react";
import "./Style.css";
import { Col, Row } from "react-bootstrap";
import TechnologiesTitle from "../../common/TechnologiesTitle/TechnologiesTitle";

function MolecularGenetic() {
	return (
		<>
			<section className="block-inner Flow-Cytometry-section">
				<TechnologiesTitle title="Molecular Genetics" />
				<div className="content-text-part max-width">
					{/* text and image row */}
					<Row>
						<Col
							md={5}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<div className="flowcy_image-box">
								<img
									src="/assets/img/technology/Illumina.png"
									alt="image"
								/>
								<div className="image-caption mb-1">
									<span className="pt-5">
										Illumina NextSeq 550Dx
									</span>
								</div>
							</div>
						</Col>

						<Col
							md={{ span: 6, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<h3
								className="flowcy_description"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								The Molecular Genetics Department at
								Hematogenix® offers a vast array of molecular
								diagnostic tests to facilitate patient care.
							</h3>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Our molecular assays are an excellent choice to
								stratify patients and identify those who are
								likely to benefit from certain drugs in order to
								improve patient outcome and avoid unnecessary
								risks and complications.
							</p>

							<p
								className="mt-5 pe-5"
								data-aos="fade-up"
								data-aos-duration="2000"
							>
								Our molecular assays are validated in-house to
								ensure the highest level of quality and superb
								patient outcome. We offer a variety of tests
								across many platforms including many FDA
								approved companion diagnostic assays. Our
								scientific experts can assist you in selecting
								the most appropriate assay for your clinical
								trial. Additionally, our scientists can work
								with you to design and validate custom assays
								for your biomarker of interest.
							</p>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.1</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Molecular Genetics</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Diseases-section">
				<TechnologiesTitle title="Diseases" />
				<div className="content-text-part max-width mb-5">
					{/* text and image row */}
					<Row>
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<ul className="underline-text mt-5">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div>Myeloid</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div>Lymphoid</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div>Myeloma (MM)</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div>Solid Tumors</div>
								</li>
							</ul>
						</Col>
						<Col
							md={{ span: 7, offset: 1 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<div className="flowcy_image-box margin-top-lass">
								<img
									src="/assets/img/technology/lab-test-moluc.png"
									alt="image"
								/>
							</div>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.2</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Diseases</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner platform-section">
				<TechnologiesTitle title="Platforms" />
				<div className="content-text-part max-width">
					<Row className="pb-5 borderd border-bottom border-1 border-dark">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-up"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">
								Next-Gen Sequencing (NGS)
							</h3>
						</Col>
						<Col md={8}>
							<Row>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/Illumina.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Illumina NextSeq 550Dx</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4, offset: 0 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/Illumina-platform.png"
											alt="image"
										/>
										<div className="image-caption Platforms-img-caption">
											<span>Illumina MiSeqDx</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row className="py-5 borderd border-bottom border-1 border-dark align-items-center">
						<Col
							md={{ span: 6, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">
								Sanger Sequencing and Fragment Analysis
							</h3>
						</Col>
						<Col md={5}>
							<Row className="justify-content-end">
								<Col md={{ span: 8 }}>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/Genome.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Genome GEXP</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className="py-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<h3 className="flowcy_description">RT-PCR</h3>
						</Col>
						<Col
							md={8}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<Row>
								<Col
									md={{ span: 4 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/fast-dx.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>ABI 7500 Fast & FastDx</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/cobas.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Cobas z 480</span>
										</div>
									</div>
								</Col>
								<Col
									md={{ span: 4 }}
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<div className="flowcy_image-box">
										<img
											src="/assets/img/technology/qlagen.png"
											alt="image"
										/>
										<div className="Platforms-img-caption image-caption">
											<span>Qiagen Rotor-Gene Q</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.3</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Platforms</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Assays-section">
				<TechnologiesTitle title="Assays" />
				<div className="content-text-part max-width">
					<Row className="pb-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<p>
								Our scientific experts can assist you in
								selecting the most appropriate assay for your
								clinical trial. Additionally, our scientists can
								work with you to design and validate custom
								assays for your biomarker of interest.
							</p>
						</Col>
						<Col
							md={{ span: 4, offset: 3 }}
							data-aos="fade-left"
							data-aos-duration="2000"
						>
							<ul className="underline-text margin-top-lass">
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>MRD Assessment</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Mutational Analysis</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>IVD</div>
								</li>
								<li
									className="underline-item mb-3 pb-3"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div>Clonality</div>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.4</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Assays</span>
						</div>
					</Col>
				</Row>
			</section>

			<section className="block-inner Sample-type-section">
				<TechnologiesTitle title="Sample Types" />
				<div className="content-text-part max-width">
					<Row className="pb-5">
						<Col
							md={{ span: 4, offset: 0 }}
							data-aos="fade-right"
							data-aos-duration="2000"
						>
							<p className="pt-5">
								Our scientific experts can assist you in
								selecting the most appropriate assay for your
								clinical trial. Additionally, our scientists can
								work with you to design and validate custom
								assays for your biomarker of interest.
							</p>
						</Col>
						<Col md={{ span: 6, offset: 1 }}>
							<Row className="list margin-top-lass">
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">
											Peripheral Blood
										</span>
									</div>
								</Col>
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">
											Bone Marrow Aspirate
										</span>
									</div>
								</Col>
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">PBMC</span>
									</div>
								</Col>
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">BMMC</span>
									</div>
								</Col>
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">PET</span>
									</div>
								</Col>
								<Col
									xs={4}
									className="column item"
									data-aos="fade-left"
									data-aos-duration="2000"
								>
									<div className="inner">
										<span className="label">
											Pathologist-guided macrodissection
											from FFPE
										</span>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<Row
					className="pagination"
					data-aos="fade-up"
					data-aos-duration="2000"
				>
					<Col md={2}>
						<div className="number">
							<span>1.5</span>
						</div>
					</Col>
					<Col md={8}>
						<div className="text">
							<span>Sample Types</span>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}

export default MolecularGenetic;
