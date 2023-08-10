//here we will be writing the callback functions for signup and login
//authentication code
import  jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"
import expressJwt from 'express-jwt'
import users from '../models/auth.js'
import config from '../config/config.js'


export const signup=async(req,res)=>{
   const{name,email,password}=req.body;
   try{
      const existinguser=await users.findOne({email});  //checking user is already exisisted or not and here await is used bcz we are checking the DB
      if(existinguser){   //if it not null
        return res.status(404).json({message:"User already exists"})
      }
      //const hashedPassword= await bcrypt.hash(password,12)
      const newUser = new users({name:name,email:email,password:password })   // Set the initial value here
      await newUser.save()
      //const token = jwt.sign({email:newUser.email,id:newUser._id},process.env.JWT_SECRET,{expiresIn:"1h"});
      //res.status(200).json({result:newUser,token})
      const token = jwt.sign({ email: newUser.email, _id: newUser._id }, process.env.JWT_SECRET,{expiresIn:'24h'})
      res.status(200).send({user: {_id: newUser._id, name: newUser.name, email: newUser.email},result:newUser,token})
   }
   catch(error){
      res.status(500).json("Something went wrong")
   }
}

export const login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const existinguser=await users.findOne({email}); 
        if(!existinguser){   //if it not an exisisting user
            return res.status(404).json({message:"User doesnt exists"})
          }
        //const isPasswordCrt=await bcrypt.compare(password,existinguser.password)
        //if(!isPasswordCrt){
        //    return res.status(400).json({message:"Invalid credentials"})
       // }
       if (!existinguser.authenticate(password)) {
         return res.status(401).send({error:'Invalid Credentials'})
       }
        const token = jwt.sign({email:existinguser.email,id:existinguser._id},process.env.JWT_SECRET,{expiresIn:"24h"});
        res.cookie("t", token, {
         expire: new Date() + 9999
       })
      res.status(200).json({user:{_id:existinguser._id,name:existinguser.name,email:existinguser.email},result:existinguser,token})
    }
    catch(error){
        res.status(500).json("Something went wrong")
     }
}
const signout = (req, res) => {
   res.clearCookie("t")
   return res.status('200').json({
     message: "signed out"
   })
 }
 
const requireSignin = expressJwt({
   secret: config.jwtSecret,
   userProperty: 'auth',
   algorithms: ['RS256']
 })
 
const hasAuthorization = (req, res, next) => {
   const authorized = req.profile && req.auth && req.profile._id == req.auth._id
   if (!(authorized)) {
     return res.status('403').json({
       error: "User is not authorized"
     })
   }
   next()
 }

 export{
   signout,
   requireSignin,
   hasAuthorization
 }