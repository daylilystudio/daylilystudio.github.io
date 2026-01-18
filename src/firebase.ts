import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: projectId,
  storageBucket: `${projectId}.appspot.com`,
  messagingSenderId: "796343837277",
  appId: "1:796343837277:web:bd65cb8453db6266d923b4",
  measurementId: "G-SYNG02HPTX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
