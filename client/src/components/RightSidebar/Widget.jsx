import React from 'react'
import pen from "../../assets/pen.svg";
import icon from "../../assets/icon.ico"
import comment from "../../assets/comment.svg"
import "./RightSidebar.css"
const Widget = () => {
  return (
    <div className='widget'>
       <h4>The Overflow Blog</h4>
       <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <img src={pen} alt="pen" width='18'/>
              <p>Keep 'em separated: Get better maintainability in web projects using the...'</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={pen} alt="pen" width='18'/>
              <p>Building zero tier systems on bare metal (Ep. 572)</p>
           </div>
       </div>

       <h4>Featured on Meta</h4>
       <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <img src={comment} alt="comment" width='18'/>
              <p>Keep 'em separated: Get better maintainability in web projects using the...'</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={comment} alt="comment" width='18'/>
              <p>Building zero tier systems on bare metal (Ep. 572)</p>
           </div>
           <div className='right-sidebar-div-2'>
              <img src={icon} alt="icon" width='18'/>
              <p>Building zero tier systems on bare metal (Ep. 572)</p>
           </div>
       </div>

       <h4>Hot Meta Posts</h4>
       <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
              <p>38</p>
              <p>Keep 'em separated: Get better maintainability in web projects using the...'</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p>20</p>
              <p>Building zero tier systems on bare metal (Ep. 572)</p>
           </div>
           <div className='right-sidebar-div-2'>
              <p>14</p>
              <p>Building zero tier systems on bare metal (Ep. 572)</p>
           </div>
       </div>

    </div>
  )
}

export default Widget
