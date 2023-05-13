import React from 'react'
import { useNavigate } from "react-router-dom";

import Title from '../../components/Ambulance/Header'
import '../DasboardPage/dashboard.css'
import './storeStyle.css'
// import {uploadStore} from "../../API_Config/createAPI"
// import './style.css'

import AlertBox from '../../components/Ambulance/AlertBox'
import Button from '../../components/button/Button'
import StoreTable from '../../components/StoreMaster/StoreTable'
import UpdateForm from '../../components/StoreMaster/UpdateForm';

const UpdateStore = () => {
  const navigate = useNavigate();


  const BackTo = () => {
    navigate("/admin/create-store");
  }
  return (

      <div className='ambulance-container'>
        <Title title={"Store Master"} />
        <AlertBox />
        <div className='back-to-report update-btn'>
          <Button name={"Back"} color={"#dc3545"} onClick={BackTo} />
        </div>
          {/* <StoreTable/> */}
          <UpdateForm/>

      </div>

  )
}

export default UpdateStore
