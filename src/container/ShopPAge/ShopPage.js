import React from 'react'
import { withRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionItem} from '../../redux/PhotoItem/shop/shop-selector';
import Category from '../../components/Category/collection'

import ShopOver from '../../components/shopPage-overvew/shopPage-overview'
const ShopPage = ({match}) => {
    return (
        <div className="mt-5 p-4 container">
        <Route exact path={`${match.path}`} component={ShopOver} />
        <Route path={`${match.path}/:collectionId`} component={Category} />
        </div>
    )
}


const mapStateToProps=createStructuredSelector({
    collections:selectCollectionItem
})

export default withRouter(connect(mapStateToProps)(ShopPage))