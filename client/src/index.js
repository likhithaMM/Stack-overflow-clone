import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
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