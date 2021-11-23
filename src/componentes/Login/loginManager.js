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
        photo:photoURL,
        success:true
      };
      setUserToken();
      return signedinUser;
      //setLoggedInUser(signedinUser);
      //console.log(displayName,email,photoURL);
    })
    .catch(err=>{
      console.log(err);
      console.log(err.message);
    });
  };

const setUserToken=()=>{
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  .then(function(idToken) {
    sessionStorage.setItem('token',idToken);
  }).catch(function(error) {
    // Handle error
  });
  
}


// facebook login beta
export const handleFbSignIn=()=>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;
    user.success=true;
    return user;
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //var accessToken = credential.accessToken;
    //console.log(user);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;

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

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch( error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
 }

 export const signInWithEmailAndPassword = (email, password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(function(error) {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
 }

 const updateUserName = name =>{
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  } 
//   export const createUserWithEmailAndPassword= (name,email,password)=>{
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then(res=>{
//       const newUserInfo=res.user;
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       updateUserName(name)
//       return newUserInfo;
//       //console.log(res);
//     })
//     .then((userCredential) => {
//     // Signed in 
//     //var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const newUserInfo={};
//     newUserInfo.error=error.message;
//     newUserInfo.success=false;
//     return newUserInfo;
//     // ..
//     //console.log(errorCode,errorMessage);
//   });
// }

// export const signInWithEmailAndPassword=(email,password)=>{
//   return firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(res=>{
//       const newUserInfo=res.user;
//       newUserInfo.error='';
//       newUserInfo.success=true;
//       return newUserInfo;
//      // console.log('sign in',res.user);
//     })

//   .then((userCredential) => {
//     // Signed in
//     //var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const newUserInfo={};
//     newUserInfo.error=error.message;
//     newUserInfo.success=false;
//     return newUserInfo;
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
