import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import AdminDashboard from './Pages/DasboardPage/AdminDashboard';
import StoreManagerDashboard from './Pages/DasboardPage/StoreManagerDashboard';
import Home from './Pages/HomePage/Home';
import Search from './Pages/SearchPage/Search';
import Login from './Pages/LoginPage/Login';
import { useSelector } from 'react-redux';


import GetWindoDimension from './playgroung/GetWindoDimension';
import UpdateStore from './Pages/StoreMaster/UpdateStore';
import AddStoreManager from './Pages/StoreMaster/AddStoreManager';
import LoyaltyManagement from './Pages/LoyaltyManagement/LoyaltyManagement';
import AddRole from './Pages/RoleManagement/AddRole';
import UpdateRole from './Pages/RoleManagement/UpdateRole';
import UploadStock from './Pages/StockManagement/UploadStock';
import StockReport from './Pages/StockManagement/StockReport';
import AdminLogin from './Pages/LoginPage/AdminLogin';
import StoreManager from './Pages/StoreManagerDashboard/StoreManager';
import AddForm from './components/Ambulance/AddForm';
import UpdateForm from './components/Ambulance/UpdateForm';
import AmbulanceDashboard from './Pages/AmbulanceDashboard/Ambulance';

import AdminLayout from './Layout/AdminLayout/AdminLayout';

// -------------------------

import AddAmbulance from './Pages/AmbulanceManagement/AddAmbulance';
import UpdateAmbulance from './Pages/AmbulanceManagement/UpdateAmbulance';
import VerifyAmbulance from './Pages/AmbulanceManagement/VerifyAmbulance';
import AmbulanceReport from './Pages/AmbulanceManagement/AmbulanceReport';
import CreateStore from './Pages/StoreMaster/CreateStore';
import ManagerLayout from './Layout/ManagerLayout/ManagerLayout';
import AmbulanceLayout from './Layout/AmbulanceLayout/AmbulanceLayout';
import NurseProfile from './Pages/NurseManagement/NurseProfile';
import NurseMemberShip from './Pages/NurseManagement/MemberShip';
import NurseService from './Pages/NurseManagement/MyService';
import NurseUPdatePrice from './Pages/NurseManagement/UpdatePrice';
import NurseUPdatePackage from './Pages/NurseManagement/UpdatePackage';
import DiagnosticeMembership from './Pages/DiagnosticManagement/DiagnosticeMembership';
import UploadPurchase from './Pages/TransactionManagement/Purchase/Upload';
import Report from './Pages/TransactionManagement/Purchase/Report';
import UploadSales from './Pages/TransactionManagement/Sales/Upload';
import SalesReport from './Pages/TransactionManagement/Sales/Report';
import About from './Pages/AboutPage/About';
import Contact from './Pages/ContactPage/Contact';
import Menu from './Pages/Menu/Menu';
import RedeemLoyaltyPoint from './Pages/LoyaltyManagement/RedeemLoyaltyPoint';


// distributor
import DistributorLayout from './Layout/DistributorLayout/DistributorLayout';
import DistUploadStock from "./Pages/DistributorManagement/StockManagement/UploadStock"
import DistUpdateStock from "./Pages/DistributorManagement/StockManagement/UpdateStock"

// Diagnostic
import DiagnosticLayout from './Layout/DiagnosticLayout/DiagnosticLayout';
import ReatailLayout from './Layout/RetailLayout/ReatailLayout';
import NurseLayout from './Layout/NurseLayout/NurseLayout';
import SuperAdminLayout from './Layout/SuperAdminLayout/SuperAdminLayout';
import AddRoleName from './Pages/RoleManagement/AddRoleName';
import { useLazyGetAllStoresQuery } from './services/apis/StoreService';
import { useEffect } from 'react';


