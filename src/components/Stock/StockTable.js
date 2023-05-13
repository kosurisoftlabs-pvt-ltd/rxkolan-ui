import React from 'react'
import './stockStyle.css'
const StockTable = ({data}) => {
  return (
    <div className='stock-result'>
      <table class="table table-striped">
							<thead class="thead-dark">
								<tr>
									<th scope="col">Vendor Name</th>
									<th scope="col">Date</th>
									<th scope="col">Product type</th>
									<th scope="col">Product Name</th>
									<th scope="col">Store id</th>
									<th scope="col">Batch No</th>
									<th scope="col">Exp Date</th>
									<th scope="col">Mfg Date</th>
									<th scope="col">MRP</th>
									<th scope="col">Purchase Discount</th>
									<th scope="col">GST</th>
									<th scope="col">Puchase price</th>
									<th scope="col" class="report100">Qty in Pack</th>
									<th scope="col">Qty in Loose</th>
									<th scope="col" class="report100">Amount at purchse price</th>
								</tr>
							</thead>

							<tbody>
							{data?.length>0 ? data.map((item)=>{
								return (
									<tr>
									<th >{item.vendorName}</th>
									<td>{item.date}</td>
									<td>{item.productType}</td>
									<td>{item.storeId}</td>
									<td>{item.batchNo}</td>
									<td>{item.expiryDate}</td>
									<td>{item.mfgDate}</td>
									<td>${item.mrp}</td>
									<td>{item.discount}</td>
									<td>{item.gst}</td>
									<td>${item.purchasePrice}</td>
									<td>{item.date}</td>
									<td class="report100">NA</td>
									<td>NA</td>
									<td>${item.purchaseAmount}</td>
								</tr>
								)
							}):<tr>

							<td colSpan={15}>No Results found</td>
							</tr>
							}


							</tbody>
						</table>

    </div>
  )
}

export default StockTable
