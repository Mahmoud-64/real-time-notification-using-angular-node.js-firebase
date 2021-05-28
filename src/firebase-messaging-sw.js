// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    // apiKey: '<your-key>',
    // authDomain: '<your-project-authdomain>',
    // databaseURL: '<your-database-URL>',
    // projectId: '<your-project-id>',
    // storageBucket: '<your-storage-bucket>',
    // messagingSenderId: '<your-messaging-sender-id>'

    apiKey: "AIzaSyBsb4NBeB1oPj-KvHKnzA_4ixD5C-gnhD0",
    authDomain: "notifications-test-4f9f1.firebaseapp.com",
    projectId: "notifications-test-4f9f1",
    storageBucket: "notifications-test-4f9f1.appspot.com",
    messagingSenderId: "502589598806",
    appId: "1:502589598806:web:e38fa120ed5f45cfad9ff7"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


