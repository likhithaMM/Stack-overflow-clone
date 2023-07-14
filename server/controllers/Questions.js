import Questions from '../models/Questions.js'
import mongoose from 'mongoose'
export const AskQuestion= async (req,res) => {
      const postQuestionData=req.body;
      const postQuestion = new Questions(postQuestionData);
      try{
        await postQuestion.save();
        res.status(200).json("Posted a question sucessfully")
      }
      catch(error){
        console.log(error)
        res.status(409).json("Couldn't post a new question")
      }
}

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