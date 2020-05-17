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
      const snapShot=await userRef.get();
      const collectionSnapshot=await userRef.get();
      console.log(collectionSnapshot);
      
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


  export const addCollectionAndItem=async(collectionKey,objectsToAdd)=>{
      const collectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj)      
    });
   return await batch.commit()
  }
 export const convertCollectionSnapshotToMap=(collections)=>{
    const transformCollection=collections.docs.map(doc=>{
      const {title,items}=doc.data();

      return{
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    });
    
  return  transformCollection.reduce((accumulatro,collection)=>{
      accumulatro[collection.title.toLowerCase()]=collection;
      return accumulatro;
    },{})
    
  }
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  export const googleProvider=new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({promp:'select_account'});

  export const signInWthGoogle=()=>auth.signInWithPopup(googleProvider);

  export default firebase