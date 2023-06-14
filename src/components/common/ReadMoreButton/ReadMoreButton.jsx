
import React from 'react'
import './Style.css'


export function ReadMoreButton({lable,setShow}) {
    const clickHendelar=()=>{
        setShow(true)
    }
  return (
    <button class="read-more-btn small-size black-color" onClick={clickHendelar}>
            <div class="inner">
                <span class="icon arrow-right">
                    <span class="icon-container arrow-right-icon-container">
                       <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon shadow-icon">
                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon">
                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                    </span>
                </span>
                <span class="label-sizer">{lable?lable:'More'}</span>
            </div>
            <div class="label-container"><span class="label">{lable?lable:'More'}</span></div>
        </button>
  )
}
