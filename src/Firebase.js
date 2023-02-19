import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Test Server

const firebaseConfig = {
    apiKey: "AIzaSyBtLri6p_NTVzMmBQXktkbu8Z_OBzW63M8",
    authDomain: "alistra-testserver.firebaseapp.com",
    projectId: "alistra-testserver",
    storageBucket: "alistra-testserver.appspot.com",
    messagingSenderId: "1055020164835",
    appId: "1:1055020164835:web:3394ec4306d453b65787d6"
};

// Firebase Production Server
//const firebaseConfig = {
  //apiKey: "AIzaSyDmiP7QUnrOuqojIquQBHDr8Nni-nm_HhI",
  //authDomain: "alistra-96b8d.firebaseapp.com",
  //projectId: "alistra-96b8d",
  //storageBucket: "alistra-96b8d.appspot.com",
  //messagingSenderId: "745264650134",
  //appId: "1:745264650134:web:cee77edb5e8d885444afb7"
//};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

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