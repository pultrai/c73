import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCBMHDovPH41qv8MssVjzqoES2ESH98nbU",
  authDomain: "e-library-e4938.firebaseapp.com",
  projectId: "e-library-e4938",
  storageBucket: "e-library-e4938.appspot.com",
  messagingSenderId: "442539597741",
  appId: "1:442539597741:web:39dee52dd394f77c714b24"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
