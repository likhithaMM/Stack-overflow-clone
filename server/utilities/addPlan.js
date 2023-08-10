import User from '../models/auth.js'

export const addPlan = async (id, plan) => {
    try {
        var noOfQuestions = 1
        console.log("Adding plan for user:", id, "Plan:", plan);
        if (plan === 'Silver') {
            noOfQuestions = 5
        } else if(plan === 'Gold') {
            noOfQuestions = Infinity
        }
        await User.findByIdAndUpdate(id, { planOpted: plan, planOptedOn: Date.now(),noOfQuestions: noOfQuestions }) //noOfQuestions: noOfQuestions i took off
        return 
        
    } catch (error) {
        console.log('serv utils addPlan addPlan', error);
        return 
    }
}