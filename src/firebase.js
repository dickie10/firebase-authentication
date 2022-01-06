// Import the functions you need from the SDKs you need 
import { useState,useEffect } from "react";
import { initializeApp } from "firebase/app"; 
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZPiwAIcIkZdMiQxeiNoazH7DO9myh1TM",
  authDomain: "trailauth-40756.firebaseapp.com",
  projectId: "trailauth-40756",
  storageBucket: "trailauth-40756.appspot.com",
  messagingSenderId: "584995497479",
  appId: "1:584995497479:web:373f3fbe4b403911542ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth() 

export function logout(){ 
    return signOut(auth)
} 
export function login(email,password){ 
    signInWithEmailAndPassword(auth,email,password)
}
export function signup(email,password){ 
  createUserWithEmailAndPassword(auth, email,password) 
} 
export function useAuth(){ 
       const [currentUser,setCurrentUser] = useState(); 
       useEffect(() => {
         const unsub = onAuthStateChanged(auth,user => setCurrentUser(user));
       },[]) 
       return currentUser;
}