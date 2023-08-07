import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Plans from './pages/Plans/Plans';
import Success from './pages/Plans/Success';
import Failure from './pages/Plans/Failure';
import StripeForm from './pages/Payment/StripeForm';

import SMHome from './pages/SocialMedia/Home/SMHome'
import SMUsers from './pages/SocialMedia/User/SMUsers'
import EditProfile from './pages/SocialMedia/User/EditProfile';
import Profile from './pages/SocialMedia/User/Profile';


const AllRoutes = () => {
  return (
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Auth' element={<Auth/>}/>
    <Route exact path='/Questions' element={<Questions/>}/>
    <Route exact path='/AskQuestion' element={<AskQuestion/>}/>
    <Route exact path='/Questions/:id' element={<DisplayQuestion/>}/>
    <Route exact path='/Tags' element={<Tags/>}/>
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Users/:id' element={<UserProfile/>}/>
    <Route exact path='/Plans' element={< Plans />}/>
    <Route exact path='/Payment' element={< StripeForm />}/>
    <Route exact path='/Success' element={< Success />}/>
    <Route exact path='/Failure' element={< Failure />} />
      
    <Route path='/SocialMedia' element={<SMHome />} />
    <Route path='/SocialMedia/User' element={<SMUsers/>}/>
    <Route path='/SocialMedia/User/edit/:userId' element={<EditProfile/>}/>
    <Route path='/SocialMedia/User/:userId' element={<Profile/>}/>
   </Routes>
  )
}

export default AllRoutes
