import Rebase from 're-base'
import  firebase from 'firebase/app'
import 'firebase/database'




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVpWrGMZKYjAFmJvq4ZRUB--dpNd_SCk8",
    authDomain: "chatbox-app-dbr.firebaseapp.com",
    databaseURL: "https://chatbox-app-dbr.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base