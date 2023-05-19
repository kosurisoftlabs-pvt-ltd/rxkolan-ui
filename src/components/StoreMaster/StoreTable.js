import React, { useState ,useRef} from 'react'
import './storeStyle.css'
import { useNavigate } from 'react-router-dom'
import { useAddStoreMutation, useLazyGetAllStoresQuery } from '../../services/apis/StoreService';
import { ToastContainer, toast } from 'react-toastify';




const StoreTable = ({setStoreData,onClose}) => {
const closeRef = useRef();

    const Navigate=useNavigate()
    const [storeType, setStoreType] = useState("")
    const [id, setID] = useState("")
    const [name,setName]=useState("")
    const [pincode, setPincode] = useState("")
    const [district, setDistrict] = useState("")
    const [location, setLocation] = useState("")
    const [town, setTown] = useState("")
    const [state, setState] = useState("")
    const [owner, setOwner] = useState("")
    const [ownerAddress, setOwnerAddress] = useState("")
    const [ownerContact, setOwnerContact] = useState("")
    const [secondaryContact, setSecondaryContact] = useState("")
    const [ownerEmail, setOwnerEmail] = useState("")
    // API Integration


    const [addStore] = useAddStoreMutation()
    const [getAllStores] = useLazyGetAllStoresQuery()

    const resetStoreDetails = ()=>{
        setStoreType("")
        setID("")
        setName("")
        setPincode("")
        setDistrict("")
        setLocation("")
        setTown("")
        setOwner("")
        setOwnerContact(0)
        setOwnerAddress("")
        setSecondaryContact(0)
        setOwnerEmail("")
        setState("")



    }

    const addStoreDetails = async (e) => {
        try {

            console.log(storeType, id,name,pincode,district,town,state,owner,location,ownerAddress,ownerContact,ownerEmail)
            // if(storeType==="" || id===""|| pincode===""||town===""||state===""||owner===""||district===""){
            //     return alert("Please fill all the mendatory field")
            // }
            const userData= { storeType,id,name, pincode, district,location,town,state, owner, ownerAddress, ownerContact,secondaryContact, ownerEmail }

            await addStore(userData).unwrap()
           alert("Store Added successfully")
            getAllStores()
            onClose()

        } catch (error) {
            toast.error(error.data.responseMessage)
        }



    }
    return (

<>

                 <ToastContainer  theme="colored" autoClose={2000}/>
        <div classNameName='add-store'>

           <div className='form-field'>
                <div className='store-field'>
                    <label className='store-label text-danger'>Store Category *</label>
                    <select name="storeCat" id="" className="form-control" onChange={(e) => setStoreType(e.target.value)} required value={storeType}>
                        <option value="" selected>Select...</option>
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
                        <input type="text" className="form-control" required value={id} onChange={(e) => setID(e.target.value)} />
                    </div>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Pincode*</label>
                        <input type="text" className="form-control" required value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </div>

                </div>
                <div className="">
                    <div className="form-group w-100  mr-2">
                        <label for="" className="text-danger">Name*</label>
                        <input type="text" className="form-control" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                </div>


                <div className=''>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Location*</label>
                        <input type="text" className="form-control" required value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>

                </div>

                <div className="d-flex">
                    <div className="form-group w-100  me-2">
                        <label for="" className="text-danger">District*</label>
                        <input type="text" className="form-control" required value={district} onChange={(e) => setDistrict(e.target.value)} />
                    </div>
                    <div className="form-group w-100 ">
                        <label for="" className="text-danger">Town*</label>
                        <input type="text" className="form-control" required value={town} onChange={(e) => setTown(e.target.value)} />
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
                        <input type="text" className="form-control" required value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)} />
                    </div>
                </div>
                <div className=''>
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">Owner Contact*</label>
                    <input type="number" className="form-control"  value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">secondary Contact*</label>
                    <input type="number" className="form-control"  value={secondaryContact} onChange={(e) => setSecondaryContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="" className="text-danger">Email Id*</label>
                    <input type="email" className="form-control"  value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} />
                </div>
                <div className="">

                    <div className="w-100 p-1 mt-4">
                        <label className='store-label text-danger'></label>
                        <button type="button" className=" btn btn-primary me-3"   onClick={onClose} >Cancel</button>
                        <button type="button"  name="addAstore" className="btn btn-success me-3"  onClick= {addStoreDetails} >Add Stores</button>
                        <button type="button"  name="addAstore" className="btn btn-warning me-3" onClick= {resetStoreDetails} >Reset</button>

                    </div>
                </div>

            </div>

      </div>
      </>
  );
};

export default StoreTable;
