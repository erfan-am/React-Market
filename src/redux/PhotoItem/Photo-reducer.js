import *as actionTypes from '../actionTypes';
import {addItems,removeItem} from './photo-utils'
const INITIAL={
    cartItems:[],
    loading:false
}

const photoReducer=(state=INITIAL,action)=>{
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItems(state.cartItems,action.payload)
            }
            
            break;
    
        case actionTypes.CLEAR_FILEDS:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)
            }
        case actionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItem(state.cartItems,action.payload)
            }
        case actionTypes.CLEAR_TOGGLE_BUTTON:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=> cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default photoReducer