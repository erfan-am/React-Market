import {createSelector} from 'reselect'
const selectCollection =state=>state.shop

export const selectCollectionItem=createSelector(
    [selectCollection],
    shop=>shop.collections
)
export const selectCollectionItemOver=createSelector(
    [selectCollectionItem],
    collections=> collections ? Object.keys(collections).map(key=>collections[key]): []
)

export const selectShopOver=collectionUrlParam=>createSelector (

    [selectCollectionItem],
    collections=>collections ? collections[collectionUrlParam] : null
)

export const selectFetch=createSelector(
    [selectCollection],
    shop=>shop.isFetching
)

export const selectIsCollectionLoading=createSelector(
    [selectCollection],
    shop=>!!shop.collections 
)