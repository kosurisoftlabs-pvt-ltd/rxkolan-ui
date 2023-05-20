import React from "react";
import "./search.css";
import Button from "../button/Button";

const Table = (props) => {
  console.log(props.data,'PD')
  return (
    <div className="search-table">
        <div className="search-heading">
            <h1>Available Medicine</h1>
        </div>
      <table className="table-container">
        <tr>
          {/* <th>Shop Name</th>
          <th>Medicine Name</th>
          <th>Company Name</th>
          <th>MRP</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Total</th>
          <th>Action</th> */}
          <th>Shop Name</th>
          <th>Shop Location</th>
          <th>Medicine Name</th>
          <th>MRP</th>
          <th>Batch No</th>
          <th>Expiry Date</th>





        </tr>
        {
          props.data?.length ? props.data.map((data)=>{
            return (
              <tr>
              <td>{data.shopName}</td>
              <td>{data.shopLocation}</td>
              <td>{data.medicineName}</td>
              <td>{data.mrp}</td>
              <td>{data.batchNo}</td>
              <td>{new Date(data.expiryDate).toDateString()}</td>




            </tr>
            )
          }) :
          <tr>
          <td colSpan={6}>No Data</td>
        </tr>
        }

      </table>
    </div>
  );
};

export default Table;
