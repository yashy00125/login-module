import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBZvFulYsxZwqqzrMp-wnMJ1Kwpc4buOFc",
    authDomain: "data-corp-login.firebaseapp.com",
    projectId: "data-corp-login",
    storageBucket: "data-corp-login.appspot.com",
    messagingSenderId: "967870328893",
    appId: "1:967870328893:web:2b4c62e2849c5a42d73a54"
};
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

firebase.initializeApp(firebaseConfig);
export default firebase;