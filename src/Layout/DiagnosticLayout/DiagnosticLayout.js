import React from 'react'
import Header from '../../components/headers/DashboardHeader'
import Title from '../../components/Ambulance/Header'
import DiagnosticSidebar from '../../components/sidebar/DiagnosticSidebar'
const DiagnosticLayout = ({children},props) => {
    return (
        <div className='dashboard-design'>
            <DiagnosticSidebar/>
            <div className='dasboard-content' style={{ minHeight: "80vh" }}>
                <Header User=" Diagnostic Dashboard" />
                <div className='ambulance-container'>
                    <Title title={props.title} />
                    <div className='add-ambulance-form'>
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DiagnosticLayout
