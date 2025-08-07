// firebase-init.js

console.log('Loading Firebase configuration...');

// Inicializácia Firebase s priamymi hodnotami
var firebaseConfig = {
    apiKey: "AIzaSyAqIOEs-5bnew7vnbdKrPmwm2lT8p7pGn8",
    authDomain: "railmodelregistryapp.firebaseapp.com",
    projectId: "railmodelregistryapp",
    storageBucket: "railmodelregistryapp.firebasestorage.app",
    messagingSenderId: "33435632655",
    appId: "1:33435632655:web:50fdb8969d453161bd4f7a",
};

console.log('Firebase config:', firebaseConfig);

// Inicializuj app len raz
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} else {
  console.log('Firebase already initialized');
}

// Test Firebase connection
console.log('Firebase app:', firebase.app());
console.log('Firebase auth:', firebase.auth());
console.log('Firebase firestore:', firebase.firestore());

// Globálne premenné pre aplikáciu
window.FIREBASE_PROJECT_ID = "railmodelregistryapp";
window.APP_ID = "rail-model-registry-production";

console.log('Global variables set:', {
  FIREBASE_PROJECT_ID: window.FIREBASE_PROJECT_ID,
  APP_ID: window.APP_ID
});