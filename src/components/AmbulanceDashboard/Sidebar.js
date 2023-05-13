
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'

import '../../components/sidebar/sidebar.css'

const Sidebar = () => {
    const [drawer, setDrawer] = useState(false)
    const [isOpenAmb, setIsOpenAmb] = useState(false);
    const { height, width } = useWindowDimensions();
    const dimension = width <= 425
    useEffect(() => {
        (dimension ? setDrawer(true) : setDrawer(false))

    }, [dimension])

    const toggleAmbulance = () => {
        setIsOpenAmb(!isOpenAmb);
    };

    return (
        <>{
            !drawer ? <>
                <div className="sidebar-container">
                    <div className='logo-dashboard'>
                        <img src='https://project.bdxpo.com/kolanstores/homepage/images/logo.png' alt='logo' />
                        <button onClick={(e) => setDrawer(!drawer)}>
                            <span className='close-sidebar'>
                                <i class="fas fa-angle-left" ></i>
                            </span>
                        </button>
                    </div>
                    <div className="collapsible-menu dashboard-menu">
                        <span className='side-navb'>
                            <NavLink to={"/storemanager"}>DASHBOARD
                            </NavLink>
                        </span>
                    </div>

                    <div className="collapsible-menu">
                        <span className='side-navb' onClick={toggleAmbulance}>Ambulance Management
                            {!isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
                            {isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
                        </span>
                        {isOpenAmb && (
                            <nav>
                                <ul>
                                    <li className='sum-menu'>
                                        <NavLink to={"/ambulance/add"}>Add Ambulance</NavLink>
                                    </li>

                                    <li className='sum-menu'>
                                        <NavLink to={"/ambulance/update"}>Update Ambulance</NavLink>
                                    </li>

                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </> :
                <div className='sidebar'>
                    <div className='logo-dashboard-close'>
                        <button onClick={(e) => setDrawer(!drawer)}>
                            <span className='open-sidebar'>
                                <i className="fas fa-angle-right" ></i>
                            </span>
                        </button>
                        <img src='https://project.bdxpo.com/kolanstores/homepage/images/logo.png' alt='logo' />



                    </div>


                    <div className="collapsible-menu dashboard-menu">
                        <span className='side-navb'>
                        <nav>
                            <NavLink to={"/admin"}>
                                <i class="fa-solid fa-house"></i>
                            </NavLink>
                        </nav>
                        </span>

                    </div>
                    <div className="collapsible-menu">
                        <span className='side-navb' onClick={toggleAmbulance}>
                            <i class="fa-solid fa-truck-medical"></i>
                        </span>
                        {isOpenAmb && (
                            <nav>
                                <ul>
                                    <li className='sum-menu'>
                                        <NavLink to={"/storemanager/add-ambulane"}>Add Ambulance</NavLink>
                                    </li>
                                    {/* <li className='sum-menu'>
                    <NavLink to={"/admin/verify-ambulane"}>Verify Ambulance</NavLink>
                  </li> */}
                                    <li className='sum-menu'>
                                        <NavLink to={"/storemanager/update-ambulane"}>Update Ambulance</NavLink>
                                    </li>
                                    {/* <li className='sum-menu'>
                    <NavLink to={"/admin/report-ambulane"}>Ambulance Report</NavLink>
                  </li> */}
                                </ul>
                            </nav>
                        )}
                    </div>




                    {/* </div> */}

                </div>
        }</>


    )
}

export default Sidebar
