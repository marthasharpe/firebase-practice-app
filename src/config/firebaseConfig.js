  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: "fir-practice-app-69e4c.firebaseapp.com",
    databaseURL: "https://fir-practice-app-69e4c.firebaseio.com",
    projectId: "fir-practice-app-69e4c",
    storageBucket: "fir-practice-app-69e4c.appspot.com",
    messagingSenderId: "414623313242",
    appId: "1:414623313242:web:f384290db390d7d7e65763",
    measurementId: "G-JBFRQ33LYP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebaseConfig;