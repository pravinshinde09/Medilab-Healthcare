import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import CorporateForm from "./CorporateForm";
import PersonalForm from "./PersonalForm";
const InquiryForm = () => {
  const [value, setValue] = useState('personal');
  const onChange = (e)=>{
    setValue(e.target.value)
  }
  return (
    <>
      <div className="d-flex">
        <div className="form-check">
          <input className="form-check-input"  type="radio" name="personal" id="personal" value='personal' onChange={onChange} checked={value === 'personal'} />
          <label className="form-check-label" for="personal" style={{cursor:"pointer"}}>Personal</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="corporate" id="corporate"   value='corporate'  onChange={onChange}  checked={value === 'corporate'}  />
          <label className="form-check-label" for="corporate" style={{cursor:"pointer"}}>Corporate</label>
        </div>
      </div>
      {
        value == 'personal' ? <PersonalForm /> : <CorporateForm />
      }
    </>
  );
};
export default InquiryForm;