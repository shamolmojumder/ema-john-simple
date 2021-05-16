import React, { useContext, useState } from 'react';

import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import {initilaizeLoginFramework,handleGoogleSignIn,handleSignOut} from './LoginManager'

function Login() {
  const [newUser,setNewUser]=useState(false)
  const [user,setUser]=useState({
    isSignedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''
  });
  initilaizeLoginFramework();
  const googleSignIn = ()=>{
    handleGoogleSignin()
    .then(res=>{
    setUser(res);
    setLoggedInUser(res);
  })
  }
  //console.log(user);
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const history=useHistory();
  const location = useLocation(); 
  let { from } = location.state || { from: { pathname: "/" } };
  
  const {name,email,photo}=user;
  


const signOut =()=>{
  handleSignOut()
  .then(res=>{
    setUser(res);
    setLoggedInUser(res)
  })
}
const handleBlur = (e)=>{
  //console.log(e.target.name,e.target.value);
  let isFieldValid= true;
  //debugger;
  if (e.target.name === 'email') {
    isFieldValid =  /\S+@\S+\.\S+/.test(e.target.value);
  }
  if (e.target.name === 'password') {
    const isPasswordValid = e.target.value.length>6;
    const passwordHasNumber=/\d{1}/.test(e.target.value);
    isFieldValid = isPasswordValid && passwordHasNumber;
  }
  if (isFieldValid) {
    const newUserInfo={...user};
    newUserInfo[e.target.name]=e.target.value;
    setUser(newUserInfo);
  }
}

const handleSubmit =(e)=>{
  console.log(user.email,user.password);
  if (newUser && user.email && user.password) {
    //console.log("submitting");
  };
  .catch((error) => {
    const newUserInfo={...user};
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo)
    // ..
    //console.log(errorCode,errorMessage);
  });
  }
  if (!newUser && user.email && user.password) {
    
  }
  e.preventDefault();
}

  return (
    <div style={{textAlign:"center"}}>
      <h1>Hello from App.js </h1>
     {
        user.isSignedIn ? <button onClick={signOut}>Sign out</button> : <button onClick={googleSignIn}>Sign in</button>
     }
     <br />
     <button disabled>Login using Facebook</button>
      {
        user.isSignedIn && 
        <div>
            <p> {name} </p>
            <p>{email} </p>
            <img src={photo} alt="missing"/>
        </div>
      }
        <h1>Our own Authentication</h1>
        <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
        <label htmlFor="newUser">New User Sign Up</label>
        <form action="" onSubmit={handleSubmit}>
        {newUser&& <input type="text" name="name" id="" onBlur={handleBlur} placeholder="name"/>} 
         <br/>
          <input type="text" name="email" id="" onBlur={handleBlur} placeholder="your email" required/>
          <br/>
          <input type="password" name="password" id="" onBlur={handleBlur} placeholder={newUser? "used number and alpabet":"use valid password"} required/>
          <br/>
          <input type="submit" value={newUser ? "sign up":"sign in"}/>
        </form>
        <p style={{color:'red'}}> {user.error} </p>
        {
          user.success && <p style={{color:'green'}}> User {newUser ?"create" : "logged In"} successfully </p>
        }
    </div>
  );
}

export default Login;