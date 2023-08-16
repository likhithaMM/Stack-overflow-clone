// frontend/reducers/userReducer.js

const initialState = {
    planOpted: null,
    // other user-related properties
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_PLAN':
        return {
          ...state,
          planOpted: action.payload,
        };
      // other cases
      default:
        return state;
    }
  };
  
  export default userReducer;
  