const questionsReducer =(state={data:null,successMessage: '',
errorMessage: '',},action)=>{
    switch(action.type){
        case 'POST_QUESTION':
            return {...state}
        case 'POST_ANSWER':
            return {...state}
        case 'FETCH_ALL_QUESTIONS':
            return {...state,data:action.payload}
        // case 'QUESTION_POST_SUCCESS':
        //     return { ...state, successMessage: action.message, errorMessage: '' };
        // case 'QUESTION_POST_ERROR':
        //     return { ...state, errorMessage: action.message, successMessage: '' };
        case 'QUESTION_POST_SUCCESS':
             return { ...state, successMessage: action.message, errorMessage: '' };
        case 'QUESTION_POST_ERROR':
             return { ...state, errorMessage: action.message, successMessage: '' };
        case 'QUESTION_CLEAR_MESSAGES':
             return { ...state, successMessage: '', errorMessage: '' };
        default:
            return state
    }
}
export default questionsReducer;