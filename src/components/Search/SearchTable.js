import React from "react";
import "./search.css";
import Button from "../button/Button";

const Table = (props) => {
  return (
    <div className="search-table">
        <div className="search-heading"> 
            <h1>SEARCH RESULT</h1>
        </div>
      <table className="table-container">
        <tr>
          <th>Shop Name</th>
          <th>Medicine Name</th>
          <th>Company Name</th>
          <th>MRP</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Total</th>
          <th>Action</th>




        </tr>
        {
          props.data ? props.data.map((data)=>{
            return (
              <tr>
              <td>{data.shop}</td>
              <td>{data.name}</td>
              <td>{data.company}</td>
              <td>{data.mrp}</td>
              <td>{data.price}</td>
              <td>{data.discount}</td>
              <td>{data.price-data.discount}</td>
              


              <td><Button name={"Add to Cart"} color={"#3bad55"} /></td>
            </tr>
            )
          }) :
          <tr>
          <td>Shope 1 <br/>

          #30,w-50, road -1 address <br/>
          +1234567890, mail@domain.com</td>
          <td>Medicine 1</td>
          <td>Company 1</td>
          <td>$100</td>
          <td>$100</td>
          <td>10%</td>
          <td>$90</td>




          <td><Button name={"Add to Cart"} color={"#3bad55"} /></td>
        </tr>
        }
       
      </table>
    </div>
  );
};

export default Table;
