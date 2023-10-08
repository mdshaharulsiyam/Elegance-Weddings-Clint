import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from 'react'
import { app } from "../FireBase/Config";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signInWithEmailAndPassword,signOut} from "firebase/auth";
export const weddingContextProvider = createContext(null)
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const Googleprovider = new GoogleAuthProvider();
  const [currentUser, setcurrentUser] = useState(null)
  const [servicesData, setservicesData] = useState([])
  const [galleryData, setgalleryData] = useState([])
  const [venuesData, setvenuesData] = useState([])
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setloading(true)
    fetch('./services.json').then((res) => res.json()).then((data) => setservicesData(data))

  }, [])
  useEffect(() => {
    setloading(true)
    fetch('./gallery.json').then((res) => res.json()).then((data) => setgalleryData(data))

  }, [])
  useEffect(() => {
    setloading(true)
    fetch('./venues.json').then((res) => res.json()).then((data) => setvenuesData(data))
  }, [])
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
        title: 'user signOut successfully',
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
    servicesData,
    galleryData,
    venuesData,
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
