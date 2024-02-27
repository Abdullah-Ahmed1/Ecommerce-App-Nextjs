import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAx4FBhwDcr6OGyF6x_1ftDv_nQ4y8UQBg",
  authDomain: "ecommerce-app-7b8dd.firebaseapp.com",
  projectId: "ecommerce-app-7b8dd",
  storageBucket: "ecommerce-app-7b8dd.appspot.com",
  messagingSenderId: "674855061154",
  appId: "1:674855061154:web:c483cc4df2c90bd294b9fb",
  measurementId: "G-J824VY0Y0E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
