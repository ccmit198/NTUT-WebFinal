// Add your Firebase Project Config here...
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuw6OYKLkqaIWN4QbcK_6uImzdH1Db2DI",
    authDomain: "ntut-web-f329c.firebaseapp.com",
    projectId: "ntut-web-f329c",
    storageBucket: "ntut-web-f329c.appspot.com",
    messagingSenderId: "212539430060",
    appId: "1:212539430060:web:a6fbf021e2a55b4eca7b09"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();