// reducers/verifyOTP.js

// Define the initial state
const initialState = {
    otpStatus: "", // To store the status of OTP generation (success or failure)
    isVerified: false, // To store the verification status (true if verified, false if not)
  };
  
  // Define the reducer function
  const verifyOTPReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GENERATE_OTP_SUCCESS":
        return {
          ...state,
          otpStatus: action.payload, // Update the OTP generation status
        };
      case "VERIFY_OTP_SUCCESS":
        return {
          ...state,
          isVerified: action.payload, // Update the verification status
        };
      case "RESET_VERIFICATION":
        return {
          ...state,
          otpStatus: "",
          isVerified: false, // Reset the state to initial values
        };
      default:
        return state; // Return the current state for any other action type
    }
  };
  
  export default verifyOTPReducer;
  