import User from '../models/auth.js'
import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        // const trail= req.body.id;
        // console.log("TRAIL",trail)
        const noOfQuestions = await User.findById(req.body.userId).noOfQuestions
        console.log("QQQQQQQ",noOfQuestions);
        return res.status(200).json({noOfQuestions: noOfQuestions})
    } catch (error) {
        console.log('serv utils getCurrentPlan ', error);
        return res.status(500).json({error})
    }
})

export default router