import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import { BorderAnimation } from '../common/BorderAnimation/BorderAnimation'

function CompanionDiagnostics() {

  BorderAnimation()
  
  return (
    <>
      <div className='block-inner'>
        <h2 className='title'>
          <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
          <h1 className='title-text m-0 py-3'>Companion Diagnostics (CDx)</h1>
          <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
        </h2>
        <div className='content-text-part max-width'>
          {/* text and image row */}
          <Row >
            <Col md={6}>
              <h3 className="Companion_description">Our mission is to advance the reach of precision medicine to all patients.</h3>

              <p className='mt-5 pe-5'>We have extensive experience in developing Companion Diagnostics (CDx) through our partnerships with pharmaceutical sponsors and diagnostic manufacturers. We work closely with our partners from early stages of assay development to CDx commercialization. In addition, we offer multiple CDx assays utilizing our exceptional proficiency in the areas of immunohistochemistry and molecular genetics.</p>
            </Col>
            <Col md={6}>
              <div className="Companion_image-box">
                <img src='/public/assets/img/expertise/companion-diagnostics.png' alt="image" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="Companin_content-box mb-3">
              <h4 className="block-title">ASSAYS</h4>
              <div className="List-box ">
                <li className="item">FDA-Approved CDx Assays</li>
                <li className="item">Custom Assays and Processes for CDx Development</li>
              </div>
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
    </>
  )
}

export default CompanionDiagnostics;