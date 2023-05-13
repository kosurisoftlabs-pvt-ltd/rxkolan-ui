import React from 'react'
import Header from '../../components/headers/DashboardHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/Ambulance/Header'

// import Button from '../../components/button/Button'
import './roleStyle.css'
import Role from '../../components/Role/Role'
const UpdateRole = () => {
  return (
    <div className='ambulance-container'>
      <Title title={"Update Role"} />

      <div className='add-ambulance-form'>

        <Role />

      </div>
    </div>

  )
}

export default UpdateRole
