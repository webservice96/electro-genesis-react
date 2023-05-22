import React from 'react'
import"./Style.css"
import ClinicalPageHeader from '../../common/ClinicalPageHeader/ClinicalPageHeader'
import { Col, Row } from 'react-bootstrap'

function AssayDevelopment() {
  return (
    <>
    <div className='block-inner'>
        <ClinicalPageHeader title={'ASSAY DEVELOPMENT'}/>
       

        <div className=" margin-bottom mt-4">
        <Row>
            <Col md={{span:5,offset:2}}>
                <div className="text-content pe-0 ms-3">
                    <h2 className='mb-3'>Hematogenix®’s scientific experts are well equipped to develop an assay that is specific to your clinical trial.</h2>

                    <p>We have extensive experience evaluating biological targets in multiple disease areas. Our team will ensure that an assay is optimized by evaluating multiple biomarkers and assay conditions, while using the most appropriate platform. Assays then undergo stringent validation and QA processes to ensure the assay is robust, provides accurate results, and is reproducible across multiple instruments and our global (US, EU, Asia-Pacific, and China) laboratories. Our utilization of fresh patient samples (within hours of sample collection) for validation provides us with a unique advantage to assess sample stability from Day 0. These samples are also instrumental in better understanding the performance of the assay, which may not be apparent with cell lines or other contrived samples.</p>

                    <p className='mt-4'>We have a proven track record validating and utilizing our assays for multiple Phase 3 registrational trials. Hematogenix has also co-developed several assays as a companion diagnostic.</p>
                </div>
            </Col>
             <Col md={{span:5,offset:0}}>
                <div className="image-div mb-3 ">
                    <img className='rounded-3 w-75 mx-auto' src="/assets/img/3.png" alt="madecin test" />
                </div>
            </Col>
        </Row>  
        </div>
        
    </div>
    </>
  )
}

export default AssayDevelopment