import React from 'react'
import {createStructuredSelector }from 'reselect';
import {selectCarttems,selectCartTotal } from '../../redux/PhotoItem/photo-selector'
import { connect } from 'react-redux';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import StripeButton from '../stripe-button/stripe'

const Checkout = ({cartItems,total}) => {
    return (
        <div className="container mt-5 pt-3 " style={{overflowX:'hidden'}}>

            <div className="row p-1 m-auto "> 
                <div className="col-md-2 "> <span className="btn font-weight-bold">Product</span> </div>
                <div className="col-md-2"> <span className="btn font-weight-bold">Description</span> </div>
                <div className="col-md-2"> <span className="btn font-weight-bold">quanity</span> </div>
                <div className="col-md-2"> <span className="btn font-weight-bold">price </span> </div>
                <div className="col-md-2"> <span className="btn font-weight-bold">Remove</span> </div>

             </div>
                <hr/>
                <div style={{overflowY:'scroll',overflowX:'hidden',height:'400px'}}>
                {
                 cartItems.map(cartItem=>(<CheckoutItem cartItem={cartItem} key={cartItem.id} />) )
                }
                </div>
             <hr/>

                 <span className="btn ml-auto font-weight-bold">Total:${total}</span>
                 {/* <StripeButton price={total}/> */}
        </div>
            
        
    )
}

const mapStateToProps=createStructuredSelector({
    cartItems:selectCarttems,
    total:selectCartTotal
})

export default connect(mapStateToProps)( Checkout)
