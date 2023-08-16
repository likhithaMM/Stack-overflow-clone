// // import axios from 'axios'; // Import axios if not already importe
// // import React,{useState} from 'react'
// // import {useDispatch, useSelector} from 'react-redux'
// // import {useNavigate} from 'react-router-dom'
// // import "./AskQuestion.css"
// // import {askQuestion} from '../../actions/question'
// // import { toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const AskQuestion = () => {
// //     const [questionTitle,setQuestionTitle]=useState('')
// //     const [questionBody,setQuestionBody]=useState('')
// //     const [questionTags,setQuestionTags]=useState('')

// //     const dispatch=useDispatch()
// //     var User = useSelector((state)=>(state.currentUserReducer))
// //     const navigate =useNavigate()

// //     // const handleSubmit=(e)=>{
// //     //     e.preventDefault()
// //     //     console.log({questionTitle,questionBody,questionTags})
// //     //     dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
// //     // }


// //     // const handleSubmit = async (e) => {
// //     //     e.preventDefault();
// //     //     console.log({ questionTitle, questionBody, questionTags });
      
// //     //     const response = await dispatch(askQuestion({
// //     //       questionTitle,
// //     //       questionBody,
// //     //       questionTags,
// //     //       userPosted: User.result.name,
// //     //       userId: User?.result._id,
// //     //     }, navigate));
      
// //     //     // if (response.status === 200) {
// //     //     //   alert("Question posted successfully!");
// //     //     // } else if (response.status === 409) {
// //     //     //   alert("Per day question limit reached");
// //     //     // }
// //     //     // else{
// //     //     //     alert("Per day question limit reached");
// //     //     // }

// //     //     // if(response.status===409){
// //     //     //     alert("Per day limit exceeded!")
// //     //     // }
// //     //   }
    
// //     // Inside your component
// // const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     try {
// //         const responsePromise = dispatch(askQuestion({
// //             questionTitle,
// //             questionBody,
// //             questionTags,
// //             userPosted: User.result.name,
// //             userId: User?.result._id,
// //           }, navigate));
          
// //           // Use then and catch to handle the promise
// //           responsePromise
// //             .then(response => {
// //               if (response && response.status === 409) {
// //                 const errorMessage = response.headers.get("X-Error-Message");
// //                 if (errorMessage) {
// //                   toast.error(errorMessage);
// //                 } else {
// //                   toast.error("Per day question limit reached");
// //                 }
// //               } else {
// //                 toast.success("Question posted successfully!");
// //               }
// //             })
// //             .catch(error => {
// //               console.error("Network Request Error:", error);
// //               toast.error("An error occurred while posting the question");
// //             });
          
// //     //   const response = await dispatch(askQuestion({
// //     //     questionTitle,
// //     //     questionBody,
// //     //     questionTags,
// //     //     userPosted: User.result.name,
// //     //     userId: User?.result._id,
// //     //   }, navigate));
// //     //   console.log("Response Object:", response); 
// //     //   console.log(response.headers); // Log headers to the console
// //     //   const { status, message } = response.data;

// //     // if (status === 200) {
// //     //   toast.success(message);
// //     // } else if (status === 409) {
// //     //   toast.error(message);
// //     // }
// //     //   // Add more cases for other possible response messages if needed
// //     // } catch (error) {
// //     //   toast.error("An error occurred while posting the question");
// //     // }
// //     // const errorMessage = response.headers.get("X-Error-Message");

// //     // if (errorMessage) {
// //     //   toast.error(errorMessage);
// //     // } else {
// //     //   toast.success("Question posted successfully!");
// //     // }
// //   } catch (error) {
// //     toast.error("An error occurred while posting the question");
// //   }
// //   }
  

