import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/index.css';
// import { initializeApp } from "firebase/app";
// import 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: "AIzaSyCDRFZc7KHE-QlPYeGLl-XBAsG9FIvCAac",
//   authDomain: "datamatch-bootcamp-f4128.firebaseapp.com",
//   projectId: "datamatch-bootcamp-f4128",
//   storageBucket: "datamatch-bootcamp-f4128.appspot.com",
//   messagingSenderId: "624360933867",
//   appId: "1:624360933867:web:9a8e37e24e40441339f1ae"
// };


// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);