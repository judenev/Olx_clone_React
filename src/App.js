import React from 'react';
import { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import View from './Components/View/View';
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import { useContext } from 'react';
import Create from './Components/Create/Create'
function App() {
const{setUser}=useContext(AuthContext)
const {firebase}=useContext(FirebaseContext)
 useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
 
  setUser(user)
})
})
 
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
         <Login/>
        </Route>
        <Route path='/Create'>
         <Create/>
        </Route>
        <Route path='/view'>
        <View/>
        </Route>
     
      </Router>
      </Post>
     
     
    </div>
  );
}

export default App;
