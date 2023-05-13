
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../../constants/GetDimention'

import '../../sidebar/sidebar.css'

const Sidebar = () => {
  const [drawer, setDrawer] = useState(false)
  const [isOpenAmb, setIsOpenAmb] = useState(false);
  const [isOpenVendor, setIsOpenVendor] = useState(false);
  const [isOpenStore, setIsOpenStore] = useState(false);
  const [isOpenTransaction, setIsOpenTrasaction] = useState(false);
  const [isOpenStock, setIsOpenStock] = useState(false);
  const [isOpenRole, setIsOpenRole] = useState(false);
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenLoyalty, setIsOpenLoyalty] = useState(false);

  const { height, width } = useWindowDimensions();
  const dimension = width <= 425
  useEffect(() => {
    (dimension ? setDrawer(true) : setDrawer(false))

  }, [dimension])


  // (width<=425 ?setDrawer(true):setDrawer(false))
  //  if(window.screen.width<=425){
  //     setDrawer(true)
  //     return
  //  }






  const toggleAmbulance = () => {
    setIsOpenAmb(!isOpenAmb);
  };

  const toggleVendor = () => {
    setIsOpenVendor(!isOpenVendor);
  };

  const toggleStore = () => {
    setIsOpenStore(!isOpenStore);
  };
  const toggleTransaction = () => {
    setIsOpenTrasaction(!isOpenTransaction)
  }

  const toggleStock = () => {
    setIsOpenStock(!isOpenStock)
  }

  const toggleRole = () => {
    setIsOpenRole(!isOpenRole)
  }
  const toggleCustomer = () => {
    setIsOpenCustomer(!isOpenCustomer)
  }

  const toggleLoyalty = () => {
    setIsOpenLoyalty(!isOpenLoyalty)
  }
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


          {/* <NavLink className="side-nav" to={"/ambulance/management"}> */}
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleAmbulance}>Ambulance Management
              {!isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenAmb && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/add-ambulane"}>Add Ambulance</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update-ambulane"}>Update Ambulance</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>

          {/* </NavLink> */}



          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleVendor}>Nurse Management
              {!isOpenVendor && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenVendor && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenVendor && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/package"}>Update Package</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>

          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStore}>Diagnostic Management
            {!isOpenStore && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenStore && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenStore && (
              <nav>
                <ul>
                <li className='sum-menu'>
                    <NavLink to={"/storemanager/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/package"}>Update Package</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* ----------------------- */}
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleTransaction}>Transaction Management
            {!isOpenTransaction && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenTransaction && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenTransaction && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/purchage"}>Purchase Management</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/sales"}>Sales Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          {/* ------------------------------- */}



          {/* ----------------------------------- */}

          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStock}>Stock Management
            {!isOpenStock && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenStock && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenStock && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/upload-stock"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/report-stock"}>Report Stock</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>

          {/* ------------------------------------ */}


          {/* -------------------------------------- */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleRole}>Role Management
            {!isOpenRole && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenRole && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenRole && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/admin/add-role"}>Add Role</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/admin/update-role"}>Update Role</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          {/* ----------------------------------------   */}



          {/* --------------------------------------- */}
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleCustomer}>Customer Management
            {!isOpenCustomer && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenCustomer && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenCustomer && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/enquiry"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/item/master"}>Item Master Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          {/* ----------------------------------------- */}


          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleLoyalty}>Loyalty Management
            {!isOpenLoyalty && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenLoyalty && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenLoyalty && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/loyalty/point"}>Loyalty Point Calculation</NavLink>
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
              <NavLink to={"/admin"}>
                <i class="fa-solid fa-house"></i>
              </NavLink>
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


          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleVendor}>
              <i class="fa-solid fa-list"></i>
            </span>
            {isOpenVendor && (
              <nav>
                <ul>
                <li className='sum-menu'>
                    <NavLink to={"/storemanager/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/package"}>Update Package</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>


          {/*  */}


          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStore}>
              <i class="fa-solid fa-store"></i>
            </span>
            {isOpenStore && (
              <nav>
                <ul>
                <li className='sum-menu'>
                    <NavLink to={"/storemanager/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/update/package"}>Update Package</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleTransaction}>
              <i class="fa-solid fa-exchange-alt"></i>
            </span>
            {isOpenTransaction && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/purchage"}>Purchase Management</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/sales"}>Sales Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStock}>
              <i class="fa-solid fa-warehouse"></i>
            </span>
            {isOpenStock && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/upload-stock"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/stock-report"}>Report Stock</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleRole}>
              <i class="fa-solid fa-user-tag"></i>
            </span>
            {isOpenRole && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/admin/add-role"}>Add Role</NavLink>
                  </li>
                    {/* <br/> */}
                  {/* <li className='sum-menu'>
                    <NavLink to={"/admin/update-role"}>Update Role</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleCustomer}>
              <i class="fa-solid fa-users"></i>
            </span>
            {isOpenCustomer && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/enquiry"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/item/master"}>Item Master Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleLoyalty}>
              <i class="fa-solid fa-fingerprint"></i>
            </span>
            {isOpenLoyalty && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/storemanager/loyalty"}>Loyalty Point Calculation</NavLink>
                  </li>
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
