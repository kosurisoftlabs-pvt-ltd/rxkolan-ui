import React from 'react'
import UpdateServicePrice from '../../components/UpdatePrice/UpdateServicePrice'
import UpdateList from '../../components/UpdatePrice/UpdateList'


const NurseUPdatePrice = () => {
    return (
        <div className='content-contianer'>
            <div className='page-header-title'>
                <h2>Update Service</h2>
            </div>
            <div className='service-box first-box'>
            <UpdateList/>

            </div>
            <div className='service-box'>
                <UpdateServicePrice/>

            </div>
        </div>
    )
}

export default NurseUPdatePrice
