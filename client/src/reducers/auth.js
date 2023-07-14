const authReducer=(state={data:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem("Profile",JSON.stringify({...action?.data}))    //we can store the data in 3 ways i.e; cookies,session and
                                                                                 // local Storage and since we get data in JSON to covert it we used stringify
            return {...state,data:action?.data};
        case 'LOGOUT':
            localStorage.clear();
            return{...state,data:null}
        default:
            return state;
    }
}
export default authReducer;