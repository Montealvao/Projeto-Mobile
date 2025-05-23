import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDEtU9fYE5JLKBONvVFP7fkeckH5d3VbZw",
    authDomain: "educady-a1109.firebaseapp.com",
    projectId: "educady-a1109",
    storageBucket: "educady-a1109.firebasestorage.app",
    messagingSenderId: "178180818871",
    appId: "1:178180818871:web:6e5abd8213dd8f4edb0a32",
    measurementId: "G-8JMKV08LNW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }