import {createSelector} from 'reselect';


const selectPhoto=state=>state.photo;


export const selectCarttems =createSelector(
    [selectPhoto],
    (photo)=>photo.cartItems
);


export const selectCartitemsCount=createSelector(
    [selectCarttems],
    cartItems=>
    cartItems.reduce(((accumalatedQuantity,cartItem)=>accumalatedQuantity + cartItem.quantity),0)
)

export const selectCartTotal=createSelector(
    [selectCarttems],
    cartItems=>cartItems.reduce(((accumalatedQuantity,cartItem)=>accumalatedQuantity + cartItem.quantity * cartItem.price),0)

)