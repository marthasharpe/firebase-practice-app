import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

// firebase configuration
var firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "fir-practice-app-69e4c.firebaseapp.com",
  databaseURL: "https://fir-practice-app-69e4c.firebaseio.com",
  projectId: "fir-practice-app-69e4c",
  storageBucket: "fir-practice-app-69e4c.appspot.com",
  messagingSenderId: "414623313242",
  appId: "1:414623313242:web:f384290db390d7d7e65763",
  measurementId: "G-JBFRQ33LYP",
};

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFireStoreForProfile: true,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({ getFirestore, getFirebase })
        ),
        reduxFirestore(firebase, firebaseConfig),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));
