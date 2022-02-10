import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
    //PONER ACA LA INFO DE SU APP
    {
        apiKey: "AIzaSyDw0aN9Bz3ChC9If_n3okrrCFzUMNoz4f0",
        authDomain: "reactjs-ecommerce-6177e.firebaseapp.com",
        projectId: "reactjs-ecommerce-6177e",
        storageBucket: "reactjs-ecommerce-6177e.appspot.com",
        messagingSenderId: "673325174511",
        appId: "1:673325174511:web:36ff095e4613f936d5151a"
    }
);
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
