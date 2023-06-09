import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // auth
  const auth = getAuth(app);

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with password
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user info
  const updateUserInfo = (loggedUser, name) => {
    return updateProfile(loggedUser, { displayName: name });
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_FETCH_URL}/jwt`, {
            email: currentUser?.email,
            name: currentUser?.displayName,
          })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("boss-access-token", token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("boss-access-token");
      }

      
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // auth info
  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    logInUser,
    logOutUser,
    updateUserInfo,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
