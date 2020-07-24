import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCiNfaJdEcadLVCrer1gCVv23Wi-U4UACk",
    authDomain: "covid-19-dashboard-1e889.firebaseapp.com",
    databaseURL: "https://covid-19-dashboard-1e889.firebaseio.com",
    projectId: "covid-19-dashboard-1e889",
    storageBucket: "covid-19-dashboard-1e889.appspot.com",
    messagingSenderId: "709560581390",
    appId: "1:709560581390:web:02b6f2ba4749a9625eeb5f",
    measurementId: "G-VRHELFFE06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firebaseauth = firebase.auth;