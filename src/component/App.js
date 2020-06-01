import React from 'react'
import TaskList from "./TaskList"
import "../css/App.css"
import "../css/Toggle.css"
import CreateTask from "./CreateTask"
import Header from "./Header"

import { TaskListProvider } from "../context/TaskListContext"
const App = () => {
    return (
        <TaskListProvider>
            <div id="container" className="container">
                <div id="app-wrapper" className="app-wrapper">
                      <Header />
                      <div id="main" className="main">
                        <CreateTask />
                        <TaskList />
                    </div>
                    </div>
                </div>
        </TaskListProvider>

    )
}

export default App;
