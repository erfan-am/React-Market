import * as actionTypes from '../actionTypes';

const Inintal_State={
    currentUser:null,
    error:null
}
const userReducer = (state=Inintal_State,action) => {
  switch (action.type) {
    case actionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case actionTypes.EMAIL_SIGN_IN_SUCCESS:
        return{
            ...state,
            currentUser:action.payload,
            error:null
        }

    case actionTypes.GOOGLE_SIGN_IN_FAIL:
    case actionTypes.EMAIL_SIGN_IN_FAIL:
        return{
            ...state,
            error:action.payload
        }
  
      default:
          return state
  }
}


export default userReducer
