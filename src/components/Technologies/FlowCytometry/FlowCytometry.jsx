import React from 'react'
import"./Style.css"
import { Col, Row } from 'react-bootstrap'
import TechnologiesTitle from '../../common/technologiesTitle/TechnologiesTitle';

function FlowCytometry() {

  
  return (
    <>
      <section className='block-inner Flow-Cytometry-section'>
       <TechnologiesTitle title='Flow Cytometry'/>
        <div className='content-text-part max-width'>
          {/* text and image row */}
          <Row >
             <Col md={5}>
              <div className="flowcy_image-box">
                <img src='/assets/img/technology/techno-1.png' alt="image" />
                <div className="image-caption">
                  <span>Navios EX (10 color)</span>
                </div>
              </div>
            </Col>
            
            <Col md={{span:6,offset:1}}>
              <h3 className="flowcy_description">Harnessing Multi-Parameter Flow Cytometry Capabilities for In-Depth Characterization of Cellular Biomarkers</h3>

              <p className='mt-5 pe-5'>Hematogenix® offers the same flow cytometry capabilities at all of our locations. Our assays are harmonized by using the same platforms, cytometer settings, and calibration standards throughout our global laboratories. Hematogenix® also employs either automated liquid handling systems or dried-down formats for precise and reproducible antibody mixtures in our flow cytometry assays.</p>
            </Col>
           
          </Row>
          
          
        </div>
        <Row className="pagination">
            <Col md={2}>
              <div className="number">
                <span>1.1</span>
              </div>
            </Col>
            <Col md={8}>
              <div className="text">
                <span>Flow Cytometry</span>
              </div>
            </Col>
        </Row>
      </section>
      <section className='block-inner Diseases-section'>
       <TechnologiesTitle title='Diseases'/>
        <div className='content-text-part max-width mb-5'>
          {/* text and image row */}
          <Row >
            <Col md={{span:4,offset:0}}>
              <ul className="underline-text mt-5">
                <li className="underline-item mb-3 pb-3">
                    <div>Leukemias (AML, ALL, CLL)</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                    <div>Myeloma (MM)</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                  <div>Lymphomas</div>
                  </li>
                <li className="underline-item mb-3 pb-3">
                  <div>Solid Tumors</div>
                </li>
                <li className="underline-item mb-3 pb-3">
                  <div>PNH</div>
                </li>
            </ul>
            </Col>
             <Col md={{span:7,offset:1}}>
              <div className="flowcy_image-box margin-top-lass">
                <img src='/assets/img/technology/technology-2.png' alt="image" />
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
                <span>Diseases</span>
              </div>
            </Col>
        </Row>
      </section>

      <section className='block-inner Flow-Cytometry-section'>
       <TechnologiesTitle title='Platforms'/>
        <div className='content-text-part max-width'>
          <Row className='borderd border-bottom border-1 border-dark pb-5'>
            <Col md={{span:4,offset:0}}>
              <h3 className="flowcy_description">Beckman Coulter</h3>
            </Col>
             <Col md={8}>
              <Row>
                <Col>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/technology-3-1.png' alt="image" />
                  <div className="Platforms-img-caption image-caption">
                    <span>FC500 (5 color)</span>
                  </div>
                </div>
                </Col>
                <Col>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/technology-3-2.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>Gallios (10 color)</span>
                  </div>
                </div>
                </Col>
                <Col>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/technology-3-3.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>Navios EX (10 color)</span>
                  </div>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>


          <Row className='py-5'>
            <Col md={{span:4,offset:0}}>
              <h3 className="flowcy_description">BD Biosciences</h3>
            </Col>
             <Col md={6}>
              <Row>
                <Col>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/technology-3-4.png' alt="image" />
                  <div className="Platforms-img-caption image-caption">
                    <span>BD FACSCanto II Cell<br/> Analyzer (8 color)</span>
                  </div>
                </div>
                </Col>
                <Col>
                <div className="flowcy_image-box">
                  <img src='/assets/img/technology/technology-3-5.png' alt="image" />
                  <div className="image-caption Platforms-img-caption">
                    <span>BD FACSLyric (12 color)</span>
                  </div>
                </div>
                </Col>
              </Row>
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
                <span>Platforms</span>
              </div>
            </Col>
        </Row>
      </section>
      <section className='block-inner Assays-section'>
       <TechnologiesTitle title='Assays'/>
        <div className='content-text-part max-width'>
          <Row className='pb-5'>
            <Col md={{span:4,offset:0}}>
              <p>Our expert flow cytometry scientists and disease specialists can assist you with identifying the most appropriate assay for your clinical trial. Hematogenix® has globally validated a multitude of assays for immunophenotyping, MRD detection, CAR-T cell monitoring, receptor occupancy, and others. We offer a flexible list of biomarker combinations that can be crafted specifically for your testing needs.</p>
            </Col>
             <Col md={{span:4,offset:3}}>
                <ul className="underline-text margin-top-lass">
                    <li className="underline-item mb-3 pb-3">
                        <div>MRD Assessment</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                        <div>Immunophenotyping</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>CAR-T Cell Monitoring</div>
                      </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>Receptor Occupancy</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>Biomarker Quantitation</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>IVD Assays</div>
                    </li>
                    <li className="underline-item mb-3 pb-3">
                      <div>Custom Assays</div>
                    </li>
                </ul>
             </Col>
          </Row>
          
        </div>
        <Row className="pagination">
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
      <section className='block-inner Sample-type-section'>
       <TechnologiesTitle title='Sample Types'/>
        <div className='content-text-part max-width'>
          <Row className='pb-5'>
            <Col md={{span:4,offset:0}}>
              <p className='pt-5'>Our assays are validated with the appropriate specimen types based on the disease indication. Our scientific experts can help you determine the most appropriate sample type and assay for your clinical trial.</p>
            </Col>
             <Col md={{span:4,offset:2}}>
                <Row className="list margin-top-lass">
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Peripheral Blood</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Bone Marrow Aspirate</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Liquid Specimens (FNA, CSF)</span></div>
                    </Col>
                    <Col xs={6} className="column item">
                        <div className="inner"><span className="label">Fresh Tissue</span></div>
                    </Col>
                </Row>
             </Col>
          </Row>
          
        </div>
        <Row className="pagination">
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
  )
}

export default FlowCytometry;