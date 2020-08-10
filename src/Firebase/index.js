import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const Config = {
  apiKey: 'AIzaSyAyAspV-2I3BSQYANqllgu40sRVwIX1vXk',
  authDomain: 'firegramv2.firebaseapp.com',
  databaseURL: 'https://firegramv2.firebaseio.com',
  projectId: 'firegramv2',
  storageBucket: 'firegramv2.appspot.com',
  messagingSenderId: '292148464419',
  appId: '1:292148464419:web:0db02e6e2156a99dad9a96',
  measurementId: 'G-V2TKF03P2G',
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const Ggprovider = new firebase.auth.GoogleAuthProvider();
const FBprovider = new firebase.auth.FacebookAuthProvider();

Ggprovider.setCustomParameters({ prompt: 'select_account' });
FBprovider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(Ggprovider);
export const signInWithFacebook = () => auth.signInWithPopup(FBprovider);

export default firebase;
//: if request.auth != null
