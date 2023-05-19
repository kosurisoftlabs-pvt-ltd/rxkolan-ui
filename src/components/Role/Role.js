import React,{useState,useEffect} from 'react'
import Button from '../button/Button'
import './role.css'
import { useSelector } from 'react-redux';
import { useGetTaskToRoleMutation, useMapTaskToRoleMutation } from '../../services/apis/RoleService';
import { ToastContainer, toast } from 'react-toastify';


const Role = ({type}) => {
	let { roleList, taskList,roleTaskList ,roleTaskListIds} = useSelector((state) => state.role);

	const [updateTaskList,setUpdateTaskList] = useState(taskList)
	const [mapTaskToRole] = useMapTaskToRoleMutation()
	const [role,setRole] = useState('')
	const [selectedRoleToUpdate,setSelectedRoleToUpdate] = useState('')
	const [ checked,setChecked] = useState(false)

	const [updatedTaskIds,setUpdatedTaskIds] = useState([])




	const [tasksMapped,setTasksMapped] = useState([])

	const [getTaskToRole] = useGetTaskToRoleMutation()


	const handleCheckedTask =(e)=>{
		if(e.target.checked){

			setTasksMapped([...tasksMapped,Number(e.target.value)])
		}
		if(!e.target.checked){
			let filtered = tasksMapped.filter((item)=>item !==Number(e.target.value))
			setTasksMapped(filtered)
		}

	}
	const handleCheckedUpdateTask =(e)=>{
		setChecked(!checked)

		if(e.target.checked){

			setUpdatedTaskIds([...updatedTaskIds,Number(e.target.value)])
		}
		if(!e.target.checked){
			let filtered = updatedTaskIds.filter((item)=>item !==Number(e.target.value))
			setUpdatedTaskIds(filtered)
		}

	}
	console.log(roleTaskListIds,'RTLI')

	const handleSelectRole = (e)=>{
		console.log(e.target.value,'working')
		setRole(e.target.value)

	}
	const handleSelectToUpdateRole = async(e)=>{
		try {
			setSelectedRoleToUpdate(e.target.value)
			let payload={
				roleId:e.target.value
			}
			await getTaskToRole(payload).unwrap()
            toast.success("Task List for role successfully")
		} catch (error) {
            toast.error( error.data.responseMessage||'error')

		}

	}
	useEffect(() => {
		setUpdatedTaskIds(roleTaskListIds)
	}, [roleTaskListIds]);

	const MapTaskToRoleSubmit = async()=>{
		try {
			if(type==='add' ? role === "" : selectedRoleToUpdate==="" )return  toast.error("Please select role")
			let payload = {
				roleId: type==='add'? role:selectedRoleToUpdate,
				taskIds: type==='add'?tasksMapped:updatedTaskIds,
				updatedBy: "abc"
			}
            await mapTaskToRole(payload).unwrap()
            toast.success("Task Mapped to Role successfully")
			setTimeout(()=>{

				window.location.reload();
			},1000)
        } catch (error) {
            toast.error( error.data.responseMessage||'error')

        }


	}

	return (
		<div>
		    <ToastContainer  theme="colored" autoClose={2000}/>
	{	type==='add' ?
	<>

		<form action="" method="POST">
				<div class="form-group-select">
					<label for="">Select Role*</label>
					<select name="" id="" class="form-control" onChange={(e)=>handleSelectRole(e)} value={role}>
						<option value="">Select...</option>
						{roleList?.length > 0 && roleList.map((item, index) => {
							return <option value={item?.roleId} key={index}>{item?.roleName} </option>

						})}
					</select>
				</div>
				<div class="role-container p5">

					{taskList?.length > 0 && taskList.map((item, index) => {
						return <div class="form-group d-flex" key={index}>
							<input type="checkbox" id={index} class="roleCheckBox" placeholder="Ex. 1" required value={item?.taskId} onChange={(e)=>handleCheckedTask(e,index)} />
							<label for={index} class="roleLabel">{item?.taskName} {'(' + item?.taskId + ')'}</label>
						</div>
					})}
				</div>
			</form>
			<div className='role-btn-container'>
				<button className='update-role-btn' onClick={MapTaskToRoleSubmit} type="button">Submit</button>
			</div>
	</>	:	<>

<form action="" method="POST">
		<div class="form-group-select">
			<label for="">Select Role*</label>
			<select name="" id="" class="form-control" onChange={(e)=>handleSelectToUpdateRole(e)} value={selectedRoleToUpdate}>
				<option value="">Select...</option>
				{roleList?.length > 0 && roleList.map((item, index) => {
					return <option value={item?.roleId} key={index}>{item?.roleName} </option>

				})}
			</select>
		</div>
		<div class="role-container p5">

			{taskList?.length > 0 && taskList.map((item, index) => {
				return <div class="form-group d-flex" key={index}>
					<input type="checkbox" id={item.taskId} class="roleCheckBox"  value={item.taskId} onChange={(e)=>handleCheckedUpdateTask(e,index)} checked={updatedTaskIds.includes(item.taskId)}/>
					{/* // checked={ roleTaskListIds.includes(item.taskId)} /> */}
					<label for={item.taskId} class="roleLabel">{item?.taskName} {'(' + item?.taskId + ')'}</label>
				</div>
			})}
		</div>
	</form>
	<div className='role-btn-container'>
		<button className='update-role-btn' onClick={MapTaskToRoleSubmit} type="button">Submit</button>
	</div>
</>
			}
		</div>
	)
}

export default Role
