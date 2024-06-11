import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDeS-oJf5eKY_alo8nNqm8BBB2uh9nUXgg",
  authDomain: "msc-classes.firebaseapp.com",
  projectId: "msc-classes",
  storageBucket: "msc-classes.appspot.com",
  messagingSenderId: "441070949833",
  appId: "1:441070949833:web:a7d92d4d2f4c3ebac54418",
  measurementId: "G-BYWNVDVF18"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }