import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import Button from '../button/Button'


const SearchDetail = () => {
  const [registration, setRegistration] = useState("")
  const [vin, setVIN] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")


  const searchData = async() => {

    // search API call
    console.log(registration, vin, phone, date)
    const searchField={
      registration,vin,phone,date
    }
   

  }

  // console.log(registration,vin,phone)
  return (
    <>
      <div className='search-details'>
        <div className='verify-ambulance-search'>
          <label>Registartion Number*</label><br />
          <InputField type={"text"} name={"Registartion Number"} value={registration} handleChange={(e) => setRegistration(e.target.value)} />
        </div>
        <div className='verify-ambulance-search'>
          <label>VIN *</label><br />
          <InputField type={"number"} name={"Ex. 100"} value={vin} handleChange={(e) => setVIN(e.target.value)} />
        </div>
        <div className='verify-ambulance-search'>
          <label>Phone Number *</label><br />
          <InputField type={"text"} name={"Ex. 0123456789"} value={phone} handleChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='verify-ambulance-search'>
          <label>Date Of Registartion *</label><br />
          <InputField type={"date"} value={date} handleChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='verify-ambulance-search'>
          <label></label><br />

          <Button name={"Search"} color={"#3bad55"} onClick={searchData} />

        </div>

      </div>
      {/* <div className='add-ambulance-form'>
        <AmbulanceDetailTable />
      </div> */}
    </>

  )
}

export default SearchDetail
