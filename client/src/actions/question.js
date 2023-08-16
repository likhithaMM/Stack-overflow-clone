// import React from 'react'
import * as api from '../api/index.js'
// export const askQuestion = (questionData,navigate) => async(dispatch)=> {
//  try{
//    const {data}=await api.postQuestion(questionData)
//    console.log("Response from API:", response); // Log the response here
//    dispatch({type:"POST_QUESTION",payload:data})
//    dispatch(fetchAllQuestions())
//    navigate('/')
//    return data;
//  }
//  catch(error){
//     console.log(error)
//  }
// }


// export const askQuestion = (questionData, navigate) => async (dispatch) => {
//   try {
//     const response = await api.postQuestion(questionData);
//     console.log("Response from API:", response); // Log the response here

//     // Dispatch the response data to the reducer
//     dispatch({ type: "POST_QUESTION", payload: response.data });

//     // Fetch all questions and navigate if needed
//     dispatch(fetchAllQuestions());
//     navigate('/');
//     return response.data; // Return the response data
//   } catch (error) {
//     console.log("Error:", error);
//     return null; // Return null to indicate an error
//   }
// };

// export const askQuestion = (questionData, navigate) => async (dispatch) => {
//   try {
//     const { data } = await api.postQuestion(questionData);
//     dispatch({ type: "POST_QUESTION", payload: data });
//     dispatch(fetchAllQuestions());
//     navigate("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

export const askQuestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    
    // Assuming the API response includes a message field
    const message = data.message;

    dispatch({ type: "POST_QUESTION", payload: data }); // You might update the payload structure based on your needs
    dispatch(fetchAllQuestions());

    // Dispatch a success action to update Redux state with the success message
    dispatch({ type: "QUESTION_POST_SUCCESS", message:"Successfully Posted A Question" });

    navigate("/");
  } catch (error) {
    console.log(error);

    // Dispatch an error action to update Redux state with the error message
    dispatch({ type: "QUESTION_POST_ERROR", message: "Question limit has been reached" });
  }
};


export const fetchAllQuestions = ()=> async(dispatch)=>{
  try{
    const {data} = await api.getAllQuestions()
    dispatch({type:"FETCH_ALL_QUESTIONS",payload:data})
  }
  catch(error){
      console.log(error)
  }
}

export const deleteQuestion=(id,navigate)=>async(dispatch)=>{
  try{
    const {data}=api.deleteQuestion(id)
    dispatch(fetchAllQuestions())
    navigate('/')
  }
  catch(error){
     console.log(error)
  }
}
export const voteQuestion=(id,value,userId)=>async(dispatch)=>{
  try {
    const {data}=await api.voteQuestion(id,value,userId)
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}
export const postAnswer=(answerData) => async(dispatch) =>{
  try{
    const {id,noOfAnswers,answerBody,userAnswered,userId} =answerData
    const {data} =await api.postAnswer(id,noOfAnswers,answerBody,userAnswered,userId)
    dispatch({type:"POST_ANSWER",payload:data})
    dispatch(fetchAllQuestions())
  }
  catch(error){
    console.log(error)
  }
}

export const deleteAnswer= (id,answerId,noOfAnswers)=>async(dispatch)=>{
  try{
    const {data}=await api.deleteAnswer(id,answerId,noOfAnswers)
    dispatch(fetchAllQuestions())
  }
  catch(error){
     console.log(error)
  }
}
