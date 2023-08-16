import React from 'react'
import './sty.css';
const Success = () => {
  localStorage.removeItem('Profile')
  return (
    
    <div className='sucess'>
      <center><b>Success!!! </b><a href='/Auth'>Log In Again..</a>for new plan</center>
    </div>
    
    //<a href='/Auth'>LogIn Again Please</a>
  )

}

export default Success