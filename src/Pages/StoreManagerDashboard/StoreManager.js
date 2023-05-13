import React from 'react'
import Sidebar from '../../components/StoreManagerDashboard/Sidebar/Sidebar'
import Header from '../../components/headers/DashboardHeader'
import Title from '../../components/Ambulance/Header'


const StoreManager = (props) => {
  return (
    <div className='dashboard-design'>
       
    <Sidebar/>

    <div className='dasboard-content'>
        <Header User="Store Manager"/>
        <div className='ambulance-container'>
      <Title title={props.title} />
      <div className='add-ambulance-form'>
        {props.content}
      </div>
    </div>
    </div>
  
</div>
  )
}

export default StoreManager
