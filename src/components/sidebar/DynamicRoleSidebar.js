import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'
import { useSelector } from 'react-redux';

import './sidebar.css'

const DynamicRoleSidebar = () => {
  const [drawer, setDrawer] = useState(false)
  const [isOpenAmb, setIsOpenAmb] = useState(false);
  const [isOpenVendor, setIsOpenVendor] = useState(false);
  const [isOpenStore, setIsOpenStore] = useState(false);
  const [isOpenTransaction, setIsOpenTrasaction] = useState(false);
  const [isOpenStock, setIsOpenStock] = useState(false);
  const [isOpenRole, setIsOpenRole] = useState(false);
  const [isOpenCustomer, setIsOpenCustomer] = useState(false);
  const [isOpenLoyalty, setIsOpenLoyalty] = useState(false);
  const [isOpenNurse, setIsOpenNurse] = useState(false);
  const [isOpenDiagnostic, setIsOpenDiagnostic] = useState(false);
  const [isOpenPurchase, setIsOpenPurchase] = useState(false)

  const [isOpenAmb2, setIsOpenAmb2] = useState(false)

  const {  width } = useWindowDimensions();
  const dimension = width <= 425
  useEffect(() => {
    (dimension ? setDrawer(true) : setDrawer(false))

  }, [dimension])

  let  { dynamicTaskList } = useSelector((state) => state.role);

  console.log(dynamicTaskList,'DL')

  // ----------------------store state in localstorage----------------------------------
  // localStorage.setItem("isOpen", JSON.stringify(false))

  // const isOpen = JSON.parse(localStorage.getItem("isOpen"))
  // console.log("helo", isOpen)



  const toggleAmbulance = async () => {
    setIsOpenAmb(!isOpenAmb);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)

  };
  // -------------------------------------------------------------submenu=-------------------------------

  // const toggleAmbulance2 = async () => {
  //   setIsOpenAmb2(!isOpenAmb2);
  //   setIsOpenVendor(false)
  //   setIsOpenStock(false)
  //   setIsOpenCustomer(false)
  //   setIsOpenStore(false)
  //   setIsOpenTrasaction(false)
  //   setIsOpenLoyalty(false)
  //   setIsOpenRole(false)
  //   setIsOpenNurse(false)
  //   setIsOpenDiagnostic(false)

  // };

  const toggleVendor = () => {
    console.log('working')
    setIsOpenVendor(!isOpenVendor);
    setIsOpenAmb(false);
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  };

  const toggleStore = () => {
    setIsOpenStore(!isOpenStore);
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  };
  const toggleTransaction = () => {
    setIsOpenTrasaction(!isOpenTransaction)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleStock = () => {
    setIsOpenStock(!isOpenStock)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleRole = () => {
    setIsOpenRole(!isOpenRole)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }
  const toggleCustomer = () => {
    setIsOpenCustomer(!isOpenCustomer)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }

  const toggleLoyalty = () => {
    setIsOpenLoyalty(!isOpenLoyalty)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)

  }
  const toggleNurse = () => {
    setIsOpenNurse(!isOpenNurse)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenDiagnostic(false)
  }

  const toggleDiagnostic = () => {
    setIsOpenDiagnostic(!isOpenDiagnostic)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenNurse(false)
  }
  const handleClickDashboard = ()=>{
    setIsOpenAmb(false);
    setIsOpenVendor(false)
    setIsOpenStock(false)
    setIsOpenCustomer(false)
    setIsOpenStore(false)
    setIsOpenTrasaction(false)
    setIsOpenLoyalty(false)
    setIsOpenRole(false)
    setIsOpenNurse(false)
    setIsOpenDiagnostic(false)
  }


  console.log(dynamicTaskList.includes(2202),'22')
  // -------------------------------------------------sub-menu---menu-----------------------------
  const togglePurchase = () => {
    setIsOpenPurchase(!isOpenPurchase)
  }
  useEffect(() => {
    localStorage.setItem("drawer", drawer)
  }, [drawer])

  useEffect(() => {
    const side = localStorage.getItem("drawer")
    console.log(side)
  }, [drawer])

  return (
    <>{
      !drawer ? <>
        <div className="sidebar-container">
          <div className='logo-dashboard'>
            <img src='https://s3.amazonaws.com/rxkolan.com/images/logo.png' alt='logo' />
            <button onClick={(e) => setDrawer(!drawer)}>
              <span className='close-sidebar'>
                <i class="fas fa-angle-left" ></i>
              </span>
            </button>

          </div>

          {/* <div className="collapsible-menu dashboard-menu">
            <span className='side-navb'>
              <NavLink to={"/role/dynamicUser"}>DASHBOARD

              </NavLink>
            </span>

          </div> */}
          {/* ---------------------------------------------------------------------------------------------------------- */}
          <nav className='nav-open'>
            <ul className='nav-open-menu'>
              <li className='sum-menu'>
                <div class="accordion" id="accordionExample">

                  {/* ------------------------------Dashboard------------------------------------------------------ */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button">
                        <NavLink to={"/role/dynamicUser"}>DASHBOARD </NavLink>

                      </button>
                    </h2>

                  </div>


                  {/* ---------------------------Ambulance-------------------------------------------------------- */}

                  <div className="accordion-item">
                  {dynamicTaskList.includes(5000) &&  <h2 className="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Ambulance Management
                      </button>
                    </h2>}
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                           {dynamicTaskList.includes(5001) &&  <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Ambulance</NavLink>
                            </li>}
                          {dynamicTaskList.includes(5002) &&   <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/verify-ambulane"}>Verify Ambulance</NavLink>
                            </li>}
                          {dynamicTaskList.includes(5003) &&   <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Ambulance</NavLink>
                            </li>}
                      {dynamicTaskList.includes(5004) &&       <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/report-ambulane"}>Ambulance Report</NavLink>
                            </li>}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* ----------------------------------------Vendor ------------------------------------------ */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Vendor Management
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Vendor</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Vendor</NavLink>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>


                  {/* -----------------------------------------Store-------------------------------------------- */}
                  <div class="accordion-item">
                {   dynamicTaskList.includes(1000) &&   <h2 class="accordion-header" id="headingOne">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        Store Master
                      </button>
                    </h2>}
                    <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                           {dynamicTaskList.includes(1001) &&  <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/create-store"}>Create Store</NavLink>
                            </li>}

                          {  dynamicTaskList.includes(1002) && <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update-store"}>Update Store</NavLink>
                            </li>}
                     {dynamicTaskList.includes(1003) &&        <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-store-manager"}>Add Store Manager</NavLink>
                            </li>}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------------------Nurse------------------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Nurse Management
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/location"}>Location</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/profile"}>Profile</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/membership"}>Membership</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/service"}>My Service</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/update/price"}>Update Price</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/nursing/update/package"}>Update Package</NavLink>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------------------------------------Diagnostice------------------------------------------- */}

                  <div class="accordion-item">
                  {  dynamicTaskList.includes(6000) &&  <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="true" aria-controls="collapseFifth">
                        Diagnostic Management
                      </button>
                    </h2>}
                    <div id="collapseFifth" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/location"}>Location</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/profile"}>Profile</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/membership"}>Membership</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/service"}>My Service</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update/price"}>Update Price</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update/package"}>Update Package</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------------------------------------------Transaction------------------------------- */}
                  <div class="accordion-item">
                  {   (dynamicTaskList.includes(2000)) &&   <h2 class="accordion-header" id="headingOne">
                   <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTransaction" aria-expanded="true" aria-controls="collapseTransaction">
                        Transaction Management
                      </button>

                    </h2>}
                    <div id="collapseTransaction" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <div class="accordion" id="accordionExample">
                                <div className="collapsible-menu">
                            <span className='side-navb' onClick={togglePurchase}>Purchase Management
                                    {!isOpenPurchase && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
                                    {isOpenPurchase && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
                                  </span>
                                  {isOpenPurchase && (
                                    <nav className='nav-open'>
                                      <ul>
                                       <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/purchase/invoice"}>Purchase Invoice</NavLink>
                                        </li>
                                      {dynamicTaskList.includes(2102) &&   <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/purchase/upload"}>Upload Purchase</NavLink>
                                        </li>}
                                     {dynamicTaskList.includes(2103) &&    <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/purchase/report"}>Purchase Report</NavLink>
                                        </li>}

                                      </ul>
                                    </nav>
                                  )}
                                </div>
                                <div className="collapsible-menu">
                           {dynamicTaskList.includes(2201) &&        <span className='side-navb' onClick={toggleStock}>Sales Management
                                    {!isOpenStock && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
                                    {isOpenStock && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
                                  </span>}
                                  {isOpenStock && (
                                    <nav className='nav-open'>
                                      <ul>


                                     {dynamicTaskList.includes(2202) &&    <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/sales/invoice"}>Sales Invoice</NavLink>
                                        </li>}
                                      {dynamicTaskList.includes(2202) &&   <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/sales/upload"}>Upload Sales</NavLink>
                                        </li>}
                                    {   dynamicTaskList.includes(2203) &&  <li className='sum-menu'>
                                          <NavLink to={"/role/dynamicUser/transaction/sales/report"}>Sales Report</NavLink>
                                        </li>}

                                      </ul>
                                    </nav>
                                  )}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* ----------------------------------------------------------- Stock-------------------------------- */}
                  <div class="accordion-item">
                  { dynamicTaskList.includes(4000) &&   <h2 class="accordion-header" id="headingOne">
                 <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixth" aria-expanded="true" aria-controls="collapseSixth">
                        Stock Management
                      </button>

                    </h2>}
                    <div id="collapseSixth" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                       {dynamicTaskList.includes(4102) &&      <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/upload-stock"}>Upload Stock</NavLink>
                            </li>}

                        { dynamicTaskList.includes(4101) &&    <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/report-stock"}>Report Stock</NavLink>
                            </li>}

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* --------------------------------------------------------- Role------------------------------------ */}
                  <div class="accordion-item">
                  { dynamicTaskList.includes(8000) &&    <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventh" aria-expanded="true" aria-controls="collapseSeventh">
                        Role Management
                      </button>
                    </h2>}
                    <div id="collapseSeventh" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                       {dynamicTaskList.includes(8003) &&    <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-role-name"}>Add Role Name</NavLink>
                            </li>}
                        {dynamicTaskList.includes(8003) &&     <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-role"}>Add Role</NavLink>
                            </li>}

                        {dynamicTaskList.includes(8004) &&     <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update-role"}>Update Role</NavLink>
                            </li>
}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* ------------------------------------------------------Customer--------------------------------- */}

                {
                  dynamicTaskList.includes(3000) &&
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                        Customer Management
                      </button>
                    </h2>
                    <div id="collapseEight" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/add-ambulane"}>Customer Enquiry</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/update-ambulane"}>Item Master Management</NavLink>
                            </li>

                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>}
                  {/* ------------------------------------------------------Loyalty------------------------------ */}
             {dynamicTaskList.includes(2201) &&      <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                        Loyalty Management
                      </button>
                    </h2>
                    <div id="collapseNine" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/loyalty/point"}>Loyalty Points Calculation</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>}

                </div>
              </li>
            </ul>
          </nav>
          {/* ---------------------------------------------------------------------------------------------------------- */}



          {/* <NavLink className="side-nav" to={"/ambulance/management"}> */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleAmbulance}>Ambulance Management
              {!isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenAmb && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenAmb && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/verify-ambulane"}>Verify Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/report-ambulane"}>Ambulance Report</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}

          {/* </NavLink> */}



          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleVendor}>Vendor Management
              {!isOpenVendor && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenVendor && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenVendor && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Vendor</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Vendor</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}

          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStore}>Store Master
              {!isOpenStore && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenStore && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenStore && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/create-store"}>Create Store</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-store"}>Update Store</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-store-manager"}>Add Store Manager</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}

          {/* --------------------------------------- */}

          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleNurse}>Nurse Management
              {!isOpenNurse && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenNurse && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenNurse && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/nursing/update/package"}>Update Package</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}

          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleDiagnostic}>Diagnostic Management
              {!isOpenDiagnostic && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenDiagnostic && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenDiagnostic && (
              <nav>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/location"}>Location</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/profile"}>Profile</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/membership"}>Membership</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/service"}>My Service</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update/price"}>Update Price</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update/package"}>Update Package</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}

          {/* ----------------------- */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleTransaction}>Transaction Management
              {!isOpenTransaction && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenTransaction && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenTransaction && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Purchase Managemnet
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/purchase/invoice"}>Purchase Invoice</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/purchase/upload"}>Upload Purchase</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/purchase/report"}>Purchase Report</NavLink>
                            </li>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Sales Management
                          </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/sales/invoice"}>Sales Invoice</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/sales/upload"}>Upload Sales</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/role/dynamicUser/transaction/sales/report"}>Sales Report</NavLink>
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}
          {/* ------------------------------- */}



          {/* ----------------------------------- */}

          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleStock}>Stock Management
              {!isOpenStock && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenStock && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenStock && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/upload-stock"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/report-stock"}>Report Stock</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}

          {/* ------------------------------------ */}


          {/* -------------------------------------- */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleRole}>Role Management
              {!isOpenRole && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenRole && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenRole && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-role"}>Add Role</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-role"}>Update Role</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          {/* ----------------------------------------   */}



          {/* --------------------------------------- */}
          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleCustomer}>Customer Management
              {!isOpenCustomer && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenCustomer && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenCustomer && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Item Master Management</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div> */}
          {/* ----------------------------------------- */}


          {/* <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleLoyalty}>Loyalty Management
              {!isOpenLoyalty && <i class="collapseIcon cPointer fas fa-angle-down"></i>}
              {isOpenLoyalty && <i class="collapseIcon cPointer fas fa-angle-up"></i>}
            </span>
            {isOpenLoyalty && (
              <nav className='nav-open'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/loyalty/point"}>Loyalty Point Calculation</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div> */}

        </div>

        {/* -------------------------------------side menu is closed------------------------------- */}


      </> :
        <div className='sidebar'>
          <div className='logo-dashboard-close'>
            <button onClick={(e) => setDrawer(!drawer)}>
              <span className='open-sidebar'>
                <i className="fas fa-angle-right" ></i>
              </span>
            </button>
            <img src='https://s3.amazonaws.com/rxkolan.com/images/logo.png' alt='logo' />



          </div>


          <div className="collapsible-menu" >
            <span className='side-navb' onClick={handleClickDashboard}>
              <NavLink to={"/role/dynamicUser"}>
                <i class="fa-solid fa-house"></i>
              </NavLink>
            </span>

          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleAmbulance}>
              <i class="fa-solid fa-truck-medical"></i>
            </span>
            {isOpenAmb && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/verify-ambulane"}>Verify Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Ambulance</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/report-ambulane"}>Ambulance Report</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>


          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleVendor}>
              <i class="fa-solid fa-list"></i>
            </span>
            {isOpenVendor && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu' onClick={toggleVendor}>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Add Vendor</NavLink>
                  </li>

                  <li className='sum-menu' onClick={toggleVendor}>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Update Vendor</NavLink>
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
              <nav className='nav-closed'>
                <ul  onClick={toggleStore}>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/create-store"}>Create Store</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-store"}>Update Store</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-store-manager"}>Add Store Manager</NavLink>
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
              <nav className='nav-closed'>
                <ul   onClick={()=>{
                toggleTransaction()
                    setDrawer(!drawer)
                }}>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/transaction/purchase/upload"}>Purchase Management</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/transaction/sales/upload"}>Sales Management</NavLink>
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
              <nav className='nav-closed'>
                <ul onClick={toggleStock}>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/upload-stock"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/report-stock"}>Report Stock</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleRole}>
              <i class="fa-solid fa-user-tag"></i>
            </span>
            {isOpenRole && (
              <nav className='nav-closed'>
                <ul onClick={toggleRole}>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-role"}>Add Role</NavLink>
                  </li>
                  {/* <br/> */}
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-role"}>Update Role</NavLink>
                  </li>

                </ul>
              </nav>
            )}
          </div>
          <div className="collapsible-menu">
            <span className='side-navb' onClick={toggleCustomer}>
              <i class="fa-solid fa-users"></i>
            </span>
            {isOpenCustomer && (
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/add-ambulane"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/update-ambulane"}>Item Master Management</NavLink>
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
              <nav className='nav-closed'>
                <ul onClick={toggleLoyalty}>
                  <li className='sum-menu'>
                    <NavLink to={"/role/dynamicUser/loyalty/point"}>Loyalty Point Calculation</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>



        </div>
    }</>


  )
}

export default DynamicRoleSidebar
