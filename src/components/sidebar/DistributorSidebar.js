import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'

import './sidebar.css'

const DistributorSidebar = () => {
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

  const { height, width } = useWindowDimensions();
  const dimension = width <= 425
  useEffect(() => {
    (dimension ? setDrawer(true) : setDrawer(false))

  }, [dimension])

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

  const toggleAmbulance2 = async () => {
    setIsOpenAmb2(!isOpenAmb2);
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

  const toggleVendor = () => {
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
              <NavLink to={"/admin"}>DASHBOARD

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
                        <NavLink to={"/distributor"}>Distributor </NavLink>

                      </button>
                    </h2>

                  </div>


                  {/* ---------------------------Ambulance-------------------------------------------------------- */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Stock Management
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/upload-stock"}>Upload Stock</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/update-stock"}>Update Stock</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* ----------------------------------------Vendor ------------------------------------------ */}

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Order Management
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/order-history"}>Order History</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>


                  {/* -----------------------------------------Store-------------------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        Payment Method
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav className='nav-open'>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/payment-method"}>Payment Method</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* -------------------------------------------------------Nurse------------------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Retailer Management
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/retailer-purchase"}>Retailer Purchase</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/distibutor/order-history"}>Order History</NavLink>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------------------------------------------Diagnostice------------------------------------------- */}


                  {/* ------------------------------------------------------------Transaction------------------------------- */}

                  {/* ----------------------------------------------------------- Stock-------------------------------- */}

                  {/* --------------------------------------------------------- Role------------------------------------ */}

                  {/* ------------------------------------------------------Customer--------------------------------- */}


                  {/* ------------------------------------------------------Loyalty------------------------------ */}

          {/* ---------------------------------------------------------------------------------------------------------- */}

                </div>
              </li>
            </ul>
          </nav>
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
              <nav className='nav-closed'>
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/upload-stock"}>Upload Stock</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/update-stock"}>Update Stock</NavLink>
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
                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/order-history"}>Order History</NavLink>
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
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/payment-method"}>Payment Method</NavLink>
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
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/retailer-purchase"}>Retailer Purchase</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/distibutor/retailer/order-history"}>Order History</NavLink>
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
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/admin/add-ambulane"}>Upload Stock</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/admin/update-ambulane"}>Report Stock</NavLink>
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
                <ul>
                <li className='sum-menu'>
                    <NavLink to={"/admin/add-role"}>Add Role Name</NavLink>
                  </li>
                  <li className='sum-menu'>
                    <NavLink to={"/admin/add-role"}>Add Role</NavLink>
                  </li>
                  {/* <br/> */}
                  <li className='sum-menu'>
                    <NavLink to={"/admin/update-role"}>Update Role</NavLink>
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
                    <NavLink to={"/admin/add-ambulane"}>Customer Enquiry</NavLink>
                  </li>

                  <li className='sum-menu'>
                    <NavLink to={"/admin/update-ambulane"}>Item Master Management</NavLink>
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
                <ul>
                  <li className='sum-menu'>
                    <NavLink to={"/admin/add-ambulane"}>Loyalty Point Calculation</NavLink>
                  </li>
                </ul>
              </nav>
            )}
          </div>



        </div>
    }</>


  )
}

export default DistributorSidebar
