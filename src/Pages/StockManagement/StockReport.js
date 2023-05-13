
import React,{useState} from 'react'
import Header from '../../components/headers/DashboardHeader'
import Title from '../../components/Ambulance/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import AlertBox from '../../components/Ambulance/AlertBox'
import './stock.css'
import SearchStock from '../../components/Stock/SearchStock'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import StockTable from '../../components/Stock/StockTable'
import { useSearchStockMutation } from '../../services/apis/StockService'
import StockNewTable from '../../components/Stock/StockNewTable'
const StockReport = () => {
  let  { stockList } = useSelector((state) => state.stock);
  let {   storeList } = useSelector((state) => state.store);
  let { roleName,storeId,} = useSelector((state) => state.auth);



  const [storeIds,setStoreIds] = useState()
  const [vendorName,setVendorName] = useState('')
  const [dateFrom,setDateFrom] = useState('')
  const [dateTo,setDateTo] = useState('')
  const [productType,setProductType] = useState('')

  const [searchStock] = useSearchStockMutation()

  const handleSearchStock = async()=>{
    try {

        let payload = {
        storeId: roleName !== "SUPER ADMIN" ? storeId :storeIds,
        vendorName,
        dateFrom,
        dateTo,
        productType,
        }
        await searchStock(payload).unwrap()
        toast.success('Search Completed')

    } catch (error) {
        console.log(error)
      toast.error(error.data.msg || 'error')

    }
}

  return (


<>
<ToastContainer  theme="colored" autoClose={2000}/>

      <div className='ambulance-container'>
        <Title title={"Stock Report"} />
        {/* <AlertBox /> */}
          {/* <SearchStock/> */}

          <div className='search-stock'>
            <form action="">
                <div className="filter_items_box">
                    <div className="filter_item">
                        <label for="" className="text-center">Vendor Name*</label>

                        <input type="text" className="form-control search-control" placeholder="Vendor Name" required  value={vendorName} onChange={(e)=>{setVendorName(e.target.value)}}/>
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Date From </label>
                        <input type="date" className="form-control search-control"  value={dateFrom} onChange={(e)=>{setDateFrom(e.target.value)}}/>
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Date To</label>
                        <input type="date" className="form-control search-control"  value={dateTo} onChange={(e)=>{setDateTo(e.target.value)}}/>
                    </div>
                    <div className="filter_item">
                        <label for="" className="text-center">Product Type</label>
                        <select name="" id="" className="form-control search-control" value={productType} onChange={(e)=>{setProductType(e.target.value)}}>
                            <option value="">Select..</option>
                            <option value="Type1">Type 1</option>
                            <option value="Type2">Type 2</option>
                            <option value="Type3">Type 3</option>
                        </select>
                    </div>

                    {roleName !== "SUPER ADMIN" ? <div className="filter_item">
                                <label for="" className="text-center">Store Id</label>
                                <input type="text" className="form-control" value={storeId} required readOnly />
                            </div> : <div className="filter_item">
                                <label for="" className="text-center">Store Id</label>
                                <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreIds(e.target.value)} required>
                                <option  value="">Please Select</option>
                                    {storeList?.length > 0 && storeList.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.id}</option>
                                    })

                                    }
                                </select>
                            </div>}



                    <div className="filter_item">
                        <label for="" className="pt15 text-center">Action</label>
                        <input type="button" className="form-control search-control bg_self btn-success" value={'Search'} onClick={handleSearchStock}/>
                    </div>
                </div>
            </form>
        </div>



          <StockNewTable data={stockList || []}/>
      </div>
</>

  )
}

export default StockReport












// import React from 'react'
// import Header from '../../components/headers/DashboardHeader'
// import Sidebar from '../../components/sidebar/Sidebar'
// import Title from '../../components/Ambulance/Header'

// import Report from '../../components/Stock/StockReport'
// import './stockStyle.css'
// const StockReport = () => {
//   return (
//     <div className='dashboard-design'>
//     <Sidebar />
//     <div className='dasboard-content'>
//       <Header User="Admin" />
//       <div className='ambulance-container'>
//         <Title title={"Stock Report"} />

//         <div className='add-ambulance-form stock-report'>

//           {/*  */}
//           <Report/>
//           {/*  */}

//         </div>
//       </div>
//     </div>

//   </div>
//   )
// }

// export default StockReport