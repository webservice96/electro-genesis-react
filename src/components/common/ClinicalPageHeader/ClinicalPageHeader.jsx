import React from 'react'
import"./Style.css"

function ClinicalPageHeader(props) {
  return (
    <>
        <h2 className='title'>
          <span  className='title-border-top border border-dark d-block'></span>
          <h1 className='title-text m-0 py-3'>{props.title}</h1>
          <span className='title-border-bottom border border-dark d-block'></span>
        </h2>
    </>
  )
}

export default ClinicalPageHeader;