// //     const handleEnter=(e)=>{
// //         if(e.key ==='Enter'){
// //             setQuestionBody(questionBody+"\n")
// //         }
// //     }
// //   return (
// //         <div className='ask-question'>
// //             <div className="ask-ques-container">
// //             <h1>Ask a public Question </h1>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="ask-form-container">
// //                     <label htmlFor='ask-ques-title'>
// //                         <h4>Title</h4>
// //                         <p>Be specific and imagine you're asking a question to another person</p>
// //                         <input type="text" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
// //                     </label>
// //                     <label htmlFor='ask-ques-body'>
// //                         <h4>Body</h4>
// //                         <p> Include all the information someone would need to answer your question</p>
// //                         <textarea id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10"  onKeyPress={handleEnter}></textarea>
// //                     </label>
// //                     <label htmlFor='ask-ques-tags'>
// //                         <h4>Tags</h4>
// //                         <p>Add up to 5 tags to describe what your question is about</p>
// //                         <input type="text" placeholder='e.g. (xml typescript wordpress)' id="ask-ques-title" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}/>
// //                     </label>
// //                 </div>
// //                 <input type="submit" className='review-btn' value="Review your question"/>
// //             </form>
// //         </div>
// //         </div>
// //   )
// // }

// // export default AskQuestion


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import "./AskQuestion.css";
// import { askQuestion } from '../../actions/question';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { postQuestion } from '../../api';

// const AskQuestion = () => {
//     const [questionTitle, setQuestionTitle] = useState('');
//     const [questionBody, setQuestionBody] = useState('');
//     const [questionTags, setQuestionTags] = useState('');
  
