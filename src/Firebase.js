import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmiP7QUnrOuqojIquQBHDr8Nni-nm_HhI",
  authDomain: "alistra-96b8d.firebaseapp.com",
  projectId: "alistra-96b8d",
  storageBucket: "alistra-96b8d.appspot.com",
  messagingSenderId: "745264650134",
  appId: "1:745264650134:web:cee77edb5e8d885444afb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//const provider = new GoogleAuthProvider();

//export const signInWithGoogle = () => {
    //signInWithRedirect(auth, provider).then((result) => {
        //const name = result.user.displayName;
        //const avatar = result.user.photoURL;

        //localStorage.setItem("name", name);
        //localStorage.setItem("avatar", avatar);
    //}).catch((error) => {
        //console.log(error);
    //});
//};