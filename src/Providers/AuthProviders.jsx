import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from './../Firebase/Firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const register = (name,email,password) => {
        return createUserWithEmailAndPassword(name, auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('Auth state changed to ' , currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }
  },[])
    const authInfo = {
        register,
        logIn,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;