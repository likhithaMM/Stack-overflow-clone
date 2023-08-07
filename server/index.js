import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import verification from './routes/verification.js'
import searchStackOverflow from './routes/searchStackOverflow.js'
import paymentRoutes from './routes/payment.js'
import cron from 'node-cron'
import helmet from 'helmet'
import updatePlans from './utilities/updatePlans.js'
import plans from './routes/Plans.js'
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/users.js'   //users.js is necesary in node

//const dummyPosts = require('./server/MongoDB Collections/posts'); // Import the dummy data

const app=express(); //Here app is the server
dotenv.config();
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))   //these all are the middlewares
app.use(cors());  //to eliminate the errors during the communication b/w 2 servers
app.use(helmet({
    crossOriginResourcePolicy: false,
  }));


mongoose.set('strictQuery', true)
app.get('/',(req,res)=>{                           
    res.json("This is a stackoverflow clone API")        //if you enter localhost:5000 it will direct you to this page
    console.log('server fired up at port', PORT);
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
})

app.use('/users',userRoutes)   //using userRoutes as middleware
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
app.use('/verify',verification)
app.use('/search',searchStackOverflow)
app.use('/payment', paymentRoutes);
app.use('/plans', plans)
app.use('/posts',postRoutes)


// app.get('/dummyPosts', (req, res) => {
//     res.json(dummyPosts);
//   });

const PORT=process.env.PORT || 5000        //server is running on this PORT

cron.schedule('* 38 0 * * *', () => {
    console.log('Updating Plans', Date.now());
    updatePlans()
});

const DATABASE_URL=process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})      //we use mongoose only to connect to the mongodb database
   .then(()=>app.listen(PORT,()=>{console.log(`server is running on ${PORT}`)}))     // if it is sucessfull this msg wil be display in the terminal
   .catch((err)=>console.log(err.message))