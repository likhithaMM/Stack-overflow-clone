// import Questions from '../models/Questions.js'
// import mongoose from 'mongoose'
// export const AskQuestion= async (req,res) => {
//       const postQuestionData=req.body;
//       const postQuestion = new Questions(postQuestionData);
//       try{
//         await postQuestion.save();
//         res.status(200).json("Posted a question sucessfully")
//       }
//       catch(error){
//         console.log(error)
//         res.status(409).json("Couldn't post a new question")
//       }
// }

// export const getAllQuestions = async(req,res)=>{
//   try{
//     const questionList=await Questions.find();
//     res.status(200).json(questionList);
//   }
//   catch(error){
//     res.status(404).json({message:error.message})
//   }
// }

// export const deleteQuestion=async (req,res)=>{ //delete question
//   const {id:_id}=req.params
//   if(!mongoose.Types.ObjectId.isValid(_id)){
//     return res.status(404).send("question unavailable")
//    }
//   try{
//      await Questions.findByIdAndRemove(_id)
//      res.status(200).json({message:"successfully deleted.."})
//   }
//   catch(error){
//       res.status(404).json({message:error.message})
//   }
// }

// export const voteQuestion=async(req,res)=>{
//   const {id: _id}=req.params;
//   const { value } = req.body;
//   const userId = req.userId;
//   if(!mongoose.Types.ObjectId.isValid(_id)){
//     return res.status(404).send("question unavailable")
//    }
//    try {
//     const question=await Questions.findById(_id)
//     const upIndex=question.upVotes.findIndex((id)=>id===String(userId))
//     const downIndex=question.downVotes.findIndex((id)=>id===String(userId))

//     if(value==='upVote'){
//       if(downIndex!==-1){
//         question.downVotes=question.downVotes.filter((id)=>id!==String(userId))
//       }
//       if(upIndex===-1){
//         question.upVotes.push(userId)
//       }
//       else{
//         question.upVotes=question.upVotes.filter((id)=>id!==String(userId))
//       }
//     }
//     else if(value==='downVote'){
//       if(upIndex!==-1){
//         question.upVotes=question.upVotes.filter((id)=>id!==String(userId))
//       }
//       if(downIndex===-1){
//         question.downVotes.push(userId)
//       }
//       else{
//         question.downVotes=question.downVotes.filter((id)=>id!==String(userId))
//       }
//     }
//     await Questions.findByIdAndUpdate(_id,question)
//     res.status(200).json({message:"voted sucessfully.."})
//    } catch (error) {
//     res.status(404).json({message:"id not found"})
//    }
// }

import Questions from '../models/Questions.js'
import mongoose from 'mongoose'
import User from '../models/auth.js'

export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body
  const { noOfQuestions, planOpted } = await User.findById(postQuestionData.userId)

  try {
    let questionLimit = 0;
    if (planOpted === 'Free Plan') {
      questionLimit = 1;
    } else if (planOpted === 'Silver Plan') {
      questionLimit = 5;
    }

    if (noOfQuestions < questionLimit) {
      await new Questions(postQuestionData).save()
      await User.findByIdAndUpdate(postQuestionData.userId, { $inc: { noOfQuestions: -1 } })
      res.status(200).send("Posted a question successfully")
    } else {
      res.status(409).send("Per day question limit reached")
    }
  } catch (error) {
    console.log('question.js controllers', error);
    res.status(409).send("Couldn't post a question")
  }
}

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find()
    res.status(200).send(questionList)
  } catch (error) {
    console.log('controllers questions.js getAllQuestions', error);
  }
}

export const deleteQuestion = async (req, res) => {
  const _id = req.params.id.substring(1, req.params.id.length)

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavailable')
  }

  try {
    await Questions.findByIdAndRemove(_id)
    return res.status(404).send('Question successfully removed')
  } catch (error) {
    res.status(404).send({ message: error.message })
  }
}

export const voteQuestion = async (req, res) => {
  const _id = req.params.id
  const { value, userId } = req.body

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavailable')
  }

  try {
    const question = await Questions.findById(_id)
    const upIndex = question.upVote.findIndex(id => id === String(userId))
    const downIndex = question.downVote.findIndex(id => id === String(userId))

    if (value === 'upVote') {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(id => id !== String(userId))
      }
      if (upIndex === -1) {
        question.upVote.push(userId)
      } else {
        question.upVote = question.upVote.filter(id => id !== String(userId))
      }
    } else if (value === 'downVote') {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter(id => id !== String(userId))
      }
      if (downIndex === -1) {
        question.downVote.push(userId)
      } else {
        question.downVote = question.downVote.filter(id => id !== String(userId))
      }
    }

    await Questions.findByIdAndUpdate(_id, question)
  } catch (error) {
    console.log('controllers questions.js voteQuestion', error)
  }
}