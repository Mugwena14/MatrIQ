import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7L0zHmAnEJMHUsDoa27mN71TNHSKta8c",
  authDomain: "matriq-65ffe.firebaseapp.com",
  projectId: "matriq-65ffe",
  storageBucket: "matriq-65ffe.firebasestorage.app",
  messagingSenderId: "394034930308",
  appId: "1:394034930308:web:57a687c1cd9f37444458d1",
  measurementId: "G-VXCKPDXL8F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);


