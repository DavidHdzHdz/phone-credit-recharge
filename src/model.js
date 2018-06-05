const config = {
  apiKey: "AIzaSyAMHASnMdGNzqcjCBHs_DBXoHG6lve5bIE",
  authDomain: "phone-recharge-id.firebaseapp.com",
  databaseURL: "https://phone-recharge-id.firebaseio.com",
  projectId: "phone-recharge-id",
  storageBucket: "phone-recharge-id.appspot.com",
  messagingSenderId: "249790808822"
};

const myApp = firebase.initializeApp(config);

console.log(myApp.name);
