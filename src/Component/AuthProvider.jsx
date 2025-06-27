import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import "../App.css";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authProvider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [loding, setLoding] = useState(true);

  const signUp = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, authProvider);
  };

  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    setLoding(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userUpdateProfile = (updateData) => {
    setLoding(true);
    return updateProfile(auth.currentUser, updateData).then(()=>{setUser({...auth.currentUser})}).finally(() => {
            setLoding(false);
        });
  };

  const handelDelete = (id) => {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return fetch(`https://57-module-assintment-10.vercel.app/plant/${id}`, {
          method: "DELETE",
        });
      } else {
        return Promise.reject("User cancelled deletion");
      }
    });
  };

  useEffect(() => {
    const getCurrentUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      getCurrentUser();
    };
  }, []);

  const authData = {
    signUp,
    loginWithGoogle,
    login,
    singOutUser,
    resetPassword,
    handelDelete,
    user,
    loding,
    userUpdateProfile,
  };

  return (
    <AuthContext value={authData}>
   {children}
    </AuthContext>
  );
};

export default AuthProvider;
