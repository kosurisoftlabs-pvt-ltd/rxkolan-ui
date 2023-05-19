import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import './storeStyle.css'
import { useNavigate } from 'react-router-dom'
import { useUpdateStoreMutation } from '../../services/apis/StoreService'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const UpdateForm = () => {
    const navigate = useNavigate()
    let {  storeList } = useSelector((state) => state.store);



    const [storeType, setStoreType] = useState("")
    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
    const [location, setLocation] = useState("")
    const [district, setDistrict] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState("")
    const [owner, setOwner] = useState("")
    const [ownerAddress, setOwneraddress] = useState("")
    const [ownerContact, setOwnercontact] = useState("")
    const [secondaryContact, setSecondaryContact] = useState("")

    const [ownerEmail, setOwnerEmail] = useState("")
    const [status, setStatus] = useState("")

    const [updateStore] = useUpdateStoreMutation()
    // const submit = async (e) => {
    //     e.preventDefault()
    //     const data = { storeType, id, name, pincode, location, district, town, state, owner, ownerAddress, ownerContact, secondaryContact, ownerEmail, status }


    // }
    const handleStoreIdChange = (e)=>{
        setID(e.target.value)

        let data = storeList.filter(item=>item.id===e.target.value)
        if(data?.length>0){
            setOwner(data[0]?.owner)
            setName(data[0]?.name)
            setOwnerEmail(data[0]?.ownerContact)
            setOwneraddress(data[0]?.ownerAddress)
            setSecondaryContact(data[0]?.secondaryContact)
            setOwnerEmail(data[0]?.ownerEmail)
            setPincode(data[0]?.pincode)
            setLocation(data[0]?.location)
            setDistrict(data[0]?.district)
            setTown(data[0]?.town)

        }

    }

    const updateStoreDetails = async (e) => {
        try {

            e.preventDefault()
            console.log(storeType, id,name,pincode,district,town,state,owner,location,ownerAddress,ownerContact,ownerEmail)
            if(id===""){
                return toast.error("Please fill all the mendatory field")
            }
            const userData= { storeType,id,name, pincode, district,location,town,state, owner, ownerAddress, ownerContact,secondaryContact, ownerEmail,state,status }




            await updateStore(userData).unwrap()
            setOwner("")
            setOwnerEmail("")
            setOwneraddress("")
            setSecondaryContact("")
            setOwnerEmail("")
            setStoreType("")
            setID("")
            setPincode("")
            setLocation("")
            setDistrict("")
            setTown("")
            setStatus("")
            toast.success("Store Updated successfully")

        } catch (error) {
            toast.error( error.data.responseMessage|| 'error')
        }



    }
    return (


        <div className='update-store'>
                 <ToastContainer  theme="colored" autoClose={2000}/>

            <div className='form-field'>
                <div className='store-field'>
                    <label className='store-label text-danger'>Store Category *</label>
                    <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreType(e.target.value)} value={storeType}>
                        <option value="" >Select...</option>
                        <option value="Pharmacy"  >Pharmacy</option>
                        <option value="Rice">Rice</option>
                        <option value="Paints">Paints</option>
                        <option value="Hardware">Hardware</option>
                        <option value="cementandIron">cementandIron</option>
                    </select>
                    {/* <InputField type={"select"} name={"Select"} value={category} handleChange={(e) => setCategory(e.target.value)} /> */}
                </div>
                <div className="d-flex">
                    <div className="form-group w-100  me-2">
                        <label for="" className="text-danger">Store ID*</label>
                        <select name="storeCat" id="" className="form-control" onChange={handleStoreIdChange}  value={id}>
                                    {storeList?.length > 0 && storeList.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.id}</option>
                                    })

                                    }
                                </select>
                    </div>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Pincode*</label>
                        <input type="text" className="form-control" required value={pincode} onChange={(e) => setPincode(e.target.value)} disabled/>
                    </div>

                </div>
                <div className="">
                    <div className="form-group w-100  mr-2">
                        <label for="" className="text-danger">Name*</label>
                        <input type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} disabled/>
                    </div>

                </div>


                <div className=''>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Location*</label>
                        <input type="text" className="form-control" required value={location} onChange={(e) => setLocation(e.target.value)} disabled/>
                    </div>

                </div>

                <div className="d-flex">
                    <div className="form-group w-100  me-2">
                        <label for="" className="text-danger">District*</label>
                        <input type="text" className="form-control" required value={district} onChange={(e) => setDistrict(e.target.value)} disabled/>
                    </div>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Town*</label>
                        <input type="text" className="form-control" required value={town} onChange={(e) => setTown(e.target.value)} disabled/>
                    </div>

                </div>

                <div className=''>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">State*</label>
                        <input type="text" className="form-control" required value={state} onChange={(e) => setState(e.target.value)} />
                    </div>
                </div>

                <div className="d-flex ">
                    <div className="form-group w-100  me-2">
                        <label for="" className="text-danger">Store Owner*</label>
                        <input type="text" className="form-control" required value={owner} onChange={(e) => setOwner(e.target.value)} />
                    </div>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Owner Address*</label>
                        <input type="text" className="form-control" required value={ownerAddress} onChange={(e) => setOwneraddress(e.target.value)} />
                    </div>
                </div>
                <div className=''>
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">Owner Contact*</label>
                    <input type="number" className="form-control" required value={ownerContact} onChange={(e) => setOwnercontact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">secondary Contact*</label>
                    <input type="number" className="form-control" required value={secondaryContact} onChange={(e) => setSecondaryContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">Email Id*</label>
                    <input type="email" className="form-control" required value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
                </div>
                <div className="">
                    <div className="w-100 p-1 store-field">
                        <label className='store-label text-danger'>Status *</label>
                        <select name="" id="" className="form-control" onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="w-50 p-1 mt-4">
                        <label className='store-label text-danger'></label>

                        <input type="button" name="addAstore" value={'Update'} className="btn btn-primary update-store-btn" onClick={updateStoreDetails} />
                    </div>
                </div>

            </div>



        </div>

    )
}

export default UpdateForm
