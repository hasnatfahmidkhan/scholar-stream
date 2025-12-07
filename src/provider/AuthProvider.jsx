import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
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
import { auth } from "../Firebase/firebase";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // func for sign up email & pass
  const signUpWithEmailPassFunc = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // func for sign in email & pass
  const signInWithEmailPassFunc = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // func for update profile
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // func for google sign in
  const googleSignInFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // reset pass email
  const resetPassEmailFunc = (email) => {
    setAuthLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // sign out func
  const singOutFunc = () => {
    return signOut(auth);
  };

  // observer for user login or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthLoading(false);
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    authLoading,
    setAuthLoading,
    signUpWithEmailPassFunc,
    singOutFunc,
    updateProfileFunc,
    signInWithEmailPassFunc,
    googleSignInFunc,
    resetPassEmailFunc,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
