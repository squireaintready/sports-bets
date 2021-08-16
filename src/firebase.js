import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0LGMyobBOPjycUKJQJ9ajdGTwbMNO1U",
  authDomain: "sports-bets-322618.firebaseapp.com",
  projectId: "sports-bets-322618",
  storageBucket: "sports-bets-322618.appspot.com",
  messagingSenderId: "878654615416",
  appId: "1:878654615416:web:2ed057db226211d82d628d",
  measurementId: "G-JR8PQ58XEY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }; 

// import {db} from './firebase'
// import firebase from firebase

// db.collection('daily-balances').add(
//   {
//      balance: 'NUMBER'
//      timestamp: firebase.firestore.FieldValue.serverTimestamp();
//   }
// )