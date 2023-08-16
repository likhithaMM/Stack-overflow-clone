const currentUserReducer=(state=null,action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            return action.payload
        default:
            return state
    }
}
export default currentUserReducer;

// const initialUserData = JSON.parse(localStorage.getItem('currentUser')) || null;

// const currentUserReducer = (state = initialUserData, action) => {
//   switch (action.type) {
//     case 'FETCH_CURRENT_USER':
//       // Update Local Storage whenever user data changes
//       localStorage.setItem('currentUser', JSON.stringify(action.payload));
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default currentUserReducer;
