import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //create user or Sign-Up method
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //create sign-In or login
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //set observer to save current user info

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setUid(currentUser.uid);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //Update user method

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  //Google Sign-In method

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //User Sign-Out method

  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    logOut,
    updateUser,
    googleSignIn,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
