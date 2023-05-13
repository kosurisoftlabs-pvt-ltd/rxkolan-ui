import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Title from '../../components/Ambulance/Header'
import '../DasboardPage/dashboard.css'
import './style.css'
import AlertBox from '../../components/Ambulance/AlertBox'
import Button from '../../components/button/Button'
import InputField from '../../components/inputfield/InputField';


const AddAmbulance = () => {
  const navigate = useNavigate();
  const [serviceName, setServiceName] = useState("")
  const [vehiclebrand, setVehicleBrand] = useState("")
  const [vin, setVIN] = useState("")
  const [registrationNumber, setRegistrationNumber] = useState("")
  const [ownerName, setOwnerName] = useState("")
  const [primaryCarer, setPrimaryCarer] = useState(true)
  const [contactNumber, setContactNumber] = useState("")
  const [rtoRegistrationWith, setRTORegistrationWith] = useState("")
  const [state, setState] = useState("")
  const [validLicense, setValidLicense] = useState(true)
  const [baseLocation, setBaseLocation] = useState("")
  const [additionalFeatures, setAdditionalFeatures] = useState("")
  const [vehicleRC, setVehicleRC] = useState("")
  const [licenseCertificate, setLicenseCertificate] = useState("")
  const [fittedWithOxygen, seFittedWithOxygen] = useState(true)
  const [numberPlatePhoto, setNumberPlatePhoto] = useState("")


  const SumbitData = async() => {
  console.log("Access",localStorage.getItem("accessToken"))

    console.log(serviceName, vehiclebrand, vin, registrationNumber, ownerName, primaryCarer, licenseCertificate, vehicleRC, fittedWithOxygen, numberPlatePhoto)
    
    const userData={
      serviceName, vehiclebrand,vin,registrationNumber,ownerName,primaryCarer,contactNumber,rtoRegistrationWith,state,
      validLicense,baseLocation,additionalFeatures,vehicleRC,licenseCertificate,fittedWithOxygen,numberPlatePhoto
    }
   
  }

  const BackTo = () => {
    navigate("/admin/report-ambulane");
  }
  return (

    <div className='ambulance-container'>
      <Title title={"Add Ambulance"} />
      <AlertBox  msg="Ambulance successfully added, you want to add one more" />
      <div className='back-to-report'>
        <Button name={"< Back To Ambulance Report"} onClick={BackTo} color={"#dc3545"} />
      </div>

      <div className='add-ambulance-form'>
        {/* <AddForm  serviceName={serviceName} setServiceName={setServiceName} handleChange={handleChange}/> */}
        <div className='add-ambulance'>
          <div className='heading'>
            <span>Add a New Ambulance</span>
          </div>
          <div className='form-field'>
            <div className='input-field-form'>
              <label>Service Name *</label>
              <InputField type={"text"} name={"Service Name"} value={serviceName} handleChange={(e) => setServiceName(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Vehicle Brand *</label>
              <InputField type={"text"} name={"Vehicle Brand"} value={vehiclebrand} handleChange={(e) => setVehicleBrand(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>VIN *</label>
              <InputField type={"text"} name={"VIN"} value={vin} handleChange={(e) => setVIN(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Registration Number *</label>
              <InputField type={"text"} name={"Registration Number"} value={registrationNumber} handleChange={(e) => setRegistrationNumber(e.target.value)} />
            </div>

            <div className='input-field-form'>
              <label>Owner Name *</label>
              <InputField type={"text"} name={"Owner Name"} value={ownerName} handleChange={(e) => setOwnerName(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Is this fitted with Oxygen cylinder *</label>
              <InputField type={"text"} name={"Is this fitted with Oxygen cylinder"} value={fittedWithOxygen} handleChange={(e) => seFittedWithOxygen(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Does this have primary carer *</label>
              <InputField type={"text"} name={"Does this have primary carer"} value={primaryCarer} handleChange={(e) => setPrimaryCarer(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Contact Number *</label>
              <InputField type={"text"} name={"Contact Number"} value={contactNumber} handleChange={(e) => setContactNumber(e.target.value)} />
            </div>

            <div className='input-field-form'>
              <label>RTO Registration with *</label>
              <InputField type={"text"} name={"RTO Registration with"} value={rtoRegistrationWith} handleChange={(e) => setRTORegistrationWith(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>State *</label>
              <InputField type={"text"} name={"State"} value={state} handleChange={(e) => setState(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Have Valid licence to use this vehicle as Ambulance *</label>
              <InputField type={"text"} name={"Have Valid licence to use this vehicle as Ambulance"} value={validLicense} handleChange={(e) => setValidLicense(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Base location *</label>
              <InputField type={"text"} name={"Base location"} value={baseLocation} handleChange={(e) => setBaseLocation(e.target.value)} />
            </div>

            <div className='input-field-form'>
              <label>Addition features *</label>
              <InputField type={"textarea"} name={"Addition features"} value={additionalFeatures} handleChange={(e) => setAdditionalFeatures(e.target.value)} />
            </div>

            <div className='input-field-form'>
              <label>Vehicle RC *</label>
              <InputField type={"file"} name={"Vehicle RC"} value={vehicleRC} handleChange={(e) => setVehicleRC(e.target.value)} />
            </div>
            <div className='input-field-form'>
              <label>Ambulance License Certificate *</label>
              <InputField type={"file"} name={"Ambulance License Certificate"} value={licenseCertificate} handleChange={(e) => setLicenseCertificate(e.target.value)} />
            </div>

            <div className='input-field-form'>
              <label>Photo [number plate must be displayed] *</label>
              <InputField type={"file"} name={"Photo [number plate must be displayed]"} value={numberPlatePhoto} handleChange={(e) => setNumberPlatePhoto(e.target.value)} />
            </div>

            <div className='add-btn'>
              <input type="reset" class="btn btn-warning" onClick={SumbitData}/>
              <input type="submit" name="addAmbulance" class="btn btn-primary" value="Add Ambulance" onClick={SumbitData}></input>
            </div>
          </div>
   
        </div>



      </div>
    </div>
    // </div>

    // </div>
  )
}

export default AddAmbulance
