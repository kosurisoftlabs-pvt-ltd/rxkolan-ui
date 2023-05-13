import React from 'react'
import { useNavigate } from "react-router-dom";

import Title from '../../components/Ambulance/Header'
import '../DasboardPage/dashboard.css'
import './storeStyle.css'

import AddManager from '../../components/StoreMaster/AddStoreManager'

import AlertBox from '../../components/Ambulance/AlertBox'
import Button from '../../components/button/Button'

const AddStoreManager = () => {
  const navigate = useNavigate();

  const BackTo = () => {
    navigate("admin/create-store");
  }
  return (

      <div className='ambulance-container'>
        <Title title={"Add Store Master"} />
        <AlertBox />
        <div className='back-to-report update-btn'>
          <Button name={"Back"} color={"#dc3545"} onClick={()=>console.log("hello back")} />
        </div>
        <div className=' add-store-manager'>
         <AddManager/>
          <div className='add-manager-btn'>


          </div>
        </div>
      </div>

  )
}

export default AddStoreManager
