import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'   //users.js is necesary in node
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app=express(); //Here app is the server
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))   //these all are the middlewares
app.use(cors());  //to eliminate the errors during the communication b/w 2 servers

app.get('/',(req,res)=>{                           
    res.send("This is a stackoverflow clone API")        //if you enter localhost:5000 it will direct you to this page
})

app.use('/user',userRoutes)   //using userRoutes as middleware
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT=process.env.PORT || 5000        //server is running on this PORT

const DATABASE_URL=process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})      //we use mongoose only to connect to the mongodb database
   .then(()=>app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)}))     // if it is sucessfull this msg wil be display in the terminal
   .catch((err)=>console.log(err.message))