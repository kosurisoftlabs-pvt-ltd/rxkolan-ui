import React, { useState } from "react";
import axios from "axios";
import "./stockStyle.css";
import { useSelector } from 'react-redux';


const Upload = ({setStore_ID,setFile}) => {
    // const [store_id,setStore_ID] = useState()
    let { roleName,storeId,} = useSelector((state) => state.auth);
    let {   storeList } = useSelector((state) => state.store);

  const uploadImage=(e)=>{
    setFile(e.target.files[0])

  }

      // file coverter

    // const uploadImage = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertBase64(file);
    //     console.log(base64);
    //     setFile(base64);
    //   };

    //   const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //       const fileReader = new FileReader();
    //       fileReader.readAsDataURL(file);

    //       fileReader.onload = () => {
    //         return resolve(fileReader.result);
    //       };

    //       fileReader.onerror = (error) => {
    //         return reject(error);
    //       };
    //     });
    //   };




    return (
        // <div className="upload_purchase">
        <div className="row upload-stock">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="edit_store_box">
                    <form action="" method="POST">
                        {/* <div className="form-group form-marging">
                            <label for="" className="text-danger">Store ID*</label>
                            <select name="storeCat" id="" className="form-control upload-form" onChange={(e) => setStore_ID(e.target.value)} required>
                                <option value={storeId} selected>{storeId}</option>

                            </select>
                        </div> */}

                        {roleName !== "SUPER ADMIN" ? <div className="form-group form-marging">
                                <label for="" className="text-danger">StoreID*</label>
                                <input type="text" className="form-control" value={storeId} required readOnly />
                            </div> : <div className="form-group form-marging">
                                <label for="" className="text-danger">Store ID*</label>
                                <select name="storeCat" id="" className="form-control" onChange={(e) => setStore_ID(e.target.value)} required>
                                <option  value="">Please Select</option>
                                    {storeList?.length > 0 && storeList.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.id}</option>
                                    })

                                    }
                                </select>
                            </div>}

                        <div className="form-group">
                            <label for="" className="text-danger">Upload File*</label>
                            <input type="file" className="form-control upload-form p10" onChange={uploadImage} required />
                        </div>

                    </form>
                </div>
            </div>

        </div>

  );
};

export default Upload;
