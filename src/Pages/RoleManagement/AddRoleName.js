import React, { useState } from 'react'
// import Role from '../../components/Role/Role'
import Title from '../../components/Ambulance/Header'
import "./roleStyle.css"


const AddRoleName = () => {
    const [roleId, setRoleId] = useState('')
    const [roleName, setRoleName] = useState('')



    const [roleList, setRoleList] = useState([{
        id: Math.max(),
        roleName: '',
        roleId: ''
    }])

    const handleRoleAdd = () => {
        console.log('wokring')

        const roleDynamicId = roleList.map((item) => item.id);
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
    console.log(roleList,'AFTER')



    return (
        <div className='ambulance-container'>
            <Title title={"Add Role Name"} />

            <div className='add-ambulance-form role-list'>
                {/* <div class="role-container p5"> */}


                {roleList.map((item, index) => {
                    return (<React.Fragment key={index} >
                        <div class=" d-flex">
                        <div className='role-input'>
                            <label>Role ID</label><br />
                            <input type={"number"} id={'roleId_key' +index } value={roleList[index].roleId} onChange={(e)=>handleRowIdChange(e,index)} />
                        </div>
                        <div className='role-input'>
                            <label>Role Name</label><br />
                            <input type={"text"} id={'roleName_key' +index } value={roleList[index].roleName} onChange={(e)=>handleRoleNameChange(e,index)} />
                        </div>
                        {<div className='role-add' onClick={handleRoleAdd}>+</div>}
                        {roleList?.length > 1 && <div className='role-delete'>-</div>}
                        </div>

                    </React.Fragment>
                    )
                })}





                {/* </div> */}
            </div>
        </div>
    )
}

export default AddRoleName