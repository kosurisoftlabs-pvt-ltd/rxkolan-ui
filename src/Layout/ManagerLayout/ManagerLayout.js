import React from 'react'
import Header from '../../components/headers/DashboardHeader'

import Title from '../../components/Ambulance/Header'
import ManagerSidebar from '../../components/sidebar/StoreSidebar'


const ManagerLayout = ({children}) => {
  return (
    <div className='dashboard-design'>
       <ManagerSidebar/>

    <div className='dasboard-content'>
        <Header User="Store Manager"/>
        <div className='ambulance-container'>
      <Title />
      <div className='add-ambulance-form'>
        {children}
      </div>
    </div>
    </div>
  
</div>
  )
}

export default ManagerLayout
