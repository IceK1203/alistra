import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase Test Server

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

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
