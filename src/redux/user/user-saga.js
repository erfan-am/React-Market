import {takeLatest,put,all,call} from 'redux-saga/effects';
import *as actionTypes from '../actionTypes';
import {auth,googleProvider,createuserProfleDocument} from '../../firebase/firebase';
import {googleSinginSuccess,googleSinginFail,EmailSinginFail,EmailSinginSuccess} from './user-action'

export function* SgninGoogle(){

   try{
        const {user}=yield auth.signInWithPopup(googleProvider);
        const userRef= yield call(createuserProfleDocument,user) ;
        const userSnapshot= yield userRef.get();
        yield put(googleSinginSuccess({id:userSnapshot.id,...userSnapshot.data()}))
   }
   catch(error){
        yield put(googleSinginFail(error))
   }
}

export function* signInWthEmail({payload:{email,password}}){
    try{
         const {user}= yield auth.signInWithEmailAndPassword(email,password);
         const userRef= yield call(createuserProfleDocument,user) ;
         const userSnapshot= yield userRef.get();
         yield put(EmailSinginSuccess({id:userSnapshot.id,...userSnapshot.data()}))
 
    } catch(error){
        yield put(EmailSinginFail(error))
    }   
}

export function* onGoogleSgninStart(){

    yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START ,SgninGoogle)
}

export function* onEmailSgnIn(){
    yield takeLatest(actionTypes.EMAIL_SIGN_IN_START,signInWthEmail)
}

export function* userSaga(){
 
    yield all([call(onGoogleSgninStart)])
}