  import firebase from 'firebase'
  import '@firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC0auvel0Run1TCQE8H-TR4f-JZF2BlbZM",
    authDomain: "vue-firebase-chat-47f35.firebaseapp.com",
    databaseURL: "https://vue-firebase-chat-47f35.firebaseio.com",
    projectId: "vue-firebase-chat-47f35",
    storageBucket: "vue-firebase-chat-47f35.appspot.com",
    messagingSenderId: "745501960825"
  };

const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({
    timestampsInSnapshots: true
})

export default firebaseApp.firestore()