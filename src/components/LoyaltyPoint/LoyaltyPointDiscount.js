import React, { useState } from 'react'
import LoyaltyPointRedeem from './LoyaltyPointRedeem'
import { ToastContainer, toast } from 'react-toastify';

import "./loyalityPointStyle.css";
import { useSelector } from 'react-redux';
import { useLoyaltyDiscountMutation } from '../../services/apis/LoyalityPoints';


const LoyaltyPointDiscount = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")
    const [storeIds, setStoreIDs] = useState("")
    let { roleName,storeId} = useSelector((state) => state.auth);
    let {  storeList } = useSelector((state) => state.store);


    const [loyaltyPoint, setLoyaltyPoint] = useState([])
    const [loyaltyDiscount] = useLoyaltyDiscountMutation()


    // API Integration

    const Search = async (e) => {
        try {

            e.preventDefault()
            // if (firstName === "" || lastName === "" || customerPhone === "" || storeId === "") {
            //     return alert("Please fill all the field")
            // }
            const userData = {
                firstName, lastName, customerPhone, storeId:"KAL03"
            }
            await loyaltyDiscount(userData).unwrap()
            toast.success("Loyalty Discount successfully")
        } catch (error) {
            toast.error( error.data.responseMessage||'error')

        }





    }
    return (
        <>
                 <ToastContainer  theme="colored" autoClose={2000}/>

            <div className="report_filter_box">
                <div className="alert alert-success">
                    <form action="">
                        <div className="filter_items_box_loyality">

                            {roleName !== "SUPER ADMIN" ? <div className="form-group loyality_item">
                                <label for="" className="text-center">StoreID*</label>
                                <input type="text" className="form-control" value={storeId} required readOnly />
                            </div> : <div className="form-group loyality_item">
                                <label for="" className="text-center">Store ID*</label>
                                <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreIDs(e.target.value)}  required>
                                    {storeList?.length > 0 && storeList.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.id}</option>
                                    })

                                    }
                                </select>
                            </div>}



                            <div className="form-group loyality_item">
                                <label for="" className="text-center">Phone Number*</label>
                                <input type="number" className="form-control" placeholder="Ex. 1234567890" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required />
                            </div>
                            {/* <div className="form-group loyality_item">
                                <label for="" className="text-center">First Name*</label>
                                <input type="text" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group loyality_item">
                                <label for="" className="text-center">Last Name*</label>
                                <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div> */}
                            <div className="form-group loyality_item">
                                <label for="" className="text-center pt20 mb-4"></label>
                                <input type="submit" className="form-control bg_self mt-2 btn-success" style={{ width: "max-content" }} value="Search" onClick={Search} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <LoyaltyPointRedeem />
        </>
    )
}

export default LoyaltyPointDiscount
