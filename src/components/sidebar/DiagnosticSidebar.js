import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import useWindowDimensions from '../../constants/GetDimention'

import './sidebar.css'

const DiagnosticSidebar = () => {
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
  // -------------------------------------------------------------submenu=-------------------------------


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
                        <NavLink to={"/diagnostic"}> DASHBOARD </NavLink>

                      </button>
                    </h2>

                  </div>


                  {/* ---------------------------Ambulance-------------------------------------------------------- */}
                  {/* ----------------------------------------Vendor ------------------------------------------ */}
                  {/* -----------------------------------------Store-------------------------------------------- */}
                  {/* -------------------------------------------------------Nurse------------------------------------------- */}
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        Diagnostic Center
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <nav>
                          <ul>
                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/location"}>Location</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/profile"}>Profile</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/membership"}>Membership</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/service"}>My Service</NavLink>
                            </li>
                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/update/price"}>Update Price</NavLink>
                            </li>

                            <li className='sum-menu'>
                              <NavLink to={"/admin/nursing/update/package"}>Update Package</NavLink>
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

          {/*  */}






        </div>
    }</>


  )
}

export default DiagnosticSidebar
