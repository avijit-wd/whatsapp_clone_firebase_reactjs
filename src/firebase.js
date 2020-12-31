import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXAIiU30i28RejfQ8z0GrfVQgZ9cVpWWA",
  authDomain: "whatsapp-clone-5a621.firebaseapp.com",
  projectId: "whatsapp-clone-5a621",
  storageBucket: "whatsapp-clone-5a621.appspot.com",
  messagingSenderId: "836426941915",
  appId: "1:836426941915:web:3a2a44b3d1c3ec928a93fe",
  measurementId: "G-ZNP6FCXGXP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;
