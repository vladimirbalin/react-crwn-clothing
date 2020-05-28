import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDT54XO7fszT1q4wxB4-LZMpwDuvcwJlEA",
  authDomain: "crwn-e-commerce.firebaseapp.com",
  databaseURL: "https://crwn-e-commerce.firebaseio.com",
  projectId: "crwn-e-commerce",
  storageBucket: "crwn-e-commerce.appspot.com",
  messagingSenderId: "756843681963",
  appId: "1:756843681963:web:3c8126cc32eb7795f37fee",
  measurementId: "G-2H3DH2K3GL"
};

export const createUserProfileDocument = async (currentUser, additionalData) => {
  if(!currentUser) return;

  const userRef = firestore.doc(`/users/${currentUser.uid}`);
  const snapShot = await userRef.get();

  try{
    if(!snapShot.exists){
      const { displayName, email } = currentUser;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
  } catch(error) {
    console.log(error);
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;