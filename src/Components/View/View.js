import React from 'react';

import './View.css';
import { useContext, useEffect, useState } from 'react';
import { postContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/firebaseContext';
function View() {
  const [userDetails,setUserDetails]=useState('')
  const{postDetails}=useContext(postContext)
  const{firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    const {userId}=postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((response)=>{
response.forEach(doc=>{
   setUserDetails(doc.data())
})
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.category}</span>
          <p>{postDetails.name}</p>
          <span>{postDetails.created}</span>
        </div>
     { userDetails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
