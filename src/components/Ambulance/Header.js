import React from 'react'
import "./style.css"

const Header = ({title}) => {
  return (
    <div className='page-title'>
      <h5>{title}</h5>
    </div>
  )
}

export default Header
