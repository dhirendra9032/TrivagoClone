import React from 'react'
import "./loading.css"

export const LoadingPage = () => {
    return (
        <div className="main-container">
           <div class="container">
               <div className="logoContainer">
                   <div className="trivago">
                       <img src="https://1000logos.net/wp-content/uploads/2020/09/Trivago-logo-500x170.png" alt=""/>
                   </div>
                   <div className="animation">
                   <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                   </div>
                   <div className="goibibo">
                   <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Goibibo_logo.png/120px-Goibibo_logo.png" alt=""/>
                   </div>
               </div>
               <div className="normaltext"><span>You found a great deal on </span><span className="black">trivago</span></div>
               <div className="normaltext"><span>Taking you to the </span><span className="black">Goibibo.com </span><span>website</span></div>
           </div>
        </div>
    )
}

 
