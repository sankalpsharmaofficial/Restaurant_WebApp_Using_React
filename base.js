import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBytOooTw4VPGxUfYpwwS3Mp0V9q9FH3VI",
    authDomain: "restaurantwebapp-70af6.firebaseapp.com",
    databaseURL: "https://restaurantwebapp-70af6.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
