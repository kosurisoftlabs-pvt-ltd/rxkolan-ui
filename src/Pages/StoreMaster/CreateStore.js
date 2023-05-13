import React, { useEffect } from 'react'
import Title from '../../components/Ambulance/Header'
import '../DasboardPage/dashboard.css'
// import './style.css'
import AlertBox from '../../components/Ambulance/AlertBox'
import Store from '../../components/StoreMaster/Store'
import StoreDetailsTable from '../../components/StoreMaster/StoreDetailsTable'
import {  useLazyGetAllStoresQuery } from '../../services/apis/StoreService'
import { useSelector } from 'react-redux';


const CreateStore = () => {
    let { storeList } = useSelector((state) => state.store);
    console.log(storeList, 'SLEECTOR')


    const [ getAllStores, {data: storesAllData} ] = useLazyGetAllStoresQuery()
 useEffect(()=>{
getAllStores()
 },[])

    console.log(storesAllData, "STORE_RESP")
    return (
        <>
            {Object.keys(storeList)?.length > 0 && <div className='ambulance-container'>
                <Title title={"Store Master"} />
                <AlertBox msg={"Store created successfully , you want to add one more"} />


                <Store />


                <div className='add-ambulance-form'>

                    <StoreDetailsTable  storeData={storesAllData?.stores}/>


                </div>
            </div>}
        </>


    )
}

export default CreateStore
