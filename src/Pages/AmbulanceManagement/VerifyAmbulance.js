import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

// import component
import Title from '../../components/Ambulance/Header'
import Button from '../../components/button/Button'
import AmbulanceDetailTable from '../../components/Ambulance/AmbulanceDetailTable'
import SearchDetail from '../../components/Ambulance/SearchDetail'

// import css
import '../DasboardPage/dashboard.css'
import './style.css'

const VerifyAmbulance = () => {
  const [searchResult,setSearchResult]=useState("")
  const navigate = useNavigate();

  const BackTo=()=>{
    navigate("/admin/report-ambulane");
  }
  return (
        <div className='ambulance-container'>
          <Title title={"Verify Ambulance"} />
          {/* <AlertBox /> */}
          <div className='back-to-report'>
            <Button name={"< Back To Ambulance Report"} onClick={BackTo} color={"#dc3545"} />
          </div>
          <div className='search-data'>
            <SearchDetail setSearchResult={setSearchResult}/>
          </div>
          <div className='add-ambulance-form'>
            <AmbulanceDetailTable searchResult={searchResult}/>
          </div>
        </div>
   
  )
}

export default VerifyAmbulance
