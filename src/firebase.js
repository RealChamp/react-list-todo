import firebase from 'firebase/app'
import 'firebase/firestore'


const config = firebase.initializeApp({
    apiKey: "AIzaSyApJVL3gEAUs69YFZ2ZQ8-l0MBCzDO-55o",
    authDomain: "todoist-8d45c.firebaseapp.com",
    databaseURL: "https://todoist-8d45c.firebaseio.com",
    projectId: "todoist-8d45c",
    storageBucket: "todoist-8d45c.appspot.com",
    messagingSenderId: "837397379245",
    appId: "1:837397379245:web:9021d1720f96a08d696e24"
})

export {config as firebase}