import {BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import Chatbot from './components/Chatbot/Chatbot';
function App() {
  const dispatch=useDispatch()   

  useEffect(()=>{     //to update the code whenever there is a change
   dispatch(fetchAllQuestions())
   dispatch(fetchAllUsers())
  },[dispatch] )

  return (
    <div className="App">
      <Router>
         <Navbar/>
         <AllRoutes/>
      </Router>
      <Chatbot/>
    </div>
  );
}

export default App;
