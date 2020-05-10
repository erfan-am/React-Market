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
  