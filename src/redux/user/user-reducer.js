import * as actionTypes from '../actionTypes';

const Inintal_State={
    currentUser:null,
    loading:true
}
const userReducer = (state=Inintal_State,action) => {
  switch (action.type) {
    case actionTypes.SET_LOADNG:
        return{
            ...state,
            loading:true
        }
        break;
      case actionTypes.SET_CURRENT_USER :
          return{
              ...state,
              currentUser:action.payload,
              loading:false
          }
     
  
      default:
          return state
  }
}


export default userReducer
