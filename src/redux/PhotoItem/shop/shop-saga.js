import {takeEvery,call,put} from 'redux-saga/effects';
import { firestore,convertCollectionSnapshotToMap} from '../../../firebase/firebase'
import * as actionTypes from '../../actionTypes';
import {fetchCollectionSuccess,fetchCollectionFail} from './shop-action'
export function* fetchcollectionsasAsync(){
   yield  console.log('erfan');
   try{
    const collectionRef= firestore.collection('colections');
    const snapshot=yield collectionRef.get()
    const collectionMap=yield call(convertCollectionSnapshotToMap,snapshot);
    yield put(fetchCollectionSuccess(collectionMap))
   }catch(error){
    yield put(fetchCollectionFail(error))
   }
   
    
}
export function* fetchcollectionsStart(){
    yield takeEvery(actionTypes.UPDATE_COLLECTIONS_START,
        fetchcollectionsasAsync)
}