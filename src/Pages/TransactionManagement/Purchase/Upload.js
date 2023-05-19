import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useSelector } from 'react-redux';


import UploadStockData from '../../../components/Stock/UploadStockData'
import { ToastContainer, toast } from 'react-toastify';


const UploadPurchase = () => {
  let  { storeId } = useSelector((state) => state.auth);

  const navigate=useNavigate()
  const [store_id, setStore_ID] = useState()
  const [file, setFile] = useState(null)

  // API Integration
  useEffect(()=>{
    setStore_ID(storeId)
  },[storeId])

  const UploadPurchaseExcel = async (e) => {
    try {

    e.preventDefault()

    console.log("purchase", store_id, file)


        if (store_id === "" || file === "") {
            return toast.error("Please fill all the fields")
        }
        console.log(store_id, file)

        let formData = new FormData()
        formData.append("store_id", store_id)
        formData.append("file", file)
        formData.append("email_id",localStorage.getItem('email'))

        const config = {
            Headers: {
                "Content-Type": "application/json",
                "Transfer-Encoding":"chunked",
                'Date': new Date().toUTCString(),
                "Keep-Alive":"timeout=60",
                "Connection":"keep-alive"
            }
        }
        const res = await axios.post("http://54.166.130.226:8080/purchase/import", formData, config)
        console.log(res?.data.status)
        if (res?.status === 200) {
          console.log(res)
          toast.success('Uploaded Successfully')
            setFile(null)
            // setStore_ID("")
            setTimeout(()=>{

              window.location.reload();
            },2000)
        } else {
            console.log("Upload Error")
        }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.responseMessage)


    }


    //   API Integration end

    // window.location.reload()
    // }
  }
  return (
    <>
      <ToastContainer  theme="colored" autoClose={2000}/>
    <div className='content-contianer'>
      <div className='page-header-title'>
        <h2>Upload Purchase</h2>
      </div>
      <div className='service-box first-box'>

        <UploadStockData setStore_ID={setStore_ID} setFile={setFile}  />
        <div className="form-group text-center pt10">
          <input type="submit" name="" className="btn btn-primary" value="Upload Purchases" onClick={UploadPurchaseExcel} />
        </div>
      </div>

    </div>
    </>

  )
}

export default UploadPurchase
