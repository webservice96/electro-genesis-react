import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReadMoreButton } from '../ReadMoreButton/ReadMoreButton';





function CustomModal({setShow,show}) {
  const handleClose = () =>{
     setShow(false)
  };
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header className='position-relative'>
          <Modal.Title className='text-center w-100'>We're here to answer your questions!</Modal.Title>
          <div className='close-Button position-absolute' onClick={()=>handleClose()}>
            <span>
              <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="desktop-icon icon-svg" >
              <line x1="2.06066" y1="1" x2="25.8909" y2="24.8302" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line>
              <line x1="1" y1="24.8302" x2="24.8302" y2="0.999996" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ></line>
          </svg>
            </span>
          </div>
        </Modal.Header>
        <div className='modal-bodys'>
          <div class="users-Image mt-3">
              <img className=''
                  src="https://cdn.sanity.io/images/6g05c3t1/production/15ab2d52adcd6bbe7b386e021eba6ecba28ddd4d-900x832.jpg?rect=34,0,832,832&amp;w=200&amp;h=200&amp;auto=format"
                  alt="We're here to answer your questions!"  
              />
              <h3 class="subtitle" >Here's how you can reach us.</h3>
              <p class="text">All fields are required.</p>
          </div>

          <div className="form-wrepper py-5">
            <form className='form-body'>
              <div className="form-item d-flex align-items-center justify-content-between">
                <div className="lable w-25"><label htmlFor="name">Your Name</label></div>
                <div className="lable-fild w-75 h-100">
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="form-item d-flex align-items-center justify-content-between">
                <div className="lable w-25"><label htmlFor="email">Your E-mail</label></div>
                <div className="lable-fild w-75 h-100">
                  <input type="email" name="" id="" />
                </div>
              </div>
              <div className="form-item d-flex align-items-center justify-content-between">
                <div className="lable w-25"><label htmlFor="subject">Subject</label></div>
                <div className="lable-fild w-75 h-100">
                  <input type="text" name="" id="" />
                </div>
              </div>
              <div className="form-item d-flex  justify-content-between">
                <div className="lable w-25"><label htmlFor="message">Message</label></div>
                <div className="lable-fild w-75">
                  <textarea type="text" name="" id="" rows="6" />
                </div>
              </div>
            </form>
          </div>

          <div className="check-uot">
            <div class=" w-50 m-auto" >
              <span class="checkbox-btn-wrapper" >
                  <span class="checkbox-btn" >
                      <input type="checkbox" name="rgpd" required="required"  />
                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                          <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.94709 5.80179L5.2534 8.46846L11.9921 0.468458C12.4966 -0.0720825 13.2894 0.504494 12.893 1.11711L6.26241 11.2432C5.7579 11.8919 5.07322 11.964 4.49664 11.3153L1.14529 7.31531C0.496642 6.37837 2.1543 5.04503 2.94709 5.80179Z"
                              fill="white"
                          ></path>
                      </svg>
                  </span>
                  <span class="label" >I consent to having this site collect my personal data. <a href="/legal/privacy-policy-and-cookies" target="_blank" rel="external nofollow noopener" data-v-ba6ff3a6="">Learn More</a>.</span>
              </span>
          </div>

          <div className='send-button-wrepper w-50 m-auto mt-3'>
            <ReadMoreButton lable='Send Message' />
          </div>
          </div>
        </div>
           
      </Modal>
    </>
  )
}

export default CustomModal