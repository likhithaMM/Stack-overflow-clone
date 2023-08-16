// import User from '../models/auth.js'
// import express from 'express'

// const router = express.Router()

// router.post('/', async (req, res) => {
//     console.log('i');
//     try {
//         const plan = await User.findById(req.body.id).planOpted
//         console.log(plan);
//         return res.status(200).json({plan: plan})
//     } catch (error) {
//         console.log('serv utils getCurrentPlan ', error);
//         return res.status(500).json({error})
//     }
// })

// export default router

import User from '../models/auth.js';
import express from 'express';

const router = express.Router();

router.post('/getCurrentPlan/:id', async (req, res) => {
  try {
    const userIdd = req.body.userId; // Get the user ID from the request body
    console.log(userIdd)
    const user = await User.findById(userIdd);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const plan = user.planOpted;
    return res.status(200).json({ plan: plan });
  } catch (error) {
    console.log('Error fetching current plan:', error);
    return res.status(500).json({ error });
  }
});

export default router;
