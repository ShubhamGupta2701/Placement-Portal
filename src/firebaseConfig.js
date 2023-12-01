import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCcuOdxVmsXWRtIIpvDVh5dhOgu4q7GnmU",
	authDomain: "placement-portal-14678.firebaseapp.com",
	projectId: "placement-portal-14678",
	storageBucket: "placement-portal-14678.appspot.com",
	messagingSenderId: "561508702975",
	appId: "1:561508702975:web:e5c979bf490791a3dccaca",
};

export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
