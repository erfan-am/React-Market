import *as actionTypes from '../../actionTypes'
const INITIAL={
  collections:null,
  isFetching:false,
  error:undefined
}
const collectionReducer=(state=INITIAL,action)=>{
  switch (action.type) {
    case actionTypes.UPDATE_COLLECTIONS_START:
      return{
        ...state,
        isFetching:true
      }
    
    case actionTypes.UPDATE_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        collections:action.payload

      }
    case actionTypes.UPDATE_COLLECTIONS_FAIL:
      return{
        ...state,
        isFetching:false,
        error:action.payload
      }
    default:
     return state
  }
}

export default collectionReducer