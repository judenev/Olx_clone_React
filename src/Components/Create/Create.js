import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useContext,useState } from 'react';
import { AuthContext, FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const history=useHistory()
  const {firebase}=useContext(FirebaseContext)
  const{user}=useContext(AuthContext)
  const[name,setName]=useState('')
  const[category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)
  
  const date=new Date()
  const onHandleSubmit=(e)=>{
    
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      
      ref.getDownloadURL().then((url)=>{
       
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          created:date.toDateString()
        })
        history.push('/')
      })
    })
    e.preventDefault()
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
               value={name}
               onChange={(e)=>{
                setName(e.target.value)
               }}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            value={category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input required value={price} onChange={(e)=>{
            setPrice(e.target.value)
            }} className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input onChange={(e)=>{
             setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button id='tosubmit' onClick={onHandleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
