import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.css'
const Menu = () => {
    return (
        <div className='dashboard-menu-list'>
            <div className='menu-box'>
                <div className='menu-page'>
                    <h2>Home Page</h2>

                    <button><NavLink to="/">Preview</NavLink> </button>
                </div>

                <div className='menu-page'>
                    <h2>Home Page Login</h2>

                    <button><NavLink to="/login">Preview</NavLink> </button>
                </div>

                <div className='menu-page'>  <h2>Admin dashboard</h2>

                    <button><NavLink to="/admin">Preview</NavLink> </button>
                </div>

                <div className='menu-page'>
                    <h2>Admin Login</h2>

                    <button><NavLink to="/admin/login">Preview</NavLink> </button>
                </div>

                <div className='menu-page'>
                    <h2>Store Manager Dashboard</h2>

                    <button><NavLink to="/storemanager/add-ambulane">Preview</NavLink> </button>
                </div>

            </div>

            {/* ---------------------------------------------------------------- */}
            <div className='menu-box'>

                <div className='menu-page'>
                    <h2>Ambulance Dashboard</h2>

                    <button><NavLink to="/ambulance">Preview</NavLink> </button>
                </div>
                <div className='menu-page'>
                    <h2>Diagnostic Center Dashboard</h2>

                    <button><NavLink to="/diadnosti-center">Preview</NavLink> </button>
                </div>
                <div className='menu-page'>
                    <h2>Distributor Dashboard</h2>

                    <button><NavLink to="/distibutor">Preview</NavLink> </button>
                </div>
                <div className='menu-page'>
                    <h2> Reatiler Dashboard</h2>

                    <button><NavLink to="/retailer">Preview</NavLink> </button>
                </div>
                <div className='menu-page'>
                    <h2>Nurse DASHBOARD</h2>

                    <button><NavLink to={"/nursing"}>Preview</NavLink> </button>
                </div>


            </div>

        </div>
    )
}

export default Menu
