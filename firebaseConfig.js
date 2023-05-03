import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAF37i5du2Ny2UPUghumZcUm8J6Vg6ZSH8",
  authDomain: "ifpe-pos-mobile-react.firebaseapp.com",
  projectId: "ifpe-pos-mobile-react",
  storageBucket: "ifpe-pos-mobile-react.appspot.com",
  messagingSenderId: "851830636631",
  appId: "1:851830636631:web:0c4ba9ff17d60d21d02312"
};


export const app = initializeApp(firebaseConfig);