import React from 'react'
// import Title from './components/Ambulance/AddForm'
import '../../Pages/DasboardPage/dashboard.css'
import '../../Pages/AmbulanceManagement/style.css'
import Header from '../../components/headers/DashboardHeader'
import SuperAdminSidebar from '../../components/sidebar/SuperAdminSidebar'
const SuperAdminLayout = ({ children }) => {

    return (
        <div className='dashboard-design'>
            <SuperAdminSidebar/>
            <div className='dasboard-content'>
                <Header User="Super Admin" />
                {children}
            </div>

        </div>
    )
}

export default SuperAdminLayout
