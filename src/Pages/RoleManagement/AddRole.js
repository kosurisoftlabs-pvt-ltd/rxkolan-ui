import React from 'react'
import Header from '../../components/headers/DashboardHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/Ambulance/Header'

import Button from '../../components/button/Button'
import './roleStyle.css'
import Role from '../../components/Role/Role'
const AddRole = () => {
  return (
    // <div className='dashboard-design'>
    //   <Sidebar />
    //   <div className='dasboard-content'>
    //     <Header User="Admin" />
        <div className='ambulance-container'>
          <Title title={"Add Role"} />

          <div className='add-ambulance-form role-list'>

            {/*  */}
          <Role/>
            {/*  */}

          </div>
        </div>
    //   </div>

    // </div>
  )
}

export default AddRole
