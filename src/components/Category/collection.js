import React from 'react'
import Item from '../ShopPhoto/ShowPhotoItem/ShowPhotoItem';
import {selectShopOver} from '../../redux/PhotoItem/shop/shop-selector'
import { connect } from 'react-redux';
const collection = ({collection}) => {
    const {title,items} = collection
    return (
        <div className="container">
        <h2>{title}</h2>
        <div className="row">
            {items.map(item=>(<Item item={item} key={item.id} />))}
        </div>
        
        </div>
    )
}



const mapStateToProps=(state,ownprops)=>({
    collection:selectShopOver(ownprops.match.params.collectionId)(state)
})


export default connect(mapStateToProps)( collection)
