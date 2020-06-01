import React,{useContext,useState,useEffect} from 'react'
import "../css/App.css"
import {TaskListContext} from "../context/TaskListContext"

const CreateTask = () => {
const {addTask,clearTask,editItem,editTask} = useContext(TaskListContext)



const [title,setTitle] =useState('');

const handleSubmit =(e)=>{
    e.preventDefault();
   if(!editItem){
        addTask(title)
    setTitle("")}
    else{
        editTask(title,editItem.id)
    }
}

const handleChange =(e)=>{
    setTitle(e.target.value)
 
}

useEffect(()=>{
    if(editItem!==null){
        setTitle(editItem.title)
    }else{
        setTitle("")
    }

},[editItem])

    return (
        <form  className="form" onSubmit={handleSubmit}>
            <input type="text" 
            className="task-input"
            value={title}
            placeholder="Add Task.."
            required 
            onChange={handleChange}/>
            <div className="buttons">
                <button type="submit" 
                className="btn add-clear-task-btn">
                   {editItem?'Edit Task':'Add Task'} 
                </button>

                <button  
                onClick= {clearTask}
                className="btn add-clear-task-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default CreateTask