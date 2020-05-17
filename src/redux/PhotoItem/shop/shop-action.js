import *as actioTypes from '../../actionTypes';


import {firestore,convertCollectionSnapshotToMap} from '../../../firebase/firebase'

export const fetchCollectionStart=()=>({
    type:actioTypes.UPDATE_COLLECTIONS_START,
})

export const fetchCollectionSuccess=collectionMap=>({
    type:actioTypes.UPDATE_COLLECTIONS_SUCCESS,
    payload:collectionMap
})

export const fetchCollectionFail=(error)=>({
    type:actioTypes.UPDATE_COLLECTIONS_FAIL,
    payload:error
})

export const fetchCollectionSuceAsync=()=>{
    return dispatch=>{
           }
}


