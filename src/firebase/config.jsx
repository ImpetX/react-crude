const config = {
    apiKey: "AIzaSyAjIy62ACyUq20km8GDISjKMdLdmOe3UrM",
    authDomain: "react-crud-e3c14.firebaseapp.com",
    databaseURL: "https://react-crud-e3c14.firebaseio.com",
    projectId: "react-crud-e3c14",
    storageBucket: "react-crud-e3c14.appspot.com",
    messagingSenderId: "868643763364"
};

// Creates and initializes a Firebase app instance.
firebase.initializeApp(config);

const database = firebase.database(); //Gets the Database service for the default app or a given app.
const ref = firebase.database().ref(); // refrence to the root location of the database.
const firebaseAuth = firebase.auth(); // Gets the Auth service for the app.
const storageRef = firebase.storage().ref(); // Points to the root storage reference

export {
    database,
    ref,
    firebaseAuth,
    storageRef
};