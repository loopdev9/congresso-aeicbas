//import 'firebase/firestore';
const firebase = require('firebase');
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBI2CFO6mTVuoaI2n3KUvOHht5bjTs10Io",
  authDomain: "congresso-aeicbas.firebaseapp.com",
  databaseURL: "https://congresso-aeicbas.firebaseio.com",
  projectId: "congresso-aeicbas",
  storageBucket: "congresso-aeicbas.appspot.com",
  messagingSenderId: "390429712456",
  appId: "1:390429712456:web:b445b292cd49674087387d",
  measurementId: "G-PS3M26TMQF"
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

module.exports = { db: app.firestore(), auth: app.auth() };