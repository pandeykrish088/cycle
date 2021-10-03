import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBNKTCRpjiPlO7f59-inYxX9j2qwyZJRj8",
  authDomain: "cycle-3f2c2.firebaseapp.com",
  projectId: "cycle-3f2c2",
  storageBucket: "cycle-3f2c2.appspot.com",
  messagingSenderId: "33277142320",
  appId: "1:33277142320:web:6577aacc9335aa4825d4f5"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

