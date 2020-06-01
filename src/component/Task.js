import React,{useContext,useState} from 'react'
import "../css/App.css"
import {TaskListContext} from "../context/TaskListContext"

const Task=({task})=>{
 
    const {removeTask,findItem} = useContext(TaskListContext)

   return( <li className ="list-item">
        <span>{task.title}</span>
        <div>
            <button className="btn-delete task-btn"
                 onClick={()=>removeTask(task.id)}>
                 <i class="fas fa-trash-alt"></i>
            </button>
            <button className="btn-edit task-btn"
                onClick={()=>findItem(task.id)}>
            <i className="fas fa-pen"></i>
            </button>
            
        </div>
    </li>
    )
}

export default Task