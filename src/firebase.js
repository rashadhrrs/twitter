import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyB3hf9mOk9_cDPXX7HXq1YFBoxxkff7AsU",
  authDomain: "twitter-rashad.firebaseapp.com",
  databaseURL: "https://twitter-rashad.firebaseio.com",
  projectId: "twitter-rashad",
  storageBucket: "twitter-rashad.appspot.com",
  messagingSenderId: "213296111114",
  appId: "1:213296111114:web:fd37b1071d7876de6dc9f3",
  measurementId: "G-K2CLD9EXP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export default db;
