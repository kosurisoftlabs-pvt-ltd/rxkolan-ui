import React from 'react'
// import Title from './components/Ambulance/AddForm'
import '../../Pages/DasboardPage/dashboard.css'
import '../../Pages/AmbulanceManagement/style.css'
import Header from '../../components/headers/DashboardHeader'
import Sidebar from '../../components/sidebar/Sidebar'
const AdminLayout = ({ children }) => {
    
    return (
        <div className='dashboard-design'>

            <Sidebar/>

            <div className='dasboard-content'>
                <Header User="Admin" />

                {/* <AlertBox title={"Ambulance"} />
                <div className='back-to-report'>
                    <Button name={"< Back To Ambulance Report"} color={"#dc3545"} />
                </div> */}

                {children}
            </div>

        </div>
    )
}

export default AdminLayout
