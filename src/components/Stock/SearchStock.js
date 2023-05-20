import React from 'react'
// import InputField from '../inputfield/InputField'
import './stockStyle.css'
const SearchStock = () => {
    return (
        <div className='search-stock'>
            <form action="">
                <div className="filter_items_box">
                    <div className="filter_item">
                        <label for="" className="text-center">Vendor Name*</label>

                        <input type="text" className="form-control search-control" placeholder="Vendor Name" required />
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Date From </label>
                        <input type="date" className="form-control search-control" />
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Date To</label>
                        <input type="date" className="form-control search-control" />
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Product Type</label>
                        <select name="" id="" className="form-control search-control">
                            <option value="">Select..</option>
                            <option value="">Type 1</option>
                            <option value="">Type 2</option>
                            <option value="">Type 3</option>
                        </select>
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Store Id</label>
                        <input type="text" className="form-control search-control" placeholder="Store Id" />
                    </div>
                    <div className="filter_item">
                        <input type="submit" className="form-control search-control bg_self btn-success" value="Search" onclick="return confirm('Are you confirm?');" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchStock



























// import React, { useState } from 'react'
// import Button from '../button/Button'
// import InputField from '../inputfield/InputField'

// import './stockStyle.css'

// const SearchStock = () => {
//     const [vendorname,setVendorName]=useState("")
//     const [dateFrom,setDateFrom]=useState("")
//     const [dateTo,setDateTo]=useState("")
//     const [storeId,setStoreID]=useState("")
//     const [productType,setProductType]=useState("")

//   return (
//     <div className='search-details'>
//       <div className='search-field-value search-stock-field'>
//         <label>Vendor Name*</label><br />
//         <InputField type={"text"} name={"Vendor Name"} value={vendorname} handleChange={(e) => setVendorName(e.target.value)} />
//       </div>
//       <div className='search-field-value search-stock-field'>
//         <label>Date From *</label><br />
//         <InputField type={"date"} name={"date"} value={dateFrom} handleChange={(e) => setDateFrom(e.target.value)} />
//       </div>
//       <div className='search-field-value search-stock-field'>
//         <label>Date To *</label><br />
//         <InputField type={"date"} name={"date to"} value={dateTo} handleChange={(e) => setDateTo(e.target.value)} />
//       </div>
//       <div className='search-field-value search-stock-field'>
//       <div className='select-stock'>
//                     <div class="form-group">
//                         <label for="">Product Type*</label>
//                         <select name="" id=""  >
//                             <option value=" ">Select...</option>
//                             <option value="Type 1">Type 1</option>
//                             <option value="Type 2">Type 2</option>
//                             <option value="Type 3">Type 3</option>
//                         </select>
//                     </div>
//                 </div>
//       </div>
//       <div className='search-field-value search-stock-field'>
//         <label>Store Id *</label><br />
//         <InputField type={"text"} name={"store ID"}  value={storeId} handleChange={(e) => setStoreID(e.target.value)} />
//       </div>
//       <div className='search-field-value search-stock-field'>
//         <br/>
//       <Button name={"Search"} color={"#3bad55"} />

//       </div>

//     </div>
//   )
// }

// export default SearchStock
