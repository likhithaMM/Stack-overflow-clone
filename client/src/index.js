import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'  //no need to give index.js bcz by default the root file in anyfolder is index.js


const store=createStore(Reducers,compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </Provider>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // You can remove this import
// import rootReducer from './reducers'; // Make sure to have slice reducers created with createSlice

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Create the Redux store
// const store = configureStore({
//   reducer: rootReducer, // Pass the combined rootReducer here
//   // Optionally, you can configure middleware, devTools, etc. directly here
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//       <ToastContainer />
//     </React.StrictMode>
//   </Provider>
// );
