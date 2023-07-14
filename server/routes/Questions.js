import express  from "express";
import {AskQuestion,getAllQuestions,deleteQuestion,voteQuestion} from '../controllers/Questions.js'
import auth from "../middlewares/auth.js";

const router =express.Router()
router.post('/Ask',auth,AskQuestion)  //auth is used here for security purpose
router.get('/get',getAllQuestions) //to get the questions on backend
router.delete('/delete/:id',auth,deleteQuestion) //to delete the question
router.patch('/vote/:id',auth,voteQuestion)
export default router 