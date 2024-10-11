import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3we2-uwdxqPmc1UX_lwAvAf4H9wD91BM",
  authDomain: "netflixgpt-55e71.firebaseapp.com",
  projectId: "netflixgpt-55e71",
  storageBucket: "netflixgpt-55e71.appspot.com",
  messagingSenderId: "819901982954",
  appId: "1:819901982954:web:85e4b23d632aa174c40f93",
  measurementId: "G-Z3DGV7VZ7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();








