import React, { useState } from "react";
import "./navbar.css";
import { Link,useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  const [medicine,setMedicine]=useState("")
  const [location,setLocation]=useState("")

    const handleSearch= async()=>{
      // const params={
      //   location:location,
      //   medicine:medicine
      // }
      // console.log(location,medicine)
      navigate("/search")

      // search API
    //  const res=searchMedicine(params)
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg">
      <div className="container-fluid">
        <div className="logo">
         <Link to='/'><img
            src="https://s3.amazonaws.com/rxkolan.com/images/logo.png"
            alt="logo"
          />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              style={{ color: "#fff", fontSize: "20px" }}
              className="fa-solid fa-bars"
            ></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center navigation"
          id="navbarSupportedContent"
        >
          <form className="d-flex flex-r form-block">
            <div className="left-block">
            <select class="select">
              <option selected> Services</option>
              <option value="Medicine">Medicine</option>
              <option value="Diagnostic">Diagnostic</option>
              <option value="Ambulance">Ambulance</option>
              <option value="Primary">Primary Care</option>
            </select>
            <input
              className="form-control search "
              type="search"
              placeholder="ENTER MEDICINE NAME"
              aria-label="Search"
              value={medicine}
              onChange={(e)=>setMedicine(e.target.value.toUpperCase())}
            />
            </div>
            <div className="location-wrap">
            <input
              className="form-control search search-location"
              type="search"
              placeholder="LOCATION"
              aria-label="Search"
              value={location}
              onChange={(e)=>setLocation(e.target.value.toUpperCase())}
            />
            <button className="btn btn-success" type="submit" onClick={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            </div>
          </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 drop">

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/menu" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/service">Services</a></li>
            <li><a className="dropdown-item" href="/about">About</a></li>
            <li><a className="dropdown-item" href="/contact">Contactus</a></li>
            <hr></hr>
            <li><a className="dropdown-item" href="/logout">Logout</a></li>

          </ul>
        </li>

      </ul>
      </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
