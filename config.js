import firebase from 'firebase';
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDdeIDu3FKYRrynyKP9WdhYI7aUSMzWHg8",
    authDomain: "wireless-library-a5b6a.firebaseapp.com",
    databaseURL: "https://wireless-library-a5b6a.firebaseio.com",
    projectId: "wireless-library-a5b6a",
    storageBucket: "wireless-library-a5b6a.appspot.com",
    messagingSenderId: "430948636117",
    appId: "1:430948636117:web:949a86642416edae44595c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()