import React from 'react';
import { useState ,useContext} from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';


import { render } from 'react-dom';
function Login() {
 
  const history=useHistory()
  const [email,setEmail] =useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const navigateSignup=(e)=>{
    e.preventDefault()
   history.push('/signup')

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history.push('/') 
  
    }).catch((err)=>{
     alert("Sorry Invalid user")
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a onClick={navigateSignup}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
