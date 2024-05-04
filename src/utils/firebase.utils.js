import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgcVlpQslJZqtlUUOwt0yMsZUQbFg2bIU",
  authDomain: "tests-for-school.firebaseapp.com",
  projectId: "tests-for-school",
  storageBucket: "tests-for-school.appspot.com",
  messagingSenderId: "264261151817",
  appId: "1:264261151817:web:42e0a8bec1e157a0f2a398",
  measurementId: "G-51PVM6Q8Y1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("error creating the user: ", error.message);
    }
  }

  return userDocRef;
};
