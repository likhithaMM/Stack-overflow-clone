import React from 'react'
import { Link } from 'react-router-dom';
import './sty.css';
const Success = () => {
  localStorage.removeItem('Profile')
  return (
    
    <div className='sucess'>
      <center><b>Success!!! </b><Link to="/Auth">Please LogIn Again.</Link></center>

    </div>
    
    //<a href='/Auth'>LogIn Again Please</a>
  )

}

export default Success