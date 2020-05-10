import {createSelector} from 'reselect'
const selectCollection =state=>state.shop

export const selectCollectionItem=createSelector(
    [selectCollection],
    shop=>shop.collections
)
export const selectCollectionItemOver=createSelector(
    [selectCollectionItem],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectShopOver=collectionUrlParam=>createSelector (

    [selectCollectionItem],
    collections=>collections[collectionUrlParam]
)