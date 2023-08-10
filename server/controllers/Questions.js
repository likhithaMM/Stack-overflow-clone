import Questions from '../models/Questions.js'
import mongoose from 'mongoose'
import User from '../models/auth.js';
import { contentSecurityPolicy } from 'helmet';

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

export const getAllQuestions = async(req,res)=>{
  try{
    const questionList=await Questions.find();
    res.status(200).json(questionList);
  }
  catch(error){
    res.status(404).json({message:error.message})
  }
}

export const deleteQuestion=async (req,res)=>{ //delete question
  const {id:_id}=req.params
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable")
   }
  try{
     await Questions.findByIdAndRemove(_id)
     res.status(200).json({message:"successfully deleted.."})
  }
  catch(error){
      res.status(404).json({message:error.message})
  }
}

export const voteQuestion=async(req,res)=>{
  const {id: _id}=req.params;
  const { value } = req.body;
  const userId = req.userId;
  if(!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(404).send("question unavailable")
   }
   try {
    const question=await Questions.findById(_id)
    const upIndex=question.upVotes.findIndex((id)=>id===String(userId))
    const downIndex=question.downVotes.findIndex((id)=>id===String(userId))

    if(value==='upVote'){
      if(downIndex!==-1){
        question.downVotes=question.downVotes.filter((id)=>id!==String(userId))
      }
      if(upIndex===-1){
        question.upVotes.push(userId)
      }
      else{
        question.upVotes=question.upVotes.filter((id)=>id!==String(userId))
      }
    }
    else if(value==='downVote'){
      if(upIndex!==-1){
        question.upVotes=question.upVotes.filter((id)=>id!==String(userId))
      }
      if(downIndex===-1){
        question.downVotes.push(userId)
      }
      else{
        question.downVotes=question.downVotes.filter((id)=>id!==String(userId))
      }
    }
    await Questions.findByIdAndUpdate(_id,question)
    res.status(200).json({message:"voted sucessfully.."})
   } catch (error) {
    res.status(404).json({message:"id not found"})
   }
}

// import Questions from '../models/Questions.js';
// import mongoose from 'mongoose';


export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  console.log(postQuestionData)

  try {
    const user = await User.findById(postQuestionData.userId);
    console.log("User:",user)
    const planOpted = user.planOpted;
    console.log("SP:",planOpted)
    const noOfQuestions = user.noOfQuestions;
    console.log(noOfQuestions)

    let questionLimit = 1;
    if (planOpted === 'Free') {
      questionLimit = 1;
    } else if (planOpted === 'Silver') {
      questionLimit = 5;
    }

    if (noOfQuestions <= questionLimit) {
      const postQuestion = new Questions(postQuestionData);
      await postQuestion.save();
      await User.findByIdAndUpdate(postQuestionData.userId, { $inc: { noOfQuestions: -1 } });
      res.status(200).json("Posted a question successfully");
    } else {
      res.status(409).json("Per day question limit reached");
    }
  } catch (error) {
    console.log('Error posting question:', error);
    res.status(409).json("Couldn't post a question");
  }
}


// export const getAllQuestions = async (req, res) => {
//   try {
//     const questionList = await Questions.find();
//     res.status(200).json(questionList);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }

// export const deleteQuestion = async (req, res) => {
//   const { id: _id } = req.params;
  
//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send('Question unavailable');
//   }

//   try {
//     await Questions.findByIdAndRemove(_id);
//     res.status(200).json({ message: "Question successfully removed" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// }

// export const voteQuestion = async (req, res) => {
//   const { id: _id } = req.params;
//   const { value, userId } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(_id)) {
//     return res.status(404).send('Question unavailable');
//   }

//   try {
//     const question = await Questions.findById(_id);
//     const upIndex = question.upVotes.findIndex(id => id === String(userId));
//     const downIndex = question.downVotes.findIndex(id => id === String(userId));

//     if (value === 'upVote') {
//       if (downIndex !== -1) {
//         question.downVotes = question.downVotes.filter(id => id !== String(userId));
//       }
//       if (upIndex === -1) {
//         question.upVotes.push(userId);
//       } else {
//         question.upVotes = question.upVotes.filter(id => id !== String(userId));
//       }
//     } else if (value === 'downVote') {
//       if (upIndex !== -1) {
//         question.upVotes = question.upVotes.filter(id => id !== String(userId));
//       }
//       if (downIndex === -1) {
//         question.downVotes.push(userId);
//       } else {
//         question.downVotes = question.downVotes.filter(id => id !== String(userId));
//       }
//     }

//     await Questions.findByIdAndUpdate(_id, question);
//     res.status(200).json({ message: "Voted successfully" });
//   } catch (error) {
//     res.status(404).json({ message: "Error voting" });
//   }
// }
