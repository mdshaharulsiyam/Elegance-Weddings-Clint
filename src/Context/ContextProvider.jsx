import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from 'react'
import { app } from "../FireBase/Config";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const weddingContextProvider = createContext(null)
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const Googleprovider = new GoogleAuthProvider();
  const [currentUser, setcurrentUser] = useState(null)
  const [loading, setloading] = useState(true)
  const signupuser = (password, email, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${username}`,
        }).then(() => {
          setcurrentUser(user.displayName)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'user created successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch((error) => {
          console.log(error)
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(
          'opps!!',
          `${errorMessage}`,
          'error'
        )
      });
  }
  const signinWithGoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const user = result.user;
        setcurrentUser(user.displayName)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'logged in successfully',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(result)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire(
          'opps!!',
          `${errorMessage}`,
          'error'
        )
      });
  }
  const signwithpasswordandemail = (email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setcurrentUser(user.displayName)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'logged in successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire(
        'opps!!',
        `${errorMessage}`,
        'error'
      )
    });
  }
  const handelsignout = ()=>{
    signOut(auth).then(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user signout successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch((error) => {
      
    });
  }
  useEffect(() => {
    setloading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user.displayName)
        setloading(false)
      }else{
        setcurrentUser(null)
        setloading(false)
      }
      return ()=>{
        unsubscribe()
      }
    });
  }, [])
  const contextData = {
    loading,
    signupuser,
    signinWithGoogle,
    currentUser,
    signwithpasswordandemail,
    handelsignout
  }
  return (
    <weddingContextProvider.Provider value={contextData}>
      {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
