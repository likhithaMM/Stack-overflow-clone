import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import verifyOTPReducer from './verifyOTP'
import userReducer from "./userReducer";
export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer,verifyOTPReducer,userReducer
})