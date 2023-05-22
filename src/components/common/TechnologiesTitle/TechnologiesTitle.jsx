import React from 'react'
import './Style.css'

function TechnologiesTitle(props) {
  return (
     <>
        <div className='technologies-title'>
          <h1 className='technologies-title-text m-0'>{props.title}</h1>
        </div>
    </>
  )
}

export default TechnologiesTitle