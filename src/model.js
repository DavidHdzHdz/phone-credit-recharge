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

let companies;
// convert firebase json to standar json
const jsonTranspiler = (snapshot) => {
  let i = 0;
  let array = [];
  let object = {};
  let dataValues = {};
  snapshot.forEach(data => {
    object['id'] = data.id;
    dataValues = data.data();
    for (const prop in dataValues) {
      object[prop] = dataValues[prop];
    }
    array[i] = object;
    i++;
    object = {};
  });
  return array;
}

// getters
const getUserss = () => {
  db.collection('people').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}

const getCompanies = () => {
  db.collection('companies').get().then((querySnapshot) => {
    companies = jsonTranspiler(querySnapshot);
  });
}
