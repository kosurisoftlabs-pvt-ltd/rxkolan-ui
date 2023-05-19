import React, { useState, useEffect } from 'react'
import InputField from '../inputfield/InputField'
import { useSelector } from 'react-redux';

import Button from '../../components/button/Button'
import { useAddStoreManagerMutation } from '../../services/apis/StoreService'
import { ToastContainer, toast } from 'react-toastify';
import { useLazyGetAllRolesQuery } from '../../services/apis/RoleService';

const AddStoreManager = () => {
    let { roleList } = useSelector((state) => state.role);

    const [owner, setOwner] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [select, setSelect] = useState("")
    const [password, setPassword] = useState("")
    const [getAllRoles] = useLazyGetAllRolesQuery()


    const resetFields = () => {
        setOwner("")
        setEmail("")
        setAddress("")
        setContact("")
        setPassword("")
        setSelect("")

    }



    const [addStoreManager] = useAddStoreManagerMutation()

    const addStoreManagerUser = async () => {
        console.log(owner, email, address, contact, select)
        try {
            if(owner ==="" || email=="" || address=="" || contact=="" || select =="") return toast.error( 'Please add all fields')

            const userData = {
                name: owner, email, address, phoneNumber: contact, role: select, password
            }




            await addStoreManager(userData).unwrap()
            resetFields()
            toast.success("User Added successfully")

        } catch (error) {
            toast.error(error.data.responseMessage || 'error')
        }

    }

    useEffect(() => {
        getAllRoles()
    }, []);


    return (
        <div className='add-store'>
            <ToastContainer theme="colored" autoClose={2000} />

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
                <div className='d-flex'>

                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label '>Select Role *</label>
                        <div style={{ width: '95%' }}>
                            <select name="" id="" class="form-control" onChange={(e) => setSelect(e.target.value)} value={select} style={{ margin: '7px 0', fontSize: "15px" }}>
                                <option value="">Select...</option>
                                {roleList?.length > 0 && roleList.map((item, index) => {
                                    return <option value={item?.roleName} key={index}>{item?.roleName} </option>

                                })}
                            </select>
                        </div>

                    </div>
                    <div className='input-field-form Add-manager-field'>
                        <label className='store-label'>Password *</label>
                        <InputField type={"text"} name={"select"} value={password} handleChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div>

                    <div className='add-manager-btn'>


                        <Button name={"Reset"} color={"#ffc107"} onClick={() => resetFields()} />
                        <Button name={"Add Manager"} color={"#007bff"} onClick={addStoreManagerUser} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddStoreManager
