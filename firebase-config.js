// Import the functions you need from the SDKs you need
import firebase  from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqZC4YLdfPtqag-p-a2NpQD1SvALJ-7I",
  authDomain: "expologinregister.firebaseapp.com",
  projectId: "expologinregister",
  storageBucket: "expologinregister.appspot.com",
  messagingSenderId: "696008530463",
  appId: "1:696008530463:web:ab6dffa0a849a81dc8132a"
};

let app = firebase.initializeApp(firebaseConfig);


const fireStore = firebase.firestore();

const auth = firebase.auth();

export {fireStore,auth};