import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCQgrm1SAAAtpuvryzaNDN1X5N7mD4nRRg",
    authDomain: "auth-3712a.firebaseapp.com",
    databaseURL: "https://auth-3712a.firebaseio.com",
    projectId: "auth-3712a",
    storageBucket: "auth-3712a.appspot.com",
    messagingSenderId: "77190085163",
    appId: "1:77190085163:web:3793199d5e1c107c80886e",
    measurementId: "G-GXMEXH648N"
  };

  export const createuserProfleDocument= async(userAuth,additiionalData)=>{
      if(!userAuth) return;
      const userRef=firestore.doc(`users/${userAuth.uid}`)
      const snapShot=await userRef.get()
      console.log(snapShot);
      if(!snapShot.exists){

        const {displayName,email}=userAuth;
        const creatAt=new Date()
        try{
            await userRef.set({
                displayName,
                creatAt,
                email,
                ...additiionalData
            })
        }catch(error){
            console.log(error.message);
            
        }
    }
    return userRef
      
  }
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({promp:'select_account'});

  export const signInWthGoogle=()=>auth.signInWithPopup(provider);

  export default firebase