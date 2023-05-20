import React, { useState } from 'react'
// import Role from '../../components/Role/Role'
import Title from '../../components/Ambulance/Header'
import { useAddRolesMutation, useLazyGetAllRolesQuery } from '../../services/apis/RoleService'
import { ToastContainer, toast } from 'react-toastify';
import "./roleStyle.css"


const AddRoleName = () => {

const [addRoles] = useAddRolesMutation()
const [getAllRoles] = useLazyGetAllRolesQuery()


    const [roleList, setRoleList] = useState([{
        id: 0,
        roleName: '',
        roleId: ''
    }])

    const handleRoleAdd = () => {
        console.log('wokring')

        const roleDynamicId = roleList.map((item) => item.id) ;
        const dynamicId =
            roleDynamicId?.length > 0
                ? Math.max(...roleDynamicId) + 1
                : 0;

                setRoleList([

            ...roleList,
                    {
            id: dynamicId,
            roleName: '',
            roleId: ''
        }])
    }


    const handleSubmitRole=async(e)=>{
        try {
            e.preventDefault()
            let payload = {
                roleId: roleList[0].roleId,
                roleName: roleList[0].roleName,
            }
                await addRoles(payload).unwrap()
                getAllRoles()
                toast.success("Role Added Successfully")
                setRoleList(
                    [{
                        id: 0,
                        roleName: '',
                        roleId: ''
                    }]
                )
        } catch (error) {
            toast.error(error?.data.responseMessage || "Error")
        }

    }


    console.log(roleList,"RL")

    const handleRowIdChange=(e,index)=>{
        const selectRoleList = JSON.parse(JSON.stringify(roleList))
        selectRoleList[index].roleId = e.target.value
       setRoleList([...selectRoleList])
    }
    const handleRoleNameChange=(e,index)=>{
        const selectRoleList = JSON.parse(JSON.stringify(roleList))
        selectRoleList[index].roleName = e.target.value
       setRoleList([...selectRoleList])

    }

    const handleDeleteRole = (_e,id) => {
        console.log('WORKING')
        console.log(id,'ID')
        const remainingRoleList = roleList.filter((item) => {
          return item.id !== id;
        });
        console.log(roleList,'RL')
        setRoleList(remainingRoleList);
      };



    return (
        <>

                 <ToastContainer  theme="colored" autoClose={2000}/>
        <div className='ambulance-container'>
            <Title title={"Add Role Name"} />

            <div className='add-ambulance-form role-list'>

                <div className='form-content'>

                {roleList.map((item, index) => {
                    return (<React.Fragment key={index} >
                        <div class=" d-flex">
                        <div className='role-input'>
                            <label>Role ID</label><br />
                            <input type={"text"} id={'roleId_key' +index } value={roleList[index].roleId} onChange={(e)=>handleRowIdChange(e,index)} />
                        </div>
                        <div className='role-input'>
                            <label>Role Name</label><br />
                            <input type={"text"} id={'roleName_key' +index } value={roleList[index].roleName} onChange={(e)=>handleRoleNameChange(e,index)} />
                        </div>
                        {<div className='role-add' onClick={handleRoleAdd}>+</div>}
                        {index !==0 && <div className='role-delete' onClick={(e)=>handleDeleteRole(e,item.id)}>-</div>}
                        </div>

                    </React.Fragment>
                    )
                })}



                {/* <div className='divider'></div> */}
                <div className='m-2'>
                  <button className='update-role-btn' onClick={handleSubmitRole} type="button">Submit</button>
                </div>
                </div>



                {/* </div> */}
            </div>
        </div>
        </>

    )
}

export default AddRoleName