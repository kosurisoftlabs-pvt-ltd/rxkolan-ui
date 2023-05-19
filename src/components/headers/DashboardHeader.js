import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

import { useNavigate } from "react-router-dom";



const Header = ({ User }) => {
let {  storeId } = useSelector((state) => state.auth);
const navigate = useNavigate()


const handleLogout = ()=>{
navigate("/")
}
  return (
    <div className="dashboard-header d-flex" style={{justifyContent:'space-between'}}>
      <div className="side-closed-logo"></div>
      <div className="role">
        <h5>Welcome {User}</h5>
      </div>
      <div className="d-flex">
      <div className="p-2" >

      {storeId}
      </div>
      <div className="px-2 p-2" style={{cursor:'pointer'}} onClick={handleLogout}>logout</div>
      </div>

    </div>
  );
};

export default Header;
