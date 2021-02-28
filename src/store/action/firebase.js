import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCFjyVu-D3MLbNiDUOMWZeSAhX8oUMKmIk",
  authDomain: "rn-campusrecruitmentapp.firebaseapp.com",
  projectId: "rn-campusrecruitmentapp",
  storageBucket: "rn-campusrecruitmentapp.appspot.com",
  messagingSenderId: "950221505472",
  appId: "1:950221505472:web:f0bef4f25e51c8cfb27e25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
