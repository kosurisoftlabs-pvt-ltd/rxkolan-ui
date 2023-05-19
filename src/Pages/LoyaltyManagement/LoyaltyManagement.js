import React, { useState } from 'react'
import InputField from '../../components/inputfield/InputField'
import Title from '../../components/Ambulance/Header'
import Button from '../../components/button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';



//
import './loyaltyStyle.css'
import { useLoyaltyConfigureMutation } from '../../services/apis/LoyalityPoints'

const LoyaltyManagement = () => {
    const [storeIds, setStoreIDs] = useState("")
    const [volume, setVolume] = useState("")
    const [loyaltypoints, setLoyaltyPoints] = useState("")
    const [fixedDiscountPercentage, setFixedDiscountPercentage] = useState("")
    const [totalSales, setTotalSales] = useState("")
    const [minLoyaltyPoints, setMinLoyaltyPoints] = useState("")
    const [salesVolume, setSalesVolume] = useState("")
    const [totalDiscount, setTotalDiscount] = useState("")
    const [loyaltyConfigure] = useLoyaltyConfigureMutation()
    let { roleName ,storeId, } = useSelector((state) => state.auth);
    let {   storeList } = useSelector((state) => state.store);

    const resetFields = ()=>{
        setStoreIDs("")
        setLoyaltyPoints("")
        setSalesVolume("")
        setFixedDiscountPercentage("")
        setMinLoyaltyPoints("")


    }


    // API Integration
    const ConfigureLoyaltyPoint=async(e)=>{
        try {
            console.log(storeId,loyaltypoints,salesVolume,minLoyaltyPoints,fixedDiscountPercentage)
            e.preventDefault()
            if(storeId===""|| loyaltypoints==="" || salesVolume==="" ||minLoyaltyPoints==="" ||fixedDiscountPercentage===""){
                toast.error("Please fill all the mendatory field")
            }else{
                const payload = {
                    storeId: roleName !== "SUPER ADMIN" ? storeId[0] :storeIds,
                    loyaltyPoints: loyaltypoints,
                    salesVolume: salesVolume,
                    fixedDiscountPercentage: fixedDiscountPercentage,
                    minLoyaltyPoints: minLoyaltyPoints
                }
                await loyaltyConfigure(payload).unwrap()
                resetFields()
                toast.success("Loyalit Configured successfully")
            }
            console.log("Configure Loyalty Points",storeId,loyaltypoints,salesVolume,minLoyaltyPoints,fixedDiscountPercentage)



        } catch (error) {
            console.log(error)
            toast.error(error?.data.responseMessage || "Error")
        }


    }


    return (

                <div className='ambulance-container'>
                 <ToastContainer  theme="colored" autoClose={2000}/>
                    <Title title={"Loyalty Points"} />
                    <div className='scroll-search'>
                        <div className='loalty-point '>
                            <div className='loyality-search-details'>

                            {roleName !== "SUPER ADMIN" ? <div className="search-field-value loyalty-search">
                                <label for="" >StoreID*</label>
                                <input type="text" className="form-control" value={storeId} required readOnly />
                            </div> : <div className="search-field-value loyalty-search">
                                <label for="" >Store ID*</label>
                                <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreIDs(e.target.value)} required value={storeIds}>
                                <option value={''}>Please Select</option>
                                    {storeList?.length > 0 && storeList.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.id}</option>
                                    })

                                    }
                                </select>
                            </div>}
{/*
                                <div className='search-field-value loyalty-search'>
                                    <label>Store ID*</label><br />
                                    <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreID(e.target.value)} required>
                                    <option value="" selected>Select...</option>
                                    <option value="KAL01">KAL01</option>
                                    <option value="KAL02">KAL02</option>
                                    <option value="KAL03">KAL03</option>
                                    <option value="KAL04">KAL04</option>
                                    <option value="KAL05">KAL05</option>
                                </select>
                                </div> */}
                                <div className='search-field-value loyalty-search'>
                                    <label>Sales Volume *</label><br />
                                    <InputField type={"number"} name={"Ex. 100"} value={salesVolume} handleChange={(e) => setSalesVolume(e.target.value)} />
                                </div>
                                <div className='search-field-value loyalty-search'>
                                    <label>Number of points *</label><br />
                                    <InputField type={"number"} name={"Ex. 100"} value={loyaltypoints} handleChange={(e) => setLoyaltyPoints(e.target.value)} />
                                </div>
                                <div className='search-field-value loyalty-search'>
                                    <label>Fixed Discount per 100 points *</label><br />
                                    <InputField type={"text"} name={"Ex. 2%"} value={fixedDiscountPercentage} handleChange={(e) => setFixedDiscountPercentage(e.target.value)} />
                                </div>
                                {/* <div className='search-field-value loyalty-search'>
                                    <label>Total Sales Volume *</label><br />
                                    <InputField type={"number"} name={"Ex.100"} value={totalSales} handleChange={(e) => setTotalSales(e.target.value)} />
                                </div> */}
                                <div className='search-field-value loyalty-search'>
                                    <label>Min Points t get loyalty discount *</label><br />
                                    <InputField type={"number"} name={"Ex. 100"} value={minLoyaltyPoints} handleChange={(e) => setMinLoyaltyPoints(e.target.value)} />
                                </div>
                                {/* <div className='search-field-value loyalty-search'>
                                    <label>Sales volume to be *</label><br />
                                    <InputField type={"number"} name={"Ex. 100"} value={salesVolume} handleChange={(e) => setSalesVolume(e.target.value)} />
                                </div>
                                <div className='search-field-value loyalty-search'>
                                    <label>Total discount *</label><br />
                                    <InputField type={"number"} name={"Ex. 200"} value={totalDiscount} handleChange={(e) => setTotalDiscount(e.target.value)} />
                                </div> */}
                                <div className='search-field-value loyalty-search'>
                                    <br />
                                    <Button name={"Search"} color={"#3bad55"} onClick={ConfigureLoyaltyPoint}  />

                                </div>

                            </div>


                        </div>
                    </div>
                </div>

    )
}

export default LoyaltyManagement
