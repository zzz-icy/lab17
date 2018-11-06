import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwXeFfCC2XX-VXH_1CNMMawRApkCb2Tvs",
    authDomain: "lab17-ea45a.firebaseapp.com",
    databaseURL: "https://lab17-ea45a.firebaseio.com",
    projectId: "lab17-ea45a",
    storageBucket: "lab17-ea45a.appspot.com",
    messagingSenderId: "884534447268"
};
firebase.initializeApp(config);

const database = firebase.database();



// firebase.database().ref().set({
//     name: "hannah",
//     age: 29,
//     isSingle: false
// });

export { firebase, database as default };
