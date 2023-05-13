import React, { useEffect } from "react";


const Header = ({ User }) => {
  return (
    <div className="dashboard-header">
      <div className="side-closed-logo"></div>
      <div className="role">
        <h5>Welcome {User}</h5>
      </div>
    </div>
  );
};

export default Header;
