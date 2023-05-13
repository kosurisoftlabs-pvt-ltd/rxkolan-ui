import React, { useState } from 'react'
import Title from '../../components/Ambulance/Header'
import InputField from '../../components/inputfield/InputField'
import Button from '../../components/button/Button'

import '../DasboardPage/dashboard.css'


const NurseProfile = () => {
    const [centerName, setCenterName] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")
    const [phNumber, setPhNumber] = useState("")
    const [email, setEmail] = useState("")
    const [document, setDocument] = useState("")

    return (
        <div>

            <div className='ambulance-container'>
                <Title title={"Update Profile"} />

                <div className='update-ambulance-form'>
                    <div className='form-title'>
                        <h3>Update Profile</h3>
                    </div>

                    <div className='form-field'>
                        <div className='input-field-form'>
                            <label>Center Name</label>
                            <InputField type={"text"} name={"Service Name"} value={centerName} handleChange={(e) => setCenterName(e.target.value)} />
                        </div>
                        <div className='input-field-form'>
                            <label>Name</label>
                            <InputField type={"text"} name={"Vehicle Brand"} value={name} handleChange={(e) => setName(e.taget.value)} />
                        </div>
                        <div className='input-field-form'>
                            <label>Address</label>
                            <InputField type={"text"} name={"VIN"} value={address} handleChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className='input-field-form'>
                            <label>Location</label>
                            <InputField type={"text"} name={"Registration Number"} value={location} handleChange={(e) => setLocation(e.target.value)} />
                        </div>

                        <div className='input-field-form'>
                            <label>Phone Number</label>
                            <InputField type={"text"} name={"Owner Name"} value={phNumber} handleChange={(e) => setPhNumber(e.target.value)} />
                        </div>
                        <div className='input-field-form'>
                            <label>Email</label>
                            <InputField type={"text"} name={"Owner Name"} value={email} handleChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='input-field-form'>
                            <label>License Document</label>
                            <InputField type={"file"} name={"Owner Name"} value={document} handleChange={(e) => setDocument(e.target.value)} />
                        </div>
                        <div className='update-amb-btn'>
                            <Button name={"Reset"} color={"#ffc107"} />
                            <Button name={"Update"} color={"#28a745"} />
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}

export default NurseProfile
