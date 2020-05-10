import *as actionTypes from '../actionTypes';

export const addItems=(item)=>{
    return {
        type:actionTypes.ADD_ITEM,
        payload:item
    }
}

export const clearItem=item=>({
    type:actionTypes.CLEAR_FILEDS,
    payload:item
})

export const removeItem=item=>({
    type:actionTypes.REMOVE_ITEM,
    payload:item
})

export const clearItemToggle=(item)=>({
    type:actionTypes.CLEAR_TOGGLE_BUTTON,
    payload:item
})