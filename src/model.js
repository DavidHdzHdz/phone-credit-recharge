const config = {
  apiKey: "AIzaSyAMHASnMdGNzqcjCBHs_DBXoHG6lve5bIE",
  authDomain: "phone-recharge-id.firebaseapp.com",
  databaseURL: "https://phone-recharge-id.firebaseio.com",
  projectId: "phone-recharge-id",
  storageBucket: "phone-recharge-id.appspot.com",
  messagingSenderId: "249790808822"
};

const myApp = firebase.initializeApp(config);
const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

console.log(myApp.name);

// getters
const getUserss = () => {
  db.collection("people").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}
