import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// database

const config = {
  apiKey: 'AIzaSyBz7PqyGM6PKbIcy1-VW_Ml2LcBeLdNleU',
  authDomain: 'streamflix-10bc0.firebaseapp.com',
  databaseURL: 'https://streamflix-10bc0.firebaseio.com',
  projectId: 'streamflix-10bc0',
  storageBucket: 'streamflix-10bc0.appspot.com',
  messagingSenderId: '219714374998',
  appId: '1:219714374998:web:0d414523248dd6ad6b9af7',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