//     const dispatch = useDispatch();
//     var User = useSelector((state) => (state.currentUserReducer));
//     const navigate = useNavigate();
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {
//         const response = await postQuestion({
//           questionTitle,
//           questionBody,
//           questionTags,
//           userPosted: User.result.name,
//           userId: User?.result._id,
//         });
  
//         const errorMessage = response.headers['x-error-message'];
  
//         if (errorMessage) {
//           toast.error(errorMessage);
//         } else {
//           toast.success("Question posted successfully!");
//         }
//       } catch (error) {
//         console.error("An error occurred while posting the question:", error);
//         toast.error("An error occurred while posting the question");
//       }
//     };
  
//   const handleEnter = (e) => {
//     if (e.key === 'Enter') {
//       setQuestionBody(questionBody + "\n");
//     }
//   }

//   return (
//     <div className='ask-question'>
//       <div className="ask-ques-container">
//         <h1>Ask a public Question </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="ask-form-container">
//           <label htmlFor='ask-ques-title'>
//                         <h4>Title</h4>
//                        <p>Be specific and imagine you're asking a question to another person</p>
//                        <input type="text" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
//                      </label>
//                      <label htmlFor='ask-ques-body'>
//                          <h4>Body</h4>
//                          <p> Include all the information someone would need to answer your question</p>
//                          <textarea id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10"  onKeyPress={handleEnter}></textarea>
//                     </label>
//                     <label htmlFor='ask-ques-tags'>
//                          <h4>Tags</h4>
//                         <p>Add up to 5 tags to describe what your question is about</p>
//                        <input type="text" placeholder='e.g. (xml typescript wordpress)' id="ask-ques-title" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}/>
//                  </label>
//           </div>
//           <input type="submit" className='review-btn' value="Review your question" />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AskQuestion;



// import axios from 'axios'; // Import axios if not already importe
// import React,{useState} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import "./AskQuestion.css"
// import {askQuestion} from '../../actions/question'

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const AskQuestion = () => {
//     const [questionTitle,setQuestionTitle]=useState("");
//     const [questionBody,setQuestionBody]=useState("");
//     const [questionTags,setQuestionTags]=useState("");

//     const dispatch=useDispatch()
//     var User = useSelector((state)=>(state.currentUserReducer))
//     const navigate =useNavigate()

//     // const handleSubmit=(e)=>{
//     //     e.preventDefault()
//     //     console.log({questionTitle,questionBody,questionTags})
//     //     dispatch(askQuestion({questionTitle,questionBody,questionTags,userPosted:User.result.name,userId:User?.result._id},navigate))
//     // }
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log({ questionTitle, questionBody, questionTags });
      
//         const response = await dispatch(askQuestion({
//           questionTitle,
//           questionBody,
//           questionTags,
//           userPosted: User.result.name,
//           userId: User?.result._id,
//         }, navigate));
//         console.log(response)
      
//         // if (response.status === 200) {
//         //   alert("Question posted successfully!");
//         // } else if (response.status === 409) {
//         //   alert("Per day question limit reached");
//         // }
//         // else{
//         //     alert("Per day question limit reached");
//         // }

//         if (response) {
//             // The action returns data when successful, so you can display a success toast
//             toast.success("Question posted successfully!");
//           } else {
//             // The action returns null when there's an error, so you can display an error toast
//             toast.error("An error occurred while posting the question");
//           }
//         }
      

//     const handleEnter=(e)=>{
//         if(e.key ==='Enter'){
//             setQuestionBody(questionBody+"\n")
//         }
//     }
//   return (
//         <div className='ask-question'>
//             <div className="ask-ques-container">
//             <h1>Ask a public Question </h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="ask-form-container">
//                     <label htmlFor='ask-ques-title'>
//                         <h4>Title</h4>
//                         <p>Be specific and imagine you're asking a question to another person</p>
//                         <input type="text" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id="ask-ques-title" onChange={(e)=>{setQuestionTitle(e.target.value)}}/>
//                     </label>
//                     <label htmlFor='ask-ques-body'>
//                         <h4>Body</h4>
//                         <p> Include all the information someone would need to answer your question</p>
//                         <textarea id="ask-ques-body" onChange={(e)=>{setQuestionBody(e.target.value)}} cols="30" rows="10"  onKeyPress={handleEnter}></textarea>
//                     </label>
//                     <label htmlFor='ask-ques-tags'>
//                         <h4>Tags</h4>
//                         <p>Add up to 5 tags to describe what your question is about</p>
//                         <input type="text" placeholder='e.g. (xml typescript wordpress)' id="ask-ques-title" onChange={(e)=>{setQuestionTags(e.target.value.split(" "))}}/>
//                     </label>
//                 </div>
//                 <input type="submit" className='review-btn' value="Review your question"/>
//             </form>
//         </div>
//         </div>
//   )
// }

// export default AskQuestion


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
//   const [showAlert, setShowAlert] = useState(false); // To control whether to show the alert


  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
       dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
              userId: User?.result._id,
            },
            navigate
            
          )
          
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };
 
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  const successMessage = useSelector((state) => state.questionsReducer.successMessage);
  const errorMessage = useSelector((state) => state.questionsReducer.errorMessage);
   // Function to clear messages after a certain time
//    const clearMessages = () => {
//     setTimeout(() => {
//       dispatch({ type: "QUESTION_CLEAR_MESSAGES" });
//     }, 5000); // Adjust the time as needed
//   };

if (successMessage) {
    window.alert(successMessage);
  } else if (errorMessage) {
    window.alert(errorMessage);
  }

//   useEffect(() => {
//     if (successMessage || errorMessage) {
//       setShowAlert(true); // Show alert if there's a success or error message
//       setTimeout(() => {
//         setShowAlert(false); // Hide alert after a certain time (adjust as needed)
//       }, 5000); // 5 seconds
//     }
//   }, [successMessage, errorMessage]);
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Reivew your question"
            className="review-btn"
          />
        </form>
      </div>
      {/* Render success or error message
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>} */}
     {/* {showAlert && (
        <div className={`alert ${successMessage ? "alert-success" : "alert-danger"}`} role="alert">
          {successMessage || errorMessage}
        </div>
      )} */}
    </div>
  );
};

export default AskQuestion;