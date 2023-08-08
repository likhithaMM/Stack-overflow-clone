import axios from 'axios'
const API =axios.create({baseURL:'http://localhost:5000/'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });

export const logIn =(authData)=>API.post('/users/login',authData)
export const signUp =(authData)=>API.post('/users/signup',authData)

export const postQuestion=(questionData)=>API.post('/questions/Ask',questionData) //this url should be same as specified in the backend
export const getAllQuestions= ()=>API.get('/questions/get');
export const deleteQuestion = (id)=> API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id,value,userId)=>API.patch(`/questions/vote/${id}`,{value,userId})

export const postAnswer =(id,noOfAnswers,answerBody,userAnswered,userId) => API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer=(id,answerId,noOfAnswers)=>API.patch(`answer/delete/${id}`,{answerId,noOfAnswers})

export const fetchAllUsers=()=>API.get('/users/getAllUsers');
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);
export const generateOTP = (email) => API.post('/verify/email',{email})
export const verifyOTP = (email,recvOTP) => API.post('/verify/otp',{email,recvOTP})
export const searchStackOverflow = (question) => API.post('/search/stackoverflow',{question})

export const getAllUsers = () => API.get('/users/getAllUsers');
export const followUser = (userId, followId) => API.put('/users/follow', { userId, followId });
export const unfollowUser = (userId, unfollowId) => API.put('/users/unfollow', { userId, unfollowId });
export const getUserById = (id) => API.get(`/users/${id}`);
export const deleteUser = (id) => API.delete(`/users/${id}`);

export const createPost = (userId, token) => API.post(`/posts/new/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } });

export const create = (postData) => API.post('/posts/new', postData);
export const findPeople = (userId) => API.get(`/posts/by/${userId}`);
export const listNewsFeed = (userId) => API.get(`/posts/feed/${userId}`);
export const remove = (postId) => API.delete(`/posts/${postId}`);
export const like = (userId, postId) => API.put('/posts/like', { userId, postId });
export const unlike = (userId, postId) => API.put('/posts/unlike', { userId, postId });
export const comment = (userId, postId, comment) => API.put('/posts/comment', { userId, postId, comment });
export const uncomment = (userId, postId, comment) => API.put('/posts/uncomment', { userId, postId, comment });

export const createUser = (user) => API.post('/users/create', user);
export const getUsersList = (signal) => API.get('/users/create', { signal });


// Define read user profile function
export const readUserProfile = (userId) => API.get(`/users/${userId}`);

// Define update user profile function
export const updateUserProfile = (userId, updateData) =>
  API.put(`/users/${userId}`, updateData);