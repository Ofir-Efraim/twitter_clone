import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDec07TKSTiwUh60BomGX7jq1gVxlw8dtE",
    authDomain: "twitter-clone-b8a9e.firebaseapp.com",
    projectId: "twitter-clone-b8a9e",
    storageBucket: "twitter-clone-b8a9e.appspot.com",
    messagingSenderId: "108912010632",
    appId: "1:108912010632:web:755cdc5ebe25cbaf1cc63d",
    measurementId: "G-FD1QRZHYDS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;