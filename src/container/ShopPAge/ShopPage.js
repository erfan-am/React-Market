import React, { Component } from 'react'
import { withRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import {selectCollectionItem,selectFetch,selectIsCollectionLoading} from '../../redux/PhotoItem/shop/shop-selector';
import Category from '../../components/Category/collection'
import Spinner from '../../components/Spnner/Spinner'
import ShopOver from '../../components/shopPage-overvew/shopPage-overview';
import {createStructuredSelector} from 'reselect'
import {fetchCollectionStart} from '../../redux/PhotoItem/shop/shop-action'
class ShopPage extends Component{

    unsubcribefromSnapshot=null;
   componentDidMount(){
       const {fetchCollectionStart}=this.props
       fetchCollectionStart()
       }
    render(){
        const {match, isCollection, fetch}=this.props
      
        return (
            <div className="mt-5 p-4 container">
          {fetch ? <Spinner/>:  <Route exact path={`${match.path}`} component={ShopOver} />}
           {!isCollection ?  <Spinner/>: <Route path={`${match.path}/:collectionId`} component={Category} />}
            </div>
        )
    }
} 


const mapStateToProps=createStructuredSelector({
    collections:selectCollectionItem,
    fetch:selectFetch,
    isCollection:selectIsCollectionLoading
   
})
const mapDspatchToProps=dispatch=>({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
})
export default withRouter(connect(mapStateToProps,mapDspatchToProps)(ShopPage))