import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase.js'
// import { createContext } from 'react';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

      function signup(email, password) {
          // this returns a promise
          // firebase notifies you 
        return auth.createUserWithEmailAndPassword(email, password)
      }

      function login(email, password) {
        // this returns a promise
        // firebase notifies you 
      return auth.signInWithEmailAndPassword(email, password)
    }

      useEffect(() => {   //only want this to run once
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
          })
      return unsubscribe   // this unsubscribes us from lines 20-22
    }, [])

    const value = {
        currentUser,
        login,
        signup
        
 }

     return (
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>

     ) 
 }


 export default AuthContext
