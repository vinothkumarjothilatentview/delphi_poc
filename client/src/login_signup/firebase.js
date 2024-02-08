import { initializeApp } from "firebase/app";
// import { ReCaptchaV3Provider } from "firebase/app-check";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   provider: new ReCaptchaV3Provider("6Ldx7ewnAAAAAFTZ8oFA3p-p2rA4nNzovfC9umMb"),
//   apiKey: "AIzaSyDIjCKrQwojqZUh9-2FujVvZy2Amzh2ls4",
//   authDomain: "mattel-mvp.firebaseapp.com",
//   projectId: "mattel-mvp",
//   storageBucket: "mattel-mvp.appspot.com",
//   messagingSenderId: "1078357618509",
//   appId: "1:1078357618509:web:6405ae6faf2f5b3b3b5104",
//   isTokenAutoRefreshEnabled: true,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfR32xp3UeMhvyJn1a7h489GxdqeHbLN8",
  authDomain: "study-c36a1.firebaseapp.com",
  projectId: "study-c36a1",
  storageBucket: "study-c36a1.appspot.com",
  messagingSenderId: "1004727456321",
  appId: "1:1004727456321:web:35adce39696371ab146cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
