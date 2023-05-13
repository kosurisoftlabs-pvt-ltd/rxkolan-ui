import React from 'react'
import Header from '../../components/headers/DashboardHeader'

import Title from '../../components/Ambulance/Header'
import RetailerSidebar from '../../components/sidebar/RetailSidebar'

const ReatailLayout = ({ children }) => {
    return (
        <div className='dashboard-design'>
            <RetailerSidebar />

            <div className='dasboard-content'>
                <Header User="..." />
                <div className='ambulance-container'>
                    <Title title="Retailer" />
                    <div className='add-ambulance-form'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReatailLayout
