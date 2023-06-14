import React from "react";
import Banner from "../components/common/Banner/Banner";
import Layout from "../Layout/Main/Layout";
import { Col, Container, Row } from "react-bootstrap";
import"../components/Hematopathology/Style.css"
import { BorderAnimation } from "../components/common/BorderAnimation/BorderAnimation";
import { ReadMoreButton } from "../components/common/ReadMoreButton/ReadMoreButton";

function Expertise() {
	BorderAnimation()
	return (
		<>
			<Banner
				title="Transforming Discoveries One Day at a Time"
				video={"https://hematogenix.sfo3.cdn.digitaloceanspaces.com/Hematogenix/video/expertise/expertise-hd.mp4"}
			/>
			<Layout>
			  <Container className="">
					<Row className="py-5 mx-auto z-index">
						<Col md={8} lg={{span:8,offset:2}} className={''}>
							<h3 className="description expartise">Our scientific experts at Hematogenix® have the experience and tools that allow them to be highly responsive to the needs of our clients.</h3>
						</Col>
					</Row>
			  </Container>
			</Layout>
			{/* Hematopathology section */}
			<Layout className='bg-gray-pink'>
				<div className='block-inner pt-5'>
					<h2 className='title'>
					<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
					<h1 className='title-text m-0 py-3'>Hematopathology</h1>
					<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
					</h2>
					<div className='content-text-part max-width'>
					<Row >
						<Col md={6}>
							<h3 className="description mb-5">We provide specialized services and extensive experience to provide accurate diagnosis and monitoring of hematological disorders, including AML, CLL, MM, and others.
							</h3>
							<ReadMoreButton/>
						</Col>
						<Col md={6}>
							<div className="image-box">
								<img src='/assets/img/expertise/hematopathology.png' alt="image" />
							</div>
						</Col>
					</Row>
					
					</div>
					<Row className="pagination mx-3 pb-3">
						<Col md={2}>
						<div className="number">
							<span>1.2</span>
						</div>
						</Col>
						<Col md={8}>
						<div className="text ms-3">
							<span>Hematopathology</span>
						</div>
						</Col>
					</Row>
				</div>
			</Layout>

			{/* solid tumor pathology section */}
			<Layout className='bg-gray-pink mt-2'>
				
				<div className='block-inner pt-5'>
					<h2 className='title'>
					<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
					<h1 className='title-text m-0 py-3'>Solid Tumor Pathology</h1>
					<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
					</h2>
					<div className='content-text-part max-width'>
					{/* text and image row */}
					<Row >
						<Col md={7}>
						<div className="SolidTumor-image-box">
							<img src='/assets/img/expertise/solid-tumor-pathology.png' alt="image" />
						</div>
						</Col>
						<Col md={5}>
						<h3 className="solidTitle mb-5">Our pathologists are world-renowned experts in multiple subspecialties.</h3>
							<ReadMoreButton/>
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
							<span>Solid Tumor Pathology</span>
						</div>
						</Col>
					</Row>
				</div>
			</Layout>

			{/* Minimal Residual Disease section */}
			<Layout className='bg-gray-pink mt-2'>
				<div className='block-inner pt-5'>
				<h2 className='title'>
				<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
				<h1 className='title-text m-0 py-3'>Minimal Residual Disease (MRD)</h1>
				<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
				</h2>
				<div className='content-text-part max-width'>
				{/* text and image row */}
				<Row >
					<Col md={5}>
					<h3 className="Minimal_description">We are leaders in the field when it comes to monitoring measurable/minimal residual disease (MRD), which can be a deciding factor in a patient's treatment regimen.</h3>

					<ReadMoreButton/>
					</Col>
					<Col md={7}>
					<div className="image-box">
						<img src='/assets/img/expertise/minimal-residual-disease.png' alt="image" />
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
					<div className="text">
						<span>Minimal Residual Disease (MRD)</span>
					</div>
					</Col>
				</Row>
			</div>
			</Layout>
			{/* Companion Diagnostics section */}
			<Layout className='bg-gray-pink mt-2'>
			  <div className='block-inner pt-5'>
				<h2 className='title'>
				<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
				<h1 className='title-text m-0 py-3'>Companion Diagnostics (CDx)</h1>
				<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
				</h2>
				<div className='content-text-part max-width'>
				{/* text and image row */}
				<Row >
					<Col md={6}>
					<h3 className="Companion_description mb-5">Our mission is to advance the reach of precision medicine to all patients.</h3>
					<ReadMoreButton/>
					</Col>
					<Col md={6}>
					<div className="Companion_image-box">
						<img src='/assets/img/expertise/companion-diagnostics.png' alt="image" />
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
					<div className="text">
						<span>Companion Diagnostics (CDx)</span>
					</div>
					</Col>
				</Row>
			</div>
			</Layout>
			{/* Next-Generation Sequencing section */}
			<Layout className='bg-gray-pink mt-2'>
			  <div className='block-inner pt-5'>
				<h2 className='title'>
					<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
					<h1 className='title-text m-0 py-3'>Next-Generation Sequencing (NGS)</h1>
					<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
					</h2>
					<div className='content-text-part max-width'>
					{/* text and image row */}
					<Row >
						<Col md={6}>
						<h3 className="Companion_description mb-5">Along with our expert scientists and biostatisticians, our NGS services will assist you with better understanding the molecular characteristics of cancer cells.</h3>
						<ReadMoreButton/>
						</Col>
						<Col md={6}>
						<div className="Companion_image-box">
							<img src='/assets/img/expertise/next-gene-sequencing.png' alt="image" />
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
						<div className="text">
							<span>Next-Generation Sequencing (NGS)</span>
						</div>
						</Col>
					</Row>
			</div>
			</Layout>
			{/* Immuno-Oncology section */}
			<Layout className='bg-gray-pink mt-2'>
				<div className='block-inner pt-5'>
					<h2 className='title'>
						<span id='title-border-top' className='title-border-top border border-dark d-block'></span>
						<h1 className='title-text m-0 py-3'>Immuno-Oncology</h1>
						<span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
						</h2>
						<div className='content-text-part max-width'>
						{/* text and image row */}
						<Row >
							<Col md={6}>
							<div className="image-box">
								<img src='/assets/img/expertise/immuno-oncology.png' alt="image" />
							</div>
							</Col>
							<Col md={5}>
							<h3 className="solidTitle mb-5">As immuno-oncology ushers in a new era in the fight against cancer, we also strive to provide innovative services to help our clients better understand how the immune system can be channeled to eradicate cancer cells.</h3>
							<ReadMoreButton/>
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
			</Layout>
		</>
	);
}

export default Expertise;
