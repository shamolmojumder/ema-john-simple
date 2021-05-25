import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';

export const initializeLoginFramework = () =>{
  if (firebase.apps.length===0) {
      firebase.initializeApp(firebaseConfig); 
    }
}

export const handleGoogleSignIn= ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res=>{
      console.log(res);
      const {displayName,email,photoURL}=res.user;
      const signedinUser={
        isSignedIn:true,
        name:displayName,
        email:email,
        photo:photoURL
      };
    return signedinUser;
      //setLoggedInUser(signedinUser);
      //console.log(displayName,email,photoURL);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    });
  };

// facebook login beta
export const handleFbSignIn=()=>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    return user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    console.log(user);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
  }

  export const handleSignOut = ()=>{
   return firebase.auth().signOut()
    .then(res=>{
     const signOutUser={
      isSignedIn:false,
      name:'',
      email:'',
      photo:'',
      error:'',
      success:false
     };
     return signOutUser;
    })
    .catch(err=>{

    });
  }
//   export const createUserWithEmailAndPassword= ()=>{
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res=>{
//       const newUserInfo={...user};
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       setUser(newUserInfo);
//       updateUserName(user.name)
//       //console.log(res);
//     })
//     .then((userCredential) => {
//     // Signed in 
//     //var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const newUserInfo={...user};
//     newUserInfo.error=error.message;
//     newUserInfo.success=false;
//     setUser(newUserInfo)
//     // ..
//     //console.log(errorCode,errorMessage);
//   });
// }

// export const signInWithEmailAndPassword=()=>{
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res=>{
//       const newUserInfo={...user};
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       setUser(newUserInfo);
//       setLoggedInUser(newUserInfo);
//       history.replace(from);
//       console.log('sign in',res.user);
//     })

//   .then((userCredential) => {
//     // Signed in
//     //var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const newUserInfo={...user};
//     newUserInfo.error=error.message;
//     newUserInfo.success=false;
//     setUser(newUserInfo)
//   });
// }

// const updateUserName=name=>{
//     const user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName:name
//     }).then(function() {
//      console.log("user name updated");
//     }).catch(function(error) {
//      console.log(error);
//     });
//   }
