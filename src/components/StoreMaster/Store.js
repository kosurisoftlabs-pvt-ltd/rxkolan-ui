import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import './storeStyle.css'
import StoreTable from './StoreTable'
const AddStore = () => {

const [storeData,setStoreData]=useState({
    category:"",
    storeId:""
})


    return (
        <div className='add-store'>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Store+
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content store-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add a new Store</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <StoreTable setStoreData={setStoreData}/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStore
