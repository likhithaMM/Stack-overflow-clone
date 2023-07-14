import * as api from '../api'  //importing all the things from api->index.js file
import { setCurrentUser } from './currentUser'
export const signup=(authData,navigate) =>async(dispatch)=>{  //for redux-thunk this asyc() is needed
    try{
       const {data}=await api.signUp(authData)
       dispatch({type:"AUTH",data})
       dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
       navigate('/')
    }
    catch(error){
        console.log(error)
    }
}
export const login=(authData,navigate) =>async(dispatch)=>{  //for redux-thunk this asyc() is needed
    try{
       const {data}=await api.logIn(authData)
       dispatch({type:"AUTH",data})
       dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
       navigate('/')
    }
    catch(error){
        console.log(error)
    }
}