import React from 'react'
import Button from '../button/Button'
import './style.css'
const AmbulanceDetailTable = (props) => {
  console.log("filter data ----",[props.searchResult])
  const veryfy=async()=>{
   
  }
  return (
    // <div>
      <div className="search-result">
        
      <table className="table-container">
        <tr>
          <th>Registration Number</th>
          <th>VIN</th>
          <th>Phone No.</th>
          <th>Contact person</th>
          <th>Registration RTO</th>
          <th>State</th>
          <th>RC Document</th>
          <th>Ambulane License</th>
          <th>Action</th>
          
         




        </tr>
        {
          props.searchResult ? [props.searchResult].map((data)=>{
            return (
              <tr>
              <td>{data.registrationNo}</td>
              <td>{data.vin}</td>
              <td>{data.phone}</td>
              <td>{data.Rto}</td>
              <td>{data.state}</td>
              <td>{data.document}</td>
              <td>{data.licence}</td>
              {/* <td>{data.licence}</td> */}

              


              <td><Button className="d-btn" name={"Verify"} color={"#3bad55"}  />
              <Button className="d-btn" name={"Verify"} color={"#3bad55"}  /></td>
            </tr>
            )
          }) :
          <tr>
          <td>Registration Number</td>
          <td>VIN</td>
          <td>Phone No.</td>
          <td>Contact person</td>
          <td>Registration RTO</td>
          <td>State</td>
          <td>RC Document</td>
          <td>Ambulane License</td>




          <td><Button name={"Verify"} color={"#3bad55"}  width={"20px"} onClick={veryfy} />
          </td>
        </tr>
        }
       
      </table>
    </div>
    // </div>
  )
}

export default AmbulanceDetailTable
