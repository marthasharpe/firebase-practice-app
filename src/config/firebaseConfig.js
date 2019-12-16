  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyADKKwb-FQVO27o06r4Tct-P4m_bOqJQxo",
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
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseConfig;