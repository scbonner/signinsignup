import firebase from 'Firebase/app'
import 'firebase/auth'

// development and production environments in placed to access
const app = firebase.initializeApp({

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

})
// function that gives us our authentication and firebase uses
export const auth = app.auth()
export default app

// Options to configure the app's services.


// Creates and initializes a Firebase {@link firebase.app.App app} instance.

// See {@link https://firebase.google.com/docs/web/setup#add_firebase_to_your_app Add Firebase to your app} and {@link https://firebase.google.com/docs/web/setup#multiple-projects Initialize multiple projects} for detailed documentation.

// @example


// // Initialize default app
// // Retrieve your own options values by adding a web app on
// // https://console.firebase.google.com
// firebase.initializeApp({
//   apiKey: "AIza....",                             // Auth / General Use
//   appId: "1:27992087142:web:ce....",      // General Use
//   projectId: "my-firebase-project",               // General Use
//   authDomain: "YOUR_APP.firebaseapp.com",         // Auth with popup/redirect
//   databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
//   storageBucket: "YOUR_APP.appspot.com",          // Storage
//   messagingSenderId: "123456789",                  // Cloud Messaging
//   measurementId: "G-12345"                        // Analytics
// });
// @example


// // Initialize another app
// var otherApp = firebase.initializeApp({
//   apiKey: "AIza....",