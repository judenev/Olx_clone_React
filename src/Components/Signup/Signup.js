import React from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';


export default function Signup() {
  const history =useHistory()
  const {firebase}=useContext(FirebaseContext)
  const[username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
const loginHandle=(e)=>{
  e.preventDefault()
  history.push('/login')
}
const handleSubmit=(e)=>{
  e.preventDefault()
console.log(firebase);
  firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    console.log(result);
    result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
      }).then(()=>{
          history.push("/login")
      }).catch((err)=>{
  console.log(err);
      })
    })
  })
  console.log(username,email,phone,password)

}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a onClick={loginHandle}>Login</a>
      </div>
    </div>
  );
}
