import React from 'react'
import ServiceCard from './ServiceCard'

import './service.css'

const Services = () => {
    return (
        <div className='container-fluid services-style'>
            
            <div className='row service-body'>
                <div className='col-lg-3 col-md-6'>
                <ServiceCard title="MEDICAL SHOPS" center="100+" />
               
                </div>
                <div className='col-lg-3 col-md-6'>
                <ServiceCard title="AMBULANCES" center="101+"/>
                
                </div>
                <div className='col-lg-3 col-md-6'>
                <ServiceCard title="PRIMARY CARE" center="102+"/>
                </div>
                <div className='col-lg-3 col-md-6'>
                <ServiceCard title="DIAGNOSTIC CENTRES" center="103+"/>

                </div>
            </div>


        </div>
    )
}

export default Services
