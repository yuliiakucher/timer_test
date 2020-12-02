import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
        apiKey: "AIzaSyB1jbW6vIbUrGgAfxE-eebyTkmGSiWeFjg",
        authDomain: "test-79173.firebaseapp.com",
        databaseURL: "https://test-79173.firebaseio.com",
        projectId: "test-79173",
        storageBucket: "test-79173.appspot.com",
        messagingSenderId: "413413933305",
        appId: "1:413413933305:web:d325e758b00e08344de228"
})


export const auth = app.auth()

export const database = app.database();
console.log(database)

export default app