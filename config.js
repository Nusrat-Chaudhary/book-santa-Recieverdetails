import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAn8rq_OrEjikCHVV5cpZiD45vq2Iq2LSI",
    authDomain: "booksanta-468f5.firebaseapp.com",
    projectId: "booksanta-468f5",
    storageBucket: "booksanta-468f5.appspot.com",
    messagingSenderId: "361769188030",
    appId: "1:361769188030:web:1c81938f5a4d6ede15fcef"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();