import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';

const initializeLoginFramework = ()=>{
    firebase.initializeApp(firebaseConfig);
}

const LoginManager = () => {
    return (
        <div>
            
        </div>
    );
};

export default LoginManager;