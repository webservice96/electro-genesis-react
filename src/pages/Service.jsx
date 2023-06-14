import React from 'react'
import Layout from '../Layout/Main/Layout'
import Banner from '../components/common/Banner/Banner'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../Service_Clinical_Technology.css"
import { ReadMoreButton } from '../components/common/ReadMoreButton/ReadMoreButton'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <>
    <Banner
        isBanner={true}
        title="Propelling Cancer Diagnostics & Treatments"
        video={"/assets/videos/services-hd.mp4"}
        isPost={true}
    />
    <Layout>
        <Container>
            <Row className='py-5'>
                <Col sm={{span:6,offset:3}} md={{span:8,offset:2}}>
                    <div className=' text-center'>
                        <div className="o-number mx-auto">
                            <span>01</span>
                        </div>
                        <h2 className='grand_title'>A Patient & Client-Centric Laboratory</h2>
                    </div>
                </Col>
            </Row>
            <Row className='py-5'>
                <Col md={4}>
                    <Card className='image_box text-center'>
                        <Card.Img variant="top" src="../../assets/img/service/img-1.png" />
                        <Card.Body>
                            <Card.Title className='fs-3'>Science</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='image_box text-center'>
                        <Card.Img variant="top" src="../../assets/img/service/img-2.png" />
                        <Card.Body>
                            <Card.Title  className='fs-3'>Service</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='image_box text-center'>
                        <Card.Img variant="top" src="../../assets/img/service/img-3.png" />
                        <Card.Body>
                            <Card.Title  className='fs-3'>Patient</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
             <Row className='py-5'>
                <Col sm={{span:6,offset:3}} md={{span:8,offset:2}}>
                    <div className=' text-center'>
                        <h2 className='grand_title'>Hematogenix® is proud to offer the highest standard of pharmaceutical research and diagnostic services.</h2>

                        <p className='pt-5'>Our laboratories are recognized as:</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6,offset:3}}sm={{span:10,offset:1}}>
                    <div className="">
						<div className="service-right-text">
							<ul className="underline-text">
								<li className="underline-item mb-3 pb-3">
									<div>CAP-Accredited</div>
									<img
										className="w-25"
										src="/assets/img/4.png"
										alt="Not found!"
									/>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>CLIA-Certified</div>
									<img
										className="w-25"
										src="/assets/img/5.png"
										alt="Not found!"
									/>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>GCP-Compliant</div>
								</li>
								<li className="underline-item mb-3 pb-3">
									<div>A Global Reference Laboratory</div>
								</li>
							</ul>
						</div>
					</div>
                </Col>
            </Row>
            <section className="our-claint position-relative">

            
            <Row className='py-5 '>
                <Col sm={{span:6,offset:3}} md={{span:8,offset:2}}>
                    <div className=' text-center'>
                        <div className="o-number mx-auto">
                            <span>02</span>
                        </div>
                        <h2 className='grand_title'>Our Clients</h2>
                        <h6 className='fs-6 w-75 mx-auto mt-2'>Hematogenix® globally provides services to pharma companies, biotech companies, diagnostic developers, and oncologists for diagnostics services.</h6>
                    </div>
                </Col>
                <ul class="claint-list">
                            <li class="item" >
                                <img src="/assets/img/technology/benchmark.png" alt="Histology / IHC"/> <span class="item-title">Histology / IHC</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item margin-bottom" >
                                <img src="/assets/img/technology/Illumina.png" alt="Molecular Genetics"/> <span class="item-title">Molecular Genetics</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item margin-bottom" >
                                <img src="/assets/img/technology/techno-1.png" alt="Flow Cytometry"/> <span class="item-title">Flow Cytometry</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item" >
                                <img src="/assets/img/technology/roche-cobas.png" alt="Histology / IHC"/> <span class="item-title">Histology / IHC</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                        </ul>
            </Row>
           </section>

            <Row className="d-flex row-cols-lg-3 row-cols-1 g-3 py-5 w-75 m-auto align-items-md-center align-self-center" data-aos="fade-up" data-aos-duration="1000">
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/b054344c93541ede6e0f43da26466c0d31b37aee-89x136.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/39264784a180e9c8f1849d09f85f9cef422fc8de-85x98.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
					<div className="col item">
						<div className="image-wrapper">
							<img
								src="https://cdn.sanity.io/images/6g05c3t1/production/87fd2d923b19cd52f0d1d953280214926b14012a-94x94.svg?auto=format&amp;max-w=250"
								alt="Not found!"
							/>
						</div>
						<div className="text-wrapper">
							<p className="text">
								Our Pathologists are world-renowned, with
								expertise in several subspecialties
							</p>
						</div>
					</div>
			</Row>
            {/* Integrated Results section */}
            <Row className='py-5'>
                <div class="row expanded align-center">
                    <div className=' text-center '>
                            <div className="o-number mx-auto">
                                <span>03</span>
                            </div>
                            <h2 className='grand_title'>Integrated Results</h2>
                        </div>
                    <div class="xxlarge-14 columns list-container">
                        <svg viewBox="0 0 1132 624" fill="none" xmlns="http://www.w3.org/2000/svg" class="lines-landscape">
                            <path
                                d="M1131 1C1131 209.211 878.041 378 566 378C462.469 378 365.442 359.419 282 326.983C113.949 261.657 1 140.13 1 1"
                                stroke="#909EA0"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-dasharray="2 10"
                                class="round-line"
                                data-svg-origin="1 1"
                            ></path>
                            <path
                                d="M553 407L553 623.201"
                                stroke="url(#paint0_linear)"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-dasharray="2 10"
                                class="straight-line"
                                data-v-4b2d19a0=""
                                data-svg-origin="553 407"
                            ></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="553" y1="454" x2="553" y2="583.852" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#909EA0"></stop>
                                    <stop offset="1" stop-color="#909EA0" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        
                        <ul class="results-list">
                            <li class="item" >
                                <img src="/assets/img/technology/benchmark.png" alt="Histology / IHC"/> <span class="item-title">Histology / IHC</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item margin-bottom" >
                                <img src="/assets/img/technology/Illumina.png" alt="Molecular Genetics"/> <span class="item-title">Molecular Genetics</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item margin-bottom" >
                                <img src="/assets/img/technology/techno-1.png" alt="Flow Cytometry"/> <span class="item-title">Flow Cytometry</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                            <li class="item" >
                                <img src="/assets/img/technology/roche-cobas.png" alt="Histology / IHC"/> <span class="item-title">Histology / IHC</span>
                                <ReadMoreButton lable="Viwe"/>
                            </li>
                        </ul>
                    </div>
                </div>

            </Row>
            <Row className='py-5'>
                <Col sm={{span:6,offset:3}} md={{span:8,offset:2}}>
                    <div className=' text-center'>
                        <h5 className='mini_title'>Experienced Pathologists / Hematopathologists review results and provide integrated reports for our clients.</h5>
                        <div className="results-cta-button-wrapper mx-auto">
                            <Link to="/">
                                <button>
                                <span>
                                    <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path
                                        d="M4.47278 0C3.42921 0.0098955 2.43171 0.437445 1.69723 1.18965C0.96276 1.94185 0.550736 2.95787 0.550781 4.01668V25.0386C0.550781 26.313 1.04975 27.5351 1.93792 28.4362C2.82609 29.3373 4.03071 29.8436 5.28678 29.8436H13.1308C13.7098 30.9033 14.5068 31.8243 15.4676 32.5439C16.4284 33.2636 17.5306 33.765 18.6994 34.0143C19.8681 34.2636 21.076 34.2548 22.2411 33.9885C23.4062 33.7223 24.5012 33.2049 25.4518 32.4713L28.9298 36L30.4838 34.4234L27.0058 30.8947C27.8057 29.8415 28.348 28.6109 28.5883 27.3038C28.8286 25.9968 28.76 24.6505 28.388 23.3756C28.0161 22.1007 27.3515 20.9334 26.4487 19.9696C25.546 19.0058 24.4308 18.2729 23.1948 17.8311V5.74348H20.5308V0H4.47278ZM4.47278 2.25235H18.3108V5.74348H4.47278C4.05984 5.68188 3.68252 5.47165 3.4097 5.15118C3.13688 4.83071 2.98676 4.42137 2.98676 3.99791C2.98676 3.57446 3.13688 3.16512 3.4097 2.84465C3.68252 2.52418 4.05984 2.31395 4.47278 2.25235ZM26.4878 25.7518C26.4951 26.98 26.1423 28.1827 25.4743 29.2071C24.8063 30.2314 23.8532 31.0311 22.7362 31.5045C21.6192 31.978 20.3886 32.1038 19.2009 31.866C18.0132 31.6282 16.922 31.0375 16.066 30.169C15.21 29.3005 14.6278 28.1934 14.3934 26.9885C14.159 25.7835 14.283 24.535 14.7497 23.4017C15.2163 22.2683 16.0046 21.3014 17.0142 20.6236C18.0238 19.9459 19.2092 19.588 20.4198 19.5954C22.0261 19.6053 23.5639 20.257 24.6998 21.4095C25.8356 22.5619 26.4781 24.1221 26.4878 25.7518ZM20.9748 7.99583V17.3431H20.4198C19.1729 17.335 17.9404 17.6125 16.8139 18.1548C15.6874 18.6972 14.696 19.4904 13.9137 20.4754C13.1313 21.4604 12.578 22.6118 12.2951 23.8439C12.0122 25.0759 12.007 26.3568 12.2798 27.5912H5.24978C4.58249 27.5912 3.94254 27.3223 3.4707 26.8436C2.99886 26.3649 2.73378 25.7156 2.73378 25.0386V7.62044C3.27443 7.89194 3.86953 8.03325 4.47278 8.03337L20.9748 7.99583Z"
                                        fill="white"
                                    ></path>
                                    <path d="M17.6435 12.2754H6.0625V14.5277H17.6435V12.2754Z" fill="white"></path>
                                    </svg>
                                </span>
                                <span className='fs-5 text-white ms-2'>Full Hematogenix Capabilities</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout> 
    <Layout className='bg-gray-pink'>
        <div className='block-inner pt-5'>
            <h2 className='title'>
            <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
            <h1 className='title-text m-0 py-3'>Pathology Services</h1>
            <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
            </h2>
            <div className='content-text-part max-width'>
            <Row >
                <Col md={6}>
                    <div className="image-box margin-less">
                        <img className='w-75' src='/assets/img/b3af76.png' alt="image" />
                        <ul class="list w-75">
                            <li class="item"><span class="name">World-renowned pathologists with expertise in multiple subspecialties</span></li>
                            <li class="item"><span class="name">Full-time and employed in all global locations</span></li>
                            <li class="item"><span class="name">Available to serve as Principal Investigators and Consultants</span></li>
                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <h3 className="description mb-5">World-renowned pathologists with expertise in many different subspecialties lead Hematogenix® research studies, analyses, and integrated reporting.
                    </h3>
                    <div className="d-flex flex-column w-75">
                        <div className="col service-item ">
                            <div className="image">
                                <img
                                    className="w-75"
                                    src="/assets/img/technology/cytovysion.png"
                                    alt="Not found!"
                                />
                            </div>
                            <div className="image-text ms-3"><h6 className='fs-4'>Cytogenetics / FISH</h6>
                            <ReadMoreButton lable="More"/>
                            </div>
                        </div>
                        <div className="col service-item">
                            <div className="image">
                                <img
                                    className="w-75"
                                    src="/assets/img/technology/benchmark.png"
                                    alt="Not found!"
                                />
                            </div>
                            <div className="image-text ms-2"><h6 className='fs-4'>Histology / IHC</h6>
                            <ReadMoreButton lable="More"/>
                            </div>
                        </div>
                        <div className="col service-item">
                            <div className="image">
                                <img
                                    className="w-75"
                                    src="/assets/img/technology/digital-pathology.png"
                                    alt="Not found!"
                                />
                            </div>
                            <div className="image-text ms-2"><h6 className='fs-4'>Digital Pathology</h6>
                            <ReadMoreButton lable="More"/>
                            </div>
                        </div>
                        <div className="col service-item">
                            <div className="image">
                                <img
                                    className="w-75"
                                    src="/assets/img/technology/Illumina.png"
                                    alt="Not found!"
                                />
                            </div>
                            <div className="image-text ms-2"><h6 className='fs-4'>Molecular Genetics</h6>
                            <ReadMoreButton lable="More"/>
                            </div>
                        </div>
                    </div>
                    {/* <ReadMoreButton lable="More"/> */}
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
                    <span>Pathology Services</span>
                </div>
                </Col>
            </Row>
        </div>
    </Layout> 
    
    <Layout  className='bg-gray-pink mt-5'>
        <div className='block-inner  pt-5'>
            <h2 className='title'>
            <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
            <h1 className='title-text m-0 py-3'>Test Offering</h1>
            <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
            </h2>
            <div className='content-text-part max-width'>
            {/* text and image row */}
            <Row >
                <Col md={6}>
                <h3 className="Companion_description mb-4">Biomarkers</h3>

                <p className=' pe-5'>HEMATOGENIX® IS AT THE FOREFRONT OF BIOMARKER ASSAY DEVELOPMENT, FROM EARLY EXPLORATORY MARKERS TO PERSONALIZED MARKERS FOR COMPANION DIAGNOSTIC TESTING.The scientific team has extensive experience evaluating custom biomarkers for different disease indications and sample types, while utilizing multiple technologies and methodologies. Some examples of biomarker assays developed at Hematogenix include: PD-L1, BCMA, and FLT3.</p>
                </Col>
                <Col md={6}>
                <div className="Companion_image-box">
                    <img className='w-75' src='/assets/img/2.png' alt="image" />
                </div>
                </Col>
            </Row>
            <Row className='align-items-end pb-5'>
             <Col md={6}>
                <h3 className="Companion_description mb-4">Digital Pathology</h3>

                <p className=' pe-5'>THE USE OF DIGITAL PATHOLOGY PROVIDES NEW OPPORTUNITIES FOR SCIENTIFIC AND MEDICAL ADVANCEMENTS.Our expert knowledge and global thinking propelled us to adopt Digital Pathology, which integrates efficient high throughput platforms and quality by design procedures. We utilizes smart systems that are empowered by a sophisticated in-house IT infrastructure to manage the</p>
                </Col>
                <Col md={6}>
                <p className=' pe-5'>images, and automate the processes of organizing, archiving, and retrieving the slides. We offer a flexible and broad range of digital pathology services, including slide scanning (with 20x and 40x magnification), archiving, and storage.</p>
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
                    <span>Test Offering</span>
                </div>
                </Col>
            </Row>
        </div>
    </Layout>
    <Layout  className='bg-gray-pink mt-5'>
        <div className='block-inner  pt-5'>
            <h2 className='title'>
            <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
            <h1 className='title-text m-0 py-3'>Assay Development</h1>
            <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
            </h2>
            <div className='content-text-part max-width'>
            {/* text and image row */}
            <Row >
                <Col md={6}>
                <div className="Companion_image-box margin-less">
                    <img className='w-100' src='/assets/img/3.png' alt="image" />
                </div>
                </Col>
                <Col md={6}>
                <h3 className="Companion_description mb-4">Hematogenix®’s scientific experts are well equipped to develop an assay that is specific to your clinical trial.</h3>

                <p className=' pe-5 pb-3'>We have extensive experience evaluating biological targets in multiple disease areas. Our team will ensure that an assay is optimized by evaluating multiple biomarkers and assay conditions, while using the most appropriate platform. Assays then undergo stringent validation and QA processes to ensure the assay is robust, provides accurate results, and is reproducible across multiple instruments and our global (US, EU, Asia-Pacific, and China) laboratories. Our utilization of fresh patient samples (within hours of sample collection) for validation provides us with a unique advantage to assess sample stability from Day 0. These samples are also instrumental in better understanding the performance of the assay, which may not be apparent with cell lines or other contrived samples.<br/> We have a proven track record validating and utilizing our assays for multiple Phase 3 registrational trials. Hematogenix has also co-developed several assays as a companion diagnostic.</p>
                </Col>
                
            </Row>
            
            </div>
            <Row className="pagination">
                <Col md={2}>
                <div className="number">
                    <span>1.3</span>
                </div>
                </Col>
                <Col md={8}>
                <div className="text">
                    <span>Assay Development</span>
                </div>
                </Col>
            </Row>
        </div>
    </Layout>
    </>
  )
}

export default Service;



