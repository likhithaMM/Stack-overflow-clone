import React from 'react'
import {NavLink} from "react-router-dom"
import Globe from "../../assets/Globe.svg"
import "./LeftSidebar.css"
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to="/" className="side-nav-links" activeClassName="active">
                <p>Home</p>
            </NavLink>
            <div className='side-nav-div'>
                <div><p>PUBLIC</p></div>
                <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
                    <img src={Globe} alt="Globe"/>
                    <p>Questions</p>
                </NavLink>
                <NavLink to="/Tags" className="side-nav-links" activeClassName="active">
                    <p>Tags</p>
                </NavLink>
                <NavLink to="/Users" className="side-nav-links" activeClassName="active">
                    <p>Users</p>
                </NavLink>
                <NavLink to='/SocialMedia' className='side-nav-links' activeClassName='active' style={{paddingLeft:'5px'}}>
                <p>Social Media</p>
                </NavLink>         
                <NavLink to='/Plans' className='side-nav-links' activeClassName='active' style={{paddingLeft:'5px'}}>
                <p>Plans</p>
                </NavLink>     
            </div>
        </nav>
    </div>
  )
}
export default LeftSidebar