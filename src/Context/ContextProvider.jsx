import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from 'react'
import { app } from "../FireBase/Config";
import Swal from "sweetalert2";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider} from "firebase/auth";
export const weddingContextProvider = createContext(null)
const auth = getAuth(app);
const ContextProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [currentUser, setcurrentUser] = useState(null)
  const [servicesData, setservicesData] = useState([])
  const [galleryData, setgalleryData] = useState([])
  const [venuesData, setvenuesData] = useState([])
  const [loading, setloading] = useState(false)
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
    setloading(false)
  }, [])
  const signupuser = (password, email, username) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: `${user}`,
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
        console.log(errorMessage)
      });
  }
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
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
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential)
      });
  }
  const signinwithgithub = ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user.displayName)
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
    currentUser
  }
  return (
    <weddingContextProvider.Provider value={contextData}>
      {children}
    </weddingContextProvider.Provider>
  )
}

export default ContextProvider
