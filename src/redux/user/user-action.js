import * as action from '../actionTypes';

export const loading =()=>({
    type:action.SET_LOADNG
})

export const setCurrentUser=(user)=>{
    return dispatch=>{
        loading();
        dispatch({type:action.SET_CURRENT_USER,
        payload:user})
    }
}

export const googleSingin=()=>({
    type:action.GOOGLE_SIGN_IN_START
})
  

export const googleSinginSuccess=(user)=>({
    type:action.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

export const googleSinginFail=(error)=>({
    type:action.GOOGLE_SIGN_IN_FAIL,
    payload:error
})





export const EmailSingin=(emailAndPassword)=>({
    type:action.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})
  

export const  EmailSinginSuccess=(user)=>({
    type:action.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})

export const EmailSinginFail=(error)=>({
    type:action.EMAIL_SIGN_IN_FAIL,
    payload:error
})