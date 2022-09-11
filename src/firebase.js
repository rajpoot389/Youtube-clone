import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxc01a9AAcCBPo9yCjMrTIlPxAz1WnA74",
    authDomain: "clone-362115.firebaseapp.com",
    projectId: "youtube-clone-362115",
    storageBucket: "youtube-clone-362115.appspot.com",
    messagingSenderId: "637361280332",
    appId: "1:637361280332:web:31629218eb478bbbcbebe9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const Provider = new firebase.auth.GoogleAuthProvider();
export default Provider;