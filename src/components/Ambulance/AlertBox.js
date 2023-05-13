import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
const AlertBox = ({msg}) => {
  const [alert,setAlert]=useState(true)
  return (
    <div className='alert-box'>
      <span className='alert-msg'>{msg}? <span >Yes</span> |<span style={{color:"red"}}><Link to={"/admin/report-ambulane"}> No</Link></span></span>
    </div>
  )
}

export default AlertBox
