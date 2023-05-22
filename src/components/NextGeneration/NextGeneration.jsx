import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import { BorderAnimation } from '../common/BorderAnimation/BorderAnimation'

function NextGeneration() {
  BorderAnimation()
  
  return (
    <>
      <div className='block-inner'>
        <h2 className='title'>
          <span id='title-border-top' className='title-border-top border border-dark d-block'></span>
          <h1 className='title-text m-0 py-3'>Next-Generation Sequencing (NGS)</h1>
          <span id='title-border-bottom' className='title-border-bottom border border-dark d-block'></span>
        </h2>
        <div className='content-text-part max-width'>
          {/* text and image row */}
          <Row >
            <Col md={6}>
              <h3 className="Companion_description">Along with our expert scientists and biostatisticians, our NGS services will assist you with better understanding the molecular characteristics of cancer cells.</h3>

              <p className='mt-5 pe-5'>The use of NGS has ushered in a new era of precision oncology, and Hematogenix employs this advanced technology to understand a tumor’s molecular characteristics in order to improve patient classification and predict patient response to targeted therapy. The scientific experts at Hematogenix have validated multiple NGS assays to cover AML, MDS, and other hematological disorders. Additionally, the Hematogenix Bioinformatics team has developed proprietary analysis pipelines to harness the vast data provided by NGS.</p>
            </Col>
            <Col md={6}>
              <div className="Companion_image-box">
                <img src='/public/assets/img/expertise/next-gene-sequencing.png' alt="image" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="Companin_content-box mb-3">
              <h4 className="block-title">PLATFORMS</h4>
                <div className="List-box ">
                  <li className="item">Illumina MiSeqDx</li>
                  <li className="item">Illumina NextSeq 550Dx</li>
                </div>
              </div>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <div className="Companin_content-box mb-3">
              <h4 className="block-title">ASSAYS</h4>
                <div className="List-box ">
                  <li className="item">Myeloid Genotyping Panel</li>
                  <li className="item">Myeloid MRD Panel</li>
                  <li className="item">Custom Assays</li>
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
                <span>Next-Generation Sequencing (NGS)</span>
              </div>
            </Col>
        </Row>
      </div>
    </>
  )
}

export default NextGeneration;