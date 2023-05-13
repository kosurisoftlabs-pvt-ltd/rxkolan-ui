import React, { useState } from 'react'
import '../DasboardPage/dashboard.css'

import Title from '../../components/Ambulance/Header'
import SearchDetail from '../../components/Ambulance/SearchDetail'
import AmbulanceDetailTable from '../../components/Ambulance/AmbulanceDetailTable'

const AmbulanceReport = () => {
  // const [searchResult,setSearchResult]=useState("")
  
  return (

    <div className='ambulance-container'>
      <Title title={"Ambulance Report"} />
      <div className='ambulance-report-box report-box'>
        <SearchDetail />
      </div>
      <div className='add-ambulance-form'>
        <AmbulanceDetailTable />
      </div>
    </div>

  )
}

export default AmbulanceReport
