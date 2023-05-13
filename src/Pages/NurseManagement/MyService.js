import React from 'react'
import MyService from '../../components/Myservice/MyService'
import ServiceList from '../../components/Myservice/ServiceList'

const NurseService = () => {
    return (
        <div className='content-contianer'>
            <div className='page-header-title'>
                <h2>Update Service</h2>
            </div>
            <div className='service-box first-box'>
                
                <MyService/>
            </div>
            <div className='service-box'>
                
                <ServiceList/>
            </div>
        </div>
    )
}

export default NurseService
