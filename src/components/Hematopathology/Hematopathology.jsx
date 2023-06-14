import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import { BorderAnimation } from '../common/BorderAnimation/BorderAnimation'
// import {image}from'../../../public/assets/img/expertise/hematopathology.png'

function Hematopathology() {
  BorderAnimation()
  return (
    <>
      <div className='block-inner '>
        <h2 className='title'>
          <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
          <h1 className='title-text m-0 py-3'>Hematopathology</h1>
          <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
        </h2>
        <div className='content-text-part max-width'>
          {/* text and image row */}
          <Row >
            <Col md={6}>
              <h3 className="description">We provide specialized services and extensive experience to provide accurate diagnosis and monitoring of hematological disorders, including AML, CLL, MM, and others.</h3>
            </Col>
            <Col md={6}>
              <div className="image-box">
                <img src='/public/assets/img/expertise/hematopathology.png' alt="image" />
              </div>
            </Col>
          </Row>
          {/* only 2 column text row */}
          <Row >
            <div className="hematolog-content-box">
              <h4 className="block-title">AML</h4>
              <div className="pragraph d-flex justify-content-center">
                <p className='pe-2 w-50'><strong>Acute Myeloid Leukemia (AML)</strong> is a group of diseases of the bone marrow and is considered one of the most difficult hematological disorders to characterize due to its complex and heterogeneous nature. Hematogenix’s experienced hematopathologists are adept at interpreting AML, reviewing thousands of cases annually. AML testing is performed at Hematogenix by flow cytometry, molecular genetics, histology, FISH, and cytogenetics. We have validated multiple flow cytometry assays for immunophenotyping, receptor occupancy,and minimal/measurable residual disease (MRD) detection for AML.</p>
                <p className='ps-2 w-50'>Our AML MRD flow assay is in alignment with the guidelines set forth by the European LeukemiaNet MRD Working party. We have also validated a highly-sensitive, comprehensive, 73-gene myeloid panel for AML MRD detection by NGS. These assays are available at all of our locations (US, EU, Asia-Pacific, and China) and have been used for multiple phase 3 registrational clinical trials, with single-subject reports provided to the sites to support treatment decisions.</p>
              </div>
            </div>
          </Row>
          <Row >
             <div className="hematolog-content-box margin-left">
              <h4 className="block-title">CLL</h4>
              <div className="pragraph d-flex justify-content-center">
                <p className='w-50 pe-2'>Hematogenix offers multiple testing methodologies for <strong >Chronic Lymphocytic Leukemia (CLL) </strong>by flow cytometry, molecular genetics, histology, FISH, and cytogenetics. Some biomarkers include CD19, CD5, CD49d, CD47, Kappa, Lambda, cytoplasmic ZAP-70, as well as other custom biomarkers. We have validated multiple flow cytometry assays for immunophenotyping, receptor occupancy, and minimal/measurable residual disease (MRD) detection for CLL. </p>

                <p className=' w-50 ps-2'>The CLL MRD assay by flow cytometry follows the European Research Initiative on CLL (ERIC) guidelines. Hematogenix also offers an MRD assay by NGS for several B-cell disorders, including CLL. These assays are available at all of our locations (US, EU, Asia-Pacific, and China) and have been used for multiple phase 3 registrational clinical trials, with single-subject reports provided to the sites to support treatment decisions.</p>
              </div>
            </div>
          </Row>
          <Row >
             <div className="hematolog-content-box mb-5">
              <h4 className="block-title">MM</h4>
              <div className="pragraph d-flex justify-content-center">
                <p className='w-50 pe-2'> <strong >Multiple Myeloma (MM) </strong> testing at Hematogenix is available by flow cytometry, molecular genetics, histology, FISH, and cytogenetics. Some biomarkers include CD38, CD138, cytoplasmic Kappa, cytoplasmic Lambda, PD-L1, BCMA, as well as other custom biomarkers. Hematogenix has evaluated multiple BCMA clones and has established and validated robust assays by both IHC and flow cytometry. We have also validated multiple flow cytometry assays for immunophenotyping, receptor occupancy,</p>

                <p className=' w-50 ps-2'>and minimal/measurable residual disease (MRD) detection for MM. The MM MRD assay by flow cytometry follows the EuroFlow guidelines and protocols. Hematogenix also offers an MRD assay by NGS for several B-cell disorders, including MM. These assays are available at all of our locations (US, EU, Asia-Pacific, and China) and have been used for multiple phase 3 registrational clinical trials, with single-subject reports provided to the sites to support treatment decisions.</p>
              </div>
            </div>
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
    </>
  )
}

export default Hematopathology