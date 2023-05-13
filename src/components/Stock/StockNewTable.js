import React from 'react'
import './stockStyle.css'
const StockNewTable = ({data}) => {

    // "manufacturer": "M00308",
    //         "mfName": "ALKEM LABORATORIES (GENERIC/FUTURA)",
    //         "itemCode": "541708.0",
    //         "itemName": "OMEE D CAP",
    //         "supplierName": "PAVAN MEDICAL AGENCIES",
    //         "rack": null,
    //         "batch": "22282408",
    //         "expiryDate": "01-09-2024",
    //         "balQuantity": 720.0,
    //         "balPackQuantity": 36.0,
    //         "balLooseQuantity": 0.0,
    //         "total": null,
    //         "mrpPack": 200.0,
    //         "purRatePerPackAfterGST": 28.560000000000002,
    //         "mrpValue": null,
    //         "itemCategory": null,
    //         "onlineYesNo": "Yes",
    //         "storeId": "KAL03",
    //         "stockValueMrp": 7200.0,
    //         "stockValuePurrate": 1028.16,
    //         "updatedBy": "mahesh101@gmail.com",
    //         "updatedAt": "05-05-2023"
  return (
    <div className='stock-result'>
      <table class="table table-striped">
							<thead class="thead-dark">
								<tr>
									<th scope="col">Manufacturer</th>
									<th scope="col">Manufacturer Name</th>
									<th scope="col">Item Code</th>
									<th scope="col">Item Name</th>
									<th scope="col">Supplier Name</th>
									<th scope="col"> Rack</th>
									<th scope="col"> Batch</th>
									<th scope="col"> Expiry</th>
									<th scope="col"> Balance Qty</th>
									<th scope="col"> Balance Pack Qty</th>
									<th scope="col"> Balance Loose Qty</th>
									<th scope="col">  Total</th>
									<th scope="col">  MRP Pack</th>
									<th scope="col"> Purchase Rate After GST</th>
									<th scope="col"> MRP Value</th>
									<th scope="col"> Item Category</th>
									<th scope="col"> Online</th>
									<th scope="col"> Store Id</th>
									<th scope="col"> Stock Value MRP</th>
									<th scope="col"> Stock Value PER Rate</th>
									<th scope="col">Updated By</th>
									<th scope="col">Updated At</th>
								</tr>
							</thead>

							<tbody>
							{data?.length>0 ? data.map((item)=>{
								return (
									<tr>
									<th >{item.manufacturer || 0}</th>
									<td>{item.mfName || 0}</td>
									<td>{item.itemCode || 0}</td>
									<td>{item.itemName || 0}</td>
									<td>{item.supplierName || 0}</td>
									<td>{item.rack || 0}</td>
									<td>{item.batch || 0}</td>
									<td>{item.expiryDate || 0}</td>
									<td>{item.balQuantity || 0}</td>
									<td>{item.balPackQuantity || 0}</td>
									<td>{item.purchasePrice || 0}</td>
									<td>{item.balLooseQuantity || 0}</td>
									<td>{item.total || 0}</td>
									<td>{item.mrpPack || 0}</td>
									<td>{item.purRatePerPackAfterGST || 0}</td>
									<td>{item.mrpValue || 0}</td>
									<td>{item.onlineYesNo || 0}</td>
									<td>{item.storeId || 0}</td>
									<td>{item.stockValueMrp || 0}</td>
									<td>{item.stockValuePurrate || 0}</td>
									<td>{item.updatedBy || 0}</td>
									<td>{item.updatedAt || 0}</td>
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

export default StockNewTable
