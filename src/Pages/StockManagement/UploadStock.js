import React,{useState} from 'react'
import Header from '../../components/headers/DashboardHeader'
import Sidebar from '../../components/sidebar/Sidebar'
import Title from '../../components/Ambulance/Header'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import './stock.css'
import UploadStockData from '../../components/Stock/UploadStockData'
import AlertBox from '../../components/Ambulance/AlertBox'
const UploadStock = () => {

  const navigate = useNavigate()
  const [store_id, setStore_ID] = useState("")
  const [file, setFile] = useState("")

  const UploadStockExcel = async (e) => {
    e.preventDefault()

    console.log("stocl", store_id, file)

    if (store_id === "" || file === "") {
      return alert("Please fill all the fields")
    }
    console.log(store_id, file)




    let formData = new FormData()
    formData.append("store_id", store_id)
    formData.append("file", file)

    const config = {
      Headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const res = 2
    // const res = await axios.post("http://54.166.130.226:8080/sale/import", formData, config)
    // console.log(res.status)
    if (res.status === 200) {
      console.log(res)
      setFile("")
      setStore_ID("")
      navigate("/admin")
    } else {
      console.log("error")
    }



  }


  return (


  //   <div className='content-contianer'>
  //   <div className='page-header-title'>
  //     <h2>Upload Purchase</h2>
  //   </div>
  //   <div className='service-box first-box'>

  //     <UploadStockData setStore_ID={setStore_ID} setFile={setFile} />
  //     <div className="form-group text-center pt10">
  //       <input type="submit" name="" className="btn btn-primary" value="Upload Purchases" onClick={UploadPurchaseExcel} />
  //     </div>
  //   </div>

  // </div>


    <div className='content-contianer'>
       <div className='page-header-title'>
       <h2>Upload Stock</h2>
    </div>
      {/* <AlertBox /> */}
      <div className='service-box first-box'>

        <UploadStockData />

      <div className="form-group text-center pt10">
          <input type="submit" name="" className="btn btn-primary" value="Upload Stocks" onClick={UploadStockExcel} />
        </div>
      </div>
    </div>

  )
}

export default UploadStock
