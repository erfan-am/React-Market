import *as actionTypes from '../actionTypes';

const INITAIL={
    modalTarget:[]
}

const modalReducer=(state=INITAIL,action)=>{
    switch (action.type) {
        case actionTypes.TOGGLE_BUTTON:
            return{
                ...state,
                modalTarget:action.payload
            }
            
            break;
    
        default:
            return state;
    }
}

export default modalReducer