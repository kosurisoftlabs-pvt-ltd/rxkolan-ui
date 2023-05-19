import React from 'react'
// import Title from './components/Ambulance/AddForm'
import '../../Pages/DasboardPage/dashboard.css'
import '../../Pages/AmbulanceManagement/style.css'
import Header from '../../components/headers/DashboardHeader'
import DynamicRoleSidebar from '../../components/sidebar/DynamicRoleSidebar'
const DynamicLayout = ({ children }) => {

    return (
        <div className='dashboard-design'>
            <DynamicRoleSidebar/>
            <div className='dasboard-content'>
                <Header User="Dynamic Admin" />
                {children}
            </div>

        </div>
    )
}

export default DynamicLayout
