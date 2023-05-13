
import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../../components/headers/DashboardHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/Ambulance/Header'
import Button from '../../components/button/Button'
import UpdateForm from '../../components/Ambulance/UpdateForm'



import '../DasboardPage/dashboard.css'

const UpdateAmbulance = () => {
  const navigate = useNavigate();

  const BackTo=()=>{
    navigate("/admin/report-ambulane");
  }
  return (
    
        <div className='ambulance-container'>
          <Title title={"Update Profile"} />
          {/* <AlertBox /> */}
          <div className='back-to-report'>
            <Button name={"< Back To Ambulance Report"} onClick={BackTo} color={"#dc3545"} />
          </div>
          <div className='update-ambulance-form'>
           <UpdateForm/>
          </div>
        </div>
  
  )
}

export default UpdateAmbulance
