// frontend/actions/userActions.js

import { getCurrentPlan } from '../api/index.js' // Import the API function

export const getUserCurrentPlan = (userId) => async (dispatch) => {
  try {
    const response = await getCurrentPlan(userId);
    dispatch({
      type: 'SET_CURRENT_PLAN',
      payload: response.data.plan,
    });
  } catch (error) {
    // Handle error
    console.log(error)
  }
};
