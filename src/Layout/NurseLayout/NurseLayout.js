import React from 'react'
import Header from '../../components/headers/DashboardHeader'
import Title from '../../components/Ambulance/Header'
import NurseSidebar from '../../components/sidebar/NurseSidebar'

const NurseLayout = ({children}) => {
    return (
        <div className='dashboard-design'>
            <NurseSidebar/>

            <div className='dasboard-content'>
                <Header User="Nurse" />
                <div className='ambulance-container'>
                    <Title title="Nursing Dashboard" />
                    <div className='add-ambulance-form'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NurseLayout
