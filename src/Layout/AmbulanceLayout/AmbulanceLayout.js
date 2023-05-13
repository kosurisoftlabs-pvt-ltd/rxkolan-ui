
import React from 'react'
import Header from '../../components/headers/DashboardHeader'
import Title from '../../components/Ambulance/Header'
import AmbulanceSidebar from '../../components/sidebar/AmbulanceSidebar'

const AmbulanceLayout = ({children},props) => {
  return (
    <div className='dashboard-design'> 
    <AmbulanceSidebar/>      
    <div className='dasboard-content' style={{ minHeight: "80vh" }}>
        <Header User=" To Ambulance Dashboard"/>
        <div className='ambulance-container'>
      <Title title={props.title} />
      {/* <div className='add-ambulance-form'> */}
        {children}
      {/* </div> */}
    </div>
    </div>
  
</div>
  )
}

export default AmbulanceLayout