function App() {

  let  { roleName } = useSelector((state) => state.auth);

  const [getAllStores] = useLazyGetAllStoresQuery()


  useEffect(()=>{
    getAllStores()
  },[])

  // role based routing
  const role = {
    Type1: "admin",
    Type2: "store-manager",
    user: ""

  }
  role.user = role.Type1

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*---------------------------- basic Routes--------------------------------------- */}
          <Route path='/menu' element={<Menu />}></Route>


          {/* ------------------------------------basic Routes--------------------------------------------- */}

          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin/login' element={<AdminLogin />}></Route>
          <Route path='/service' element={"service"}></Route>

          {/* <Route path='/admin2' element={<Admin content={<AddForm/>}/>}></Route> */}
          <Route path='/admin/login' element={<Login />}></Route>


             {/* -------------------------Super Admin Dashboard---------SUPER_ADMIN ROLE------------------------------------- */}
             {
            roleName === "SUPER ADMIN"
             &&
          <>

            <Route path='/admin2' element={"hello"}></Route>

            <Route path='/super-admin' element={<SuperAdminLayout> <AdminDashboard /></SuperAdminLayout>}></Route>


            {/*---------------------------- Ambulance Route------------------------------------- */}

            <Route path='/super-admin/add-ambulane' element={<SuperAdminLayout> <AddAmbulance /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/verify-ambulane' element={<SuperAdminLayout><VerifyAmbulance /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/update-ambulane' element={<SuperAdminLayout><UpdateAmbulance /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/report-ambulane' element={<SuperAdminLayout><AmbulanceReport /></SuperAdminLayout>}></Route>

            {/*-------------------------------- store master---------------------------------------- */}

            <Route path='/super-admin/create-store' element={<SuperAdminLayout><CreateStore /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/update-store' element={<SuperAdminLayout><UpdateStore /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/add-store-manager' element={<SuperAdminLayout><AddStoreManager /></SuperAdminLayout>}></Route>
            {/* ----------------------------------Stock Route---------------------------------------- */}
            <Route path='/super-admin/upload-stock' element={<SuperAdminLayout><UploadStock /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/report-stock' element={<SuperAdminLayout><StockReport /></SuperAdminLayout>}></Route>



            {/* ---------------------------------role Route----------------------------------------- */}
            <Route path='/super-admin/add-role-name' element={<SuperAdminLayout><AddRoleName /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/add-role' element={<SuperAdminLayout><AddRole /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/update-role' element={<SuperAdminLayout><UpdateRole /></SuperAdminLayout>}></Route>


            {/* ----------------------------------nurse rourte---------------------------------------------------------- */}
            <Route path='/super-admin/nursing/location' element={<SuperAdminLayout>Nurse Location</SuperAdminLayout>}></Route>
            <Route path='/super-admin/nursing/profile' element={<SuperAdminLayout><NurseProfile /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/nursing/membership' element={<SuperAdminLayout><NurseMemberShip /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/nursing/service' element={<SuperAdminLayout><NurseService /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/nursing/update/price' element={<SuperAdminLayout><NurseUPdatePrice /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/nursing/update/package' element={<SuperAdminLayout><NurseUPdatePackage /></SuperAdminLayout>}></Route>






            {/* -------------------------------------daignostic route---------------------------------------------------- */}
            <Route path='/super-admin/location' element={<SuperAdminLayout>Location</SuperAdminLayout>}></Route>
            <Route path='/super-admin/profile' element={<SuperAdminLayout><NurseProfile /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/membership' element={<SuperAdminLayout><DiagnosticeMembership /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/service' element={<SuperAdminLayout> service</SuperAdminLayout>}></Route>
            <Route path='/super-admin/update/price' element={<SuperAdminLayout>update price</SuperAdminLayout>}></Route>
            <Route path='/super-admin/update/package' element={<SuperAdminLayout>update packege</SuperAdminLayout>}></Route>

            {/* -------------------------------------transaction management-------------------------------------- */}

            <Route path='/super-admin/transaction/purchase/invoice' element={<SuperAdminLayout>invoice</SuperAdminLayout>}></Route>
            <Route path='/super-admin/transaction/purchase/upload' element={<SuperAdminLayout><UploadPurchase /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/transaction/purchase/report' element={<SuperAdminLayout><Report /></SuperAdminLayout>}></Route>

            <Route path='/super-admin/transaction/sales/invoice' element={<SuperAdminLayout>invoice</SuperAdminLayout>}></Route>
            <Route path='/super-admin/transaction/sales/upload' element={<SuperAdminLayout><UploadSales /></SuperAdminLayout>}></Route>
            <Route path='/super-admin/transaction/sales/report' element={<SuperAdminLayout><SalesReport /></SuperAdminLayout>}></Route>

            {/* -----------------------------------loyaltyPoin Routes */}
            <Route path='/super-admin/loyalty/point' element={<SuperAdminLayout><LoyaltyManagement /></SuperAdminLayout>}></Route>

            {/*----------------------------------- testing routes-------------------------------------- */}
            <Route path='/dimension' element={<GetWindoDimension />}></Route>

          </>}







          {/* -------------------------Admin Dashboard---------ADMIIN ROLE------------------------------------- */}
          {
            roleName === "SUPER ADMIN"
             &&
          <>

            <Route path='/admin2' element={"hello"}></Route>

            <Route path='/admin' element={<AdminLayout> <AdminDashboard /></AdminLayout>}></Route>


            {/*---------------------------- Ambulance Route------------------------------------- */}

            <Route path='/admin/add-ambulane' element={<AdminLayout> <AddAmbulance /></AdminLayout>}></Route>
            <Route path='/admin/verify-ambulane' element={<AdminLayout><VerifyAmbulance /></AdminLayout>}></Route>
            <Route path='/admin/update-ambulane' element={<AdminLayout><UpdateAmbulance /></AdminLayout>}></Route>
            <Route path='/admin/report-ambulane' element={<AdminLayout><AmbulanceReport /></AdminLayout>}></Route>

            {/*-------------------------------- store master---------------------------------------- */}

            <Route path='/admin/create-store' element={<AdminLayout><CreateStore /></AdminLayout>}></Route>
            <Route path='/admin/update-store' element={<AdminLayout><UpdateStore /></AdminLayout>}></Route>
            <Route path='/admin/add-store-manager' element={<AdminLayout><AddStoreManager /></AdminLayout>}></Route>
            {/* ----------------------------------Stock Route---------------------------------------- */}
            <Route path='/admin/upload-stock' element={<AdminLayout><UploadStock /></AdminLayout>}></Route>
            <Route path='/admin/report-stock' element={<AdminLayout><StockReport /></AdminLayout>}></Route>



            {/* ---------------------------------role Route----------------------------------------- */}
            <Route path='/admin/add-role' element={<AdminLayout><AddRole /></AdminLayout>}></Route>
            <Route path='/admin/update-role' element={<AdminLayout><UpdateRole /></AdminLayout>}></Route>


            {/* ----------------------------------nurse rourte---------------------------------------------------------- */}
            <Route path='/admin/nursing/location' element={<AdminLayout>Nurse Location</AdminLayout>}></Route>
            <Route path='/admin/nursing/profile' element={<AdminLayout><NurseProfile /></AdminLayout>}></Route>
            <Route path='/admin/nursing/membership' element={<AdminLayout><NurseMemberShip /></AdminLayout>}></Route>
            <Route path='/admin/nursing/service' element={<AdminLayout><NurseService /></AdminLayout>}></Route>
            <Route path='/admin/nursing/update/price' element={<AdminLayout><NurseUPdatePrice /></AdminLayout>}></Route>
            <Route path='/admin/nursing/update/package' element={<AdminLayout><NurseUPdatePackage /></AdminLayout>}></Route>






            {/* -------------------------------------daignostic route---------------------------------------------------- */}
            <Route path='/admin/location' element={<AdminLayout>Location</AdminLayout>}></Route>
            <Route path='/admin/profile' element={<AdminLayout><NurseProfile /></AdminLayout>}></Route>
            <Route path='/admin/membership' element={<AdminLayout><DiagnosticeMembership /></AdminLayout>}></Route>
            <Route path='/admin/service' element={<AdminLayout> service</AdminLayout>}></Route>
            <Route path='/admin/update/price' element={<AdminLayout>update price</AdminLayout>}></Route>
            <Route path='/admin/update/package' element={<AdminLayout>update packege</AdminLayout>}></Route>

            {/* -------------------------------------transaction management-------------------------------------- */}

            <Route path='/admin/transaction/purchase/invoice' element={<AdminLayout>invoice</AdminLayout>}></Route>
            <Route path='/admin/transaction/purchase/upload' element={<AdminLayout><UploadPurchase /></AdminLayout>}></Route>
            <Route path='/admin/transaction/purchase/report' element={<AdminLayout><Report /></AdminLayout>}></Route>

            <Route path='/admin/transaction/sales/invoice' element={<AdminLayout>invoice</AdminLayout>}></Route>
            <Route path='/admin/transaction/sales/upload' element={<AdminLayout><UploadSales /></AdminLayout>}></Route>
            <Route path='/admin/transaction/sales/report' element={<AdminLayout><SalesReport /></AdminLayout>}></Route>

            {/* -----------------------------------loyaltyPoin Routes */}
            <Route path='/admin/loyalty/point' element={<AdminLayout><LoyaltyManagement /></AdminLayout>}></Route>

            {/*----------------------------------- testing routes-------------------------------------- */}
            <Route path='/dimension' element={<GetWindoDimension />}></Route>

          </>}





          {/* --------------------------Store Manager Role------------------------- */}

          {roleName = "STORE_MANAGER" && <>
            {/* <Route path='/store/manager' element={<ManagerLayout />}></Route> */}

            <Route path='/storemanager' element={<ManagerLayout> <StoreManagerDashboard /></ManagerLayout>}></Route>
            <Route path='/storemanager/add-ambulane' element={<ManagerLayout><AddAmbulance /></ManagerLayout>}></Route>
            <Route path='/storemanager/update-ambulane' element={<ManagerLayout><UpdateAmbulance /></ManagerLayout>}></Route>


            {/* ------------------------------nurse route--------------------------------------------------- */}
            <Route path='/storemanager/location' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/profile' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/membership' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/service' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>


            {/* ---------------------------------Diagnostice route-------------------------------------------------- */}

            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>
            <Route path='/storemanager/update/price' element={<ManagerLayout></ManagerLayout>}></Route>


            {/* ------------------------------------Transaction Route-------------------------------------------- */}
            <Route path='/storemanager/transaction/purchase/invoice' element={<ManagerLayout><UploadPurchase /></ManagerLayout>}></Route>
            <Route path='/storemanager/transaction/purchase/upload' element={<ManagerLayout><UploadPurchase /></ManagerLayout>}></Route>
            <Route path='/storemanager/transaction/purchase/report' element={<ManagerLayout><Report /></ManagerLayout>}></Route>


            <Route path='/storemanager/transaction/sales/invoice' element={<ManagerLayout><UploadSales /></ManagerLayout>}></Route>
            <Route path='/storemanager/transaction/sales/upload' element={<ManagerLayout><UploadSales /></ManagerLayout>}></Route>
            <Route path='/storemanager/transaction/sales/report' element={<ManagerLayout><SalesReport /></ManagerLayout>}></Route>
            {/*------------------------------------Stock Routes-------------------------------------------------- */}

            <Route path='/storemanager/upload-stock' element={<ManagerLayout><UploadStock /></ManagerLayout>}></Route>
            <Route path='/storemanager/report-stock' element={<ManagerLayout><StockReport /></ManagerLayout>}></Route>


            {/* ------------------------------------Loyalty Point Route-------------------------------------------- */}
            <Route path='/storemanager/loyaltypoint' element={<ManagerLayout><RedeemLoyaltyPoint /></ManagerLayout>}></Route>
          </>}

          {/* --------------------------------Ambulance Dashboard----------------------------------- */}

          <Route path='/ambulance' element={<AmbulanceLayout><div>Ambulance</div></AmbulanceLayout>}></Route>
          <Route path='/ambulance/add' element={<AmbulanceLayout><AddAmbulance/></AmbulanceLayout>}></Route>
          <Route path='/ambulance/update' element={<AmbulanceLayout>UPdate</AmbulanceLayout>}></Route>



          {/* ----------------------------------------------Distributor Route------------------------------------------------------------- */}
          <Route path='/distibutor' element={<DistributorLayout><div>Distributor Dashboard</div></DistributorLayout>}></Route>

          <Route path='/distibutor/upload-stock' element={<DistributorLayout><DistUploadStock/></DistributorLayout>}></Route>
          <Route path='/distibutor/update-stock' element={<DistributorLayout><DistUpdateStock/></DistributorLayout>}></Route>



          {/* ------------------------------------------Diagnostic Route--------------------------------------- */}
          <Route path='/diadnosti-center' element={<DiagnosticLayout><div>Diagnostic Center</div></DiagnosticLayout>}></Route>



        {/* -----------------------------------------------------Reatiler Route----------------------------------------------- */}
        <Route path='/retailer' element={<ReatailLayout/>}></Route>

        {/* --------------------------------------------------Nurse Route----------------------------------------------- */}
        <Route path='/nursing' element={<NurseLayout/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
