import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import UploadStockData from '../../../components/Stock/UploadStockData'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';



const UploadSales = () => {
  let  { storeId } = useSelector((state) => state.auth);

  const navigate = useNavigate()
  const [store_id, setStore_ID] = useState(storeId)
  const [file, setFile] = useState("")

  // API Integration

  const UploadSalesExcel = async (e) => {
    try {
      e.preventDefault()

      console.log("sales", store_id, file)

      if (store_id === "" || file === "") {
        return toast.error('Error')
      }
      console.log(store_id, file)




      let formData = new FormData()
      formData.append("store_id", store_id)
      formData.append("file", file)
      formData.append("email_id",localStorage.getItem('email'))

      const config = {
        Headers: {
          "Content-Type": "multipart/form-data"
        }
      }
      const res = await axios.post("http://54.166.130.226:8080/sale/import", formData, config)
      console.log(res.status,'RES')
      if (res.status === 200) {
        toast.success('Uploaded Successfully')
        console.log(res)
        setFile("")
        setStore_ID("")
        setTimeout(()=>{

          window.location.reload();
        },1000)
        // navigate("/admin")

      } else {
        toast.error('Error Upload')
      }
    } catch (error) {
      toast.error('Error')
      toast.error(error.response.data.responseMessage)

    }


    //   API Integration end


  }


  return (
    <>


    <div className='content-contianer'>
    <ToastContainer  theme="colored" autoClose={2000}/>
      <div className='page-header-title'>
        <h2>Upload Sales</h2>
      </div>
      <div className='service-box first-box'>

        <UploadStockData setStore_ID={setStore_ID} setFile={setFile} />
        <div className="form-group text-center pt10">
          <input type="submit" name="" className="btn btn-primary" value="Upload Sales" onClick={UploadSalesExcel} />
        </div>
      </div>

    </div>
    </>

  )
}

export default UploadSales
