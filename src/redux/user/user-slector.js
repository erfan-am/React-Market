import {createSelector} from 'reselect';

const selectoruser=state=>state.user;


export const selectCurrentUser=createSelector(
    [selectoruser],
    (user)=>user.currentUser
)