import React, { useState } from 'react'
import Button from '../button/Button'
import InputField from '../inputfield/InputField'

const UpdateForm = () => {
  const [available, setAvailable] = useState("")
  const [location, setLocation] = useState("")

  const [price, setPrice] = useState("")

  return (
    <div className='update-profile'>
    
      <div className='form-field'>
        <div className='input-field-form'>
          <label>Update Location *</label>
          <InputField type={"text"} name={"Update Location"} value={location} handleChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className='input-field-form'>
          <label>Available *</label>

            <select name="" required value={available} handleChange={(e) => setAvailable(e.target.value)} >
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
        </div>
        <div className='input-field-form'>
          <label>Update Price *</label>
          <InputField type={"text"} name={"Price"} value={price} handleChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className='input-field-form'>
          <label>Waitings Charge *</label>
          <InputField type={"text"} name={"Price"} value={price} handleChange={(e) => setPrice(e.target.value)} />
        </div>



        <div className='update-amb-btn'>
          <Button name={"Reset"} color={"#ffc107"} />
          <Button name={"Update"} color={"#28a745"} />
        </div>
      </div>

    </div>
  )
}

export default UpdateForm
