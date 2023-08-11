import axios from 'axios'; // Import axios if not already importe
import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import "./AskQuestion.css"
import {askQuestion} from '../../actions/question'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AskQuestion = () => {
    const [questionTitle,setQuestionTitle]=useState('')
    const [questionBody,setQuestionBody]=useState('')
    const [questionTags,setQuestionTags]=useState('')

    const dispatch=useDispatch()
    var User = useSelector((state)=>(state.currentUserReducer))
    const navigate =useNavigate()

    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     console.log({questionTitle,questionBody,questionTags})
    //     dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ questionTitle, questionBody, questionTags });
      
        const response = await dispatch(askQuestion({
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User?.result._id,
        }, navigate));
      
        // if (response.status === 200) {
        //   alert("Question posted successfully!");
        // } else if (response.status === 409) {
        //   alert("Per day question limit reached");
        // }
        // else{
        //     alert("Per day question limit reached");
        // }

        if(response.status===409){
            alert("Per day limit exceeded!")
        }
      }
      

    const handleEnter=(e)=>{
        if(e.key ==='Enter'){
            setQuestionBody(questionBody+"\n")
        }
    }
  return (
        <div className='ask-question'>
            <div className="ask-ques-container">
            <h1>Ask a public Question </h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor='ask-ques-title'>
                        <h4>Title</h4>
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input type="text" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h4>Body</h4>
                        <p> Include all the information someone would need to answer your question</p>
                        <textarea id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10"  onKeyPress={handleEnter}></textarea>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h4>Tags</h4>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text" placeholder='e.g. (xml typescript wordpress)' id="ask-ques-title" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}/>
                    </label>
                </div>
                <input type="submit" className='review-btn' value="Review your question"/>
            </form>
        </div>
        </div>
  )
}

export default AskQuestion
