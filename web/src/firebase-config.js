/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDILYmvhyBnegyCGb4eYfb5iuEI-JxpWbQ",
  authDomain: "easyfinplan.firebaseapp.com",
  projectId: "easyfinplan",
  storageBucket: "easyfinplan.appspot.com",
  messagingSenderId: "425580552581",
  appId: "1:425580552581:web:58a6c72b881fb70ea5e4ec",
  measurementId: "G-RP30EQG54R"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}