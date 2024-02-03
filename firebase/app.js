// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a Firestore instance
const firestore = getFirestore(app);

// Write data
// Reference to the "events" collection
const eventsCollectionRef = collection(firestore, 'events');

// Data for the new event
const eventData = {
  eventName: 'Example Event',
  eventDate: '2024-02-02',
  // other event properties...
};

// Add a new document to the "events" collection with an automatically generated ID
addDoc(eventsCollectionRef, eventData)
  .then((docRef) => {
    console.log('Document added with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });

