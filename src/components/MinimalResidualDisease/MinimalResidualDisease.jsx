import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import { BorderAnimation } from '../common/BorderAnimation/BorderAnimation'

function MinimalResidualDisease() {
  
 
  BorderAnimation()

  return (
    <>
      <div className='block-inner'>
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

              <p className='Minimal_paragrap mt-5 pe-5'>Multiple studies have demonstrated that patients with no MRD detected have better overall survival (OS) and progression-free survival (PFS) rates, when compared to patients with detected MRD. MRD detection requires highly sensitive methods to assess these hidden cells. Hematogenix has validated multiple and complementary MRD assays by NGS and Flow Cytometry for AML and B-cell malignancies (e.g., CLL, MM, and others).</p>
            </Col>
            <Col md={7}>
              <div className="image-box">
                <img src='/public/assets/img/expertise/minimal-residual-disease.png' alt="image" />
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
                <span>Hematopathology</span>
              </div>
            </Col>
        </Row>
      </div>
    </>
  )
}

export default MinimalResidualDisease