import React from 'react'
import { useState } from 'react';
import InquiryFormModal from "../../../src/pages/product/product/InquiryFormModal";
const StickyForm = () => {
    const[show,setShow]= useState(false);
    const handleShow = () => setShow(true)
    return (
        <>
            <button className='btn-sm contact-btn' onClick={handleShow} style={{cursor:"pointer"}}> <i class="fas fa-download"></i></button>
            <InquiryFormModal  show={show} setShow={setShow}/>
        </>
    )
}

export default StickyForm;