// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
   apiKey: "AIzaSyA031VeEKiX6yLGIFxBeSjZHsj9N2xS7pE",
   authDomain: "my-brand-d995f.firebaseapp.com",
   projectId: "my-brand-d995f",
   storageBucket: "my-brand-d995f.appspot.com",
   messagingSenderId: "950963902637",
   appId: "1:950963902637:web:25258b6779580e0d474e24",
   measurementId: "G-65XNPMFXBL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
var db = firebase.firestore();
const image = firebase.storage();
