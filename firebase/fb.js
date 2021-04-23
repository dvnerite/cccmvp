import * as firebase from 'firebase';
import 'firebase/firestore';

// firebase configuration 

const firebaseConfig = {
    apiKey: "AIzaSyA3JOLjPOgwM4R7wFtd_bWeRGS5jDdOwLk",
    authDomain: "ccc-mvp.firebaseapp.com",
    projectId: "ccc-mvp",
    storageBucket: "ccc-mvp.appspot.com",
    messagingSenderId: "674898792396",
    appId: "1:674898792396:web:25d851f0ecc610b2c7d769",
    measurementId: "G-B3V87QRLBE"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
  // db.settings({ timestampsInSnapshots: true});
  
  export default fb;