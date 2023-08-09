import User from '../models/auth.js'

export default async function updatePlans() {
    try {
        const msPerDay = 24 * 60 * 60 * 1000;
        const Users = await User.find({});
        
        for (const user of Users) {
            const daysLeft = (new Date().getTime() - new Date(user.planOptedOn).getTime()) / msPerDay;

            if (user.planOpted === 'Silver') {
                if (daysLeft >= 30) {
                    await User.findByIdAndUpdate(user._id, { planOpted: 'Free', noOfQuestions: 1 });
                } else if (user.noOfQuestions !== 5) {
                    await User.findByIdAndUpdate(user._id, { noOfQuestions: 5 });
                }
            } else if (user.planOpted === 'Free' && user.noOfQuestions !== 1) {
                await User.findByIdAndUpdate(user._id, { noOfQuestions: 1 });
            } else if (user.planOpted === 'Gold') {
                if (daysLeft >= 365) {
                    await User.findByIdAndUpdate(user._id, { planOpted: 'Free', noOfQuestions: 1 });
                }
            }
        }
    } catch (error) {
        console.log('serv utils updatePlans updatePlans', error);
        // Handle error here
    }
}