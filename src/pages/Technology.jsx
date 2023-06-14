import React from 'react'
import Layout from '../Layout/Main/Layout'
import Banner from '../components/common/Banner/Banner'
import { Card, Col, Container, Row } from 'react-bootstrap'
import "../Service_Clinical_Technology.css"
import { ReadMoreButton } from '../components/common/ReadMoreButton/ReadMoreButton'
import { Link } from 'react-router-dom'

function Technology() {
  return (
     <>
    <Banner
        isBanner={true}
        title="Bringing Precision Medicine to Everyone"
        video={"/assets/videos/technologies-hd.mp4"}
        isPost={true}
    />
    <Layout>
        <Container>
            <Row className='py-5'>
                <Col sm={{span:6,offset:3}} md={{span:8,offset:2}}>
                    <div className=' text-center py-5'>
                        <h2 className='grand_title text-md-start'>Our laboratories feature the most advanced instruments available. We continuously invest in state-of-the-art technologies to provide the highest quality of data to our clients.</h2>
                    </div>
                </Col>
            </Row>
        </Container>
		<section className='card-section pt-5'>
		<div className="card-wreper">
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>01</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Flow Cytometry</h2>
							<h3 class="subtitle">— We deliver a vast array of molecular diagnostic tests to facilitate patient care.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image ">
						<img src="/assets/img/technology/techno-1.png" alt="" />
					</div>
				</div>
			</div>
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>02</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Molecular Genetics</h2>
							<h3 class="subtitle">— We provide an in-depth look at diseases at the cellular level.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image ">
						<img src="/assets/img/technology/Illumina.png" alt="" />
					</div>
				</div>
			</div>
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>03</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Cytogenetics / FISH</h2>
							<h3 class="subtitle">— We offer cytogenetic testing for the detection of chromosomal abnormalities.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image">
						<img src="/assets/img/technology/cytogenetic-1.png" alt="" />
					</div>
				</div>
			</div>
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>04</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Histology / IHC</h2>
							<h3 class="subtitle">— We provide a full range of anatomic pathology tests and services.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image">
						<img src="/assets/img/technology/benchmark.png" alt="" />
					</div>
				</div>
			</div>
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>05</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Immunoassays & Clinical Chemistry</h2>
							<h3 class="subtitle">— We offer supportive biomarker testing by utilizing fully automated systems with rapid turn-around-times.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image">
						<img src="/assets/img/technology/roche-cobas.png" alt="" />
					</div>
				</div>
			</div>
			<div className="card-item position-relative">
				<span class="top-line"></span>
				<span class="right-line"></span>
				<div className="card-content d-flex align-items-center">
					<div className="card-text">
						<div className="o-number text-center mt-0">
                            <span>06</span>
                        </div>
						<div className='card-title'>
							<h2 className='grand_title mb-3'>Digital Pathology</h2>
							<h3 class="subtitle">— We believe that digital pathology is the future of pathology.</h3>
							<ReadMoreButton lable="More"/>
						</div>
					</div>
					<div className="card-image">
						<img src="/assets/img/technology/digital-pathology.png" alt="" />
					</div>
				</div>
			</div>
			
		</div>
		</section>
		<section className='support-bg'>
			<div className='d-flex position-relative'>
				<div className='contat_us_text bg-white border-right-runded d-flex align-items-center'>
				 <div className="left-textAnd-button w-75 mx-auto text-center">
						<h2 className='grand_title '>We are here to support you.</h2>
						<h6 className='fs-5'>Contact us to find out how our services can help achieve your goals.</h6>
						<div className='d-flex py-5 align-items-center justify-content-evenly'>
							<ReadMoreButton lable="Contact us"/>
							<span className=''>A member of our team will contact you shortly.</span>
						</div>
					</div>
				</div>
				<div className="video-div">
					<div className="w-100 h-100">
						<video autoPlay muted="muted" loop="loop" className='w-100 h-100'>
							<source type="video/mp4" src="/assets/videos/promo-block-small-uhd.mp4" />
						</video>
					</div>
				</div>
			</div>
		</section>
    </Layout> 
    </>
  )
}

export default Technology;