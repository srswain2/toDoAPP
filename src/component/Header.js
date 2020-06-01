import React from 'react'
import "../css/App.css"
 const Header = () => {
    const  theme=()=> {
        
        var element = document.getElementById("container");
        element.classList.toggle("container-dark-mode");

        //app-wrapper
        var element1 = document.getElementById("app-wrapper");
        element1.classList.toggle("app-wrapper-dark-mode");
        

     }
    return (
        <div className="header">
            <h1>Task Manager</h1>
            <div style={{float:"right"}}>
                 <label className="switch"> 
                        <input type="checkbox" onChange={theme}/>
                            <span class="slider round"></span>
                 </label>
            </div>
        </div>
    )
}

export default Header
