import React from 'react'
import Header from '../../components/headers/DashboardHeader'

import Title from '../../components/Ambulance/Header'
import DistributorSidebar from '../../components/sidebar/DistributorSidebar'


const DistributorLayout = ({ children }) => {
  return (
    <div className='dashboard-design'>
      <DistributorSidebar />

      <div className='dasboard-content'>
        <Header User="Distributor" />
        <div className='ambulance-container'>
          <Title title="Distributor"/>
          <div className='add-ambulance-form'>
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}

export default DistributorLayout
