import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import Button from '../button/Button'

import './style.css'

const AddForm = ({serviceName,setServiceName,handleChange}) => {
    const [password,setPassword]=useState("")
    // const [serviceName,setServiceName]=useState("")
    const [Brand,setBrand]=useState("")

    const Reset=(e)=>{
        e.preventDefault()
        setBrand("")
        setServiceName("")
    }
  return (
    <div className='add-ambulance'>
        <div className='heading'>
                <span>Add a New Ambulance</span>
        </div>
        <div className='form-field'>
            <div className='input-field-form'>
                <label>Service Name *</label>
                <InputField type={"text"} name={"Service Name"} value={serviceName} handleChange={(e)=>setServiceName(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Vehicle Brand *</label>
                <InputField type={"text"} name={"Vehicle Brand"} value={Brand} onChange={handleChange} />     
            </div>
            <div className='input-field-form'>
                <label>VIN *</label>
                <InputField type={"text"} name={"VIN"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Registration Number *</label>
                <InputField type={"text"} name={"Registration Number"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='input-field-form'>
                <label>Owner Name *</label>
                <InputField type={"text"} name={"Owner Name"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Is this fitted with Oxygen cylinder *</label>
                <InputField type={"text"} name={"Is this fitted with Oxygen cylinder"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Does this have primary carer *</label>
                <InputField type={"text"} name={"Does this have primary carer"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Contact Number *</label>
                <InputField type={"text"} name={"Contact Number"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='input-field-form'>
                <label>RTO Registration with *</label>
                <InputField type={"text"} name={"RTO Registration with"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>State *</label>
                <InputField type={"text"} name={"State"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Have Valid licence to use this vehicle as Ambulance *</label>
                <InputField type={"text"} name={"Have Valid licence to use this vehicle as Ambulance"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Base location *</label>
                <InputField type={"text"} name={"Base location"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='input-field-form'>
                <label>Addition features *</label>
                <InputField type={"textarea"} name={"Addition features"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='input-field-form'>
                <label>Vehicle RC *</label>
                <InputField type={"file"} name={"Vehicle RC"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>
            <div className='input-field-form'>
                <label>Ambulance License Certificate *</label>
                <InputField type={"file"} name={"Ambulance License Certificate"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='input-field-form'>
                <label>Photo [number plate must be displayed] *</label>
                <InputField type={"file"} name={"Photo [number plate must be displayed]"} value={password} handleChange={(e)=>setPassword(e.target.value)} />     
            </div>

            <div className='status-btn'>
              <Button name={"Reset"} color={"#ffc107"} onClick={Reset} />
              <Button name={"Add Ambulance"} color={"#007bff"} />
            </div>
        </div>
      
    </div>
  )
}

export default AddForm
