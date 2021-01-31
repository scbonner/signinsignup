import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
// import { createContext } from 'react';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

      function signup(email, password) {
          // this returns a promise
          // firebase notifies you 
        return auth.createUserWithEmailAndPassword(email, password)
      }

      useEffect(() => {   //only want this to run once
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
          })
      return unsubscribe   // this unsubscribes us from lines 20-22
    }, [])

    const value = {
        currentUser,
        signup
 }

     return <AuthContext.Provider value={value}>{children}
        </AuthContext.Provider>

     
 }


 export default AuthContext
