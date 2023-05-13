import React, { useState } from 'react'
import InputField from '../inputfield/InputField'
import Button from '../../components/button/Button'
import { useAddStoreManagerMutation } from '../../services/apis/StoreService'
import { ToastContainer, toast } from 'react-toastify';

const AddStoreManager = () => {
    const [owner, setOwner] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [select, setSelect] = useState("")
    const [addStoreManager] = useAddStoreManagerMutation()

     const addStoreManagerUser = async()=>{
         console.log(owner,email,address,contact,select)
         try {

            const userData= {
                name:owner,email,address,phoneNumber:contact,role:select, password: "test123"
            }




            await addStoreManager(userData).unwrap()
            toast.success("User Added successfully")

        } catch (error) {
            toast.error( error.data.responseMessage|| 'error')
        }

     }



    return (
        <div className='add-store'>
                 <ToastContainer  theme="colored" autoClose={2000}/>

            <div className='form-field'>
                <div className='d-flex w-100'>
                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>Store Owner *</label>
                        <InputField type={"text"} name={"Store Owner"} value={owner} handleChange={(e) => setOwner(e.target.value)} />
                    </div>
                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>Owner Address *</label>
                        <InputField type={"text"} name={"Owner address"} value={address} handleChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>

                <div className='d-flex'>
                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>Owner Contact *</label>
                        <InputField type={"text"} name={"Owner Contact"} value={contact} handleChange={(e) => setContact(e.target.value)} />
                    </div>
                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>Email Id *</label>
                        <InputField type={"text"} name={"Email Id"} value={email} handleChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div>
                <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>select *</label>
                        <InputField type={"text"} name={"select"} value={select} handleChange={(e) => setSelect(e.target.value)} />
                    </div>
                    <div className='add-manager-btn'>


                    <Button name={"Reset"} color={"#ffc107"} onClick={()=>console.log("hello update")} />
          <Button name={"Add Manager"} color={"#007bff"}  onClick={addStoreManagerUser}/>
</div>
                </div>

            </div>
        </div>
    )
}

export default AddStoreManager
