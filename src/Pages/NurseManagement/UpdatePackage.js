import React from 'react'
import UpdateServicePackege from '../../components/UpdatePackege/UpdateServicePackege'
import UpdatedServicePackege from '../../components/UpdatePackege/UpdatedServicePackege'


const NurseUPdatePackage = () => {
    return (
        <div className='content-contianer'>
            <div className='page-header-title'>
                <h2>Update Service</h2>
            </div>
            <div className='service-box package-first-box'>
            <UpdateServicePackege/>

            </div>
            <div className='service-box package-second-box'>
                <UpdatedServicePackege/>

            </div>
        </div>
    )
}

export default NurseUPdatePackage
