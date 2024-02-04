/*
    File: hardData.js
    Author: Johnathan Dang
 */

const { initializeApp } = require("firebase/app");
const { addDoc, collection, getFirestore } = require("firebase/firestore");
const firebaseConfig = require("./firebaseConfig"); // Import your Firebase config

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


// Reference to the "events" collection
const eventsCollectionRef = collection(firestore, 'events');

// Data to be added to the database
const eventData = [
  { eventName: 'BroncoHacks', eventDate: '2024-02-02', eventLocation: 'Ursa Major' },
  { eventName: 'BroncoHacks', eventDate: '2024-02-03', eventLocation: 'Ursa Major'},
  // Add more events as needed
];

// Function to add each event to the "events" collection
const addEventData = async () => {
  for (const event of eventData) {
    try {
      const docRef = await addDoc(eventsCollectionRef, event);
      console.log(`Event added with ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error adding event: ', error);
    }
  }
};

// Call the function to add data to the database
addEventData();
