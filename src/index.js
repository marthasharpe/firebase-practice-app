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
import firebaseConfig from './config/firebaseConfig';

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

const firebaseProps = {
   firebase,
   config: firebaseConfig,
   dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...firebaseProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));
