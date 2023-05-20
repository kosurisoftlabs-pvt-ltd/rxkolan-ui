import React, { useState } from 'react'
import Title from '../../components/Ambulance/Header'
import { useAddTaskMutation, useLazyGetAllTasksQuery } from '../../services/apis/RoleService'
import { ToastContainer, toast } from 'react-toastify';



const AddTask = () => {

const [addTask] = useAddTaskMutation()
const [getAllTasks] = useLazyGetAllTasksQuery()


    const [taskList, setTaskList] = useState([{
        id: 0,
        taskName: '',
        taskId: ''
    }])

    const handleTaskAdd = () => {
        console.log('wokring')

        const taskDynamicId = taskList.map((item) => item.id) ;
        const dynamicId =
            taskDynamicId?.length > 0
                ? Math.max(...taskDynamicId) + 1
                : 0;

                setTaskList([

            ...taskList,
                    {
            id: dynamicId,
            taskName: '',
            taskId: ''
        }])
    }


    const handleSubmitTask=async(e)=>{
        try {
            e.preventDefault()
            let payload = {
                taskId: taskList[0].taskId,
                taskName: taskList[0].taskName,
            }
            console.log(payload,'PL')
                 await addTask(payload).unwrap()
                  getAllTasks()
                toast.success("Task Added Successfully")
                setTaskList(
                    [{
                        id: 0,
                        taskName: '',
                        taskId: ''
                    }]
                )
        } catch (error) {
            toast.error(error?.data.responseMessage || "Error")
        }

    }


    console.log(taskList,"RL")

    const handleRowIdChange=(e,index)=>{
        const selectTaskList = JSON.parse(JSON.stringify(taskList))
        selectTaskList[index].taskId = e.target.value
       setTaskList([...selectTaskList])
    }
    const handleTaskNameChange=(e,index)=>{
        const selectTaskList = JSON.parse(JSON.stringify(taskList))
        selectTaskList[index].taskName = e.target.value
       setTaskList([...selectTaskList])

    }

    const handleDeleteTask = (_e,id) => {
        console.log('WORKING')
        console.log(id,'ID')
        const remainingTaskList = taskList.filter((item) => {
          return item.id !== id;
        });
        console.log(taskList,'RL')
        setTaskList(remainingTaskList);
      };



    return (
        <>

                 <ToastContainer  theme="colored" autoClose={2000}/>
        <div className='ambulance-container'>
            <Title title={"Add Task"} />

            <div className='add-ambulance-form role-list'>

                <div className='form-content'>

                {taskList.map((item, index) => {
                    return (<React.Fragment key={index} >
                        <div class=" d-flex">
                        <div className='role-input'>
                            <label>Task ID</label><br />
                            <input type={"number"} id={'taskId_key' +index } value={taskList[index].taskId} onChange={(e)=>handleRowIdChange(e,index)} />
                        </div>
                        <div className='role-input'>
                            <label>Task Name</label><br />
                            <input type={"text"} id={'taskName_key' +index } value={taskList[index].taskName} onChange={(e)=>handleTaskNameChange(e,index)} />
                        </div>
                        {<div className='role-add' onClick={handleTaskAdd}>+</div>}
                        {index !==0 && <div className='role-delete' onClick={(e)=>handleDeleteTask(e,item.id)}>-</div>}
                        </div>

                    </React.Fragment>
                    )
                })}



                {/* <div className='divider'></div> */}
                <div className='m-2'>
                  <button className='update-role-btn' onClick={handleSubmitTask} type="button">Submit</button>
                </div>
                </div>



                {/* </div> */}
            </div>
        </div>
        </>

    )
}

export default AddTask