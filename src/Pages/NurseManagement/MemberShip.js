import React from 'react'


//import  css
import './nurseStyle.css'
import Membership from '../../components/Membership/Membership'

const NurseMemberShip = () => {
  return (
    <div className='content-contianer'>
        <div className='page-header-title'>
            <h2>Membership</h2>
        </div>
        <div className='content-list'>
                <Membership/>
        </div>
    </div>
  )
}

export default NurseMemberShip
