import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/index.css';

import firebase from "firebase/compat/app";
import 'firebase/auth';

import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCDRFZc7KHE-QlPYeGLl-XBAsG9FIvCAac",
  authDomain: "datamatch-bootcamp-f4128.firebaseapp.com",
  projectId: "datamatch-bootcamp-f4128",
  storageBucket: "datamatch-bootcamp-f4128.appspot.com",
  messagingSenderId: "624360933867",
  appId: "1:624360933867:web:9a8e37e24e40441339f1ae"
};

const rrfConfig = {
  userProfile: 'users'
}


const app = firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>
);