import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import {clearItem,addItems,removeItem} from '../../../redux/PhotoItem/photo-action';
import Toggle from './Modal/Modal';
import {modalFpoto} from '../../../redux/modal/modal-action'
import {ModalSelectitem} from '../../../redux/modal/modal-selector'
import {createStructuredSelector} from 'reselect'
class CheckoutItem extends Component{

    render(){
        
        const {cartItem,clearItem,remove,addItem,modal,item}=this.props;
        const {imageUrl,price,name,quantity}=cartItem
        console.log(item);

        return(
            <Fragment>
            <div className="row mt-1 " >
            <div className="col-lg-2" onClick={()=>modal(cartItem)} >
                <img  src={imageUrl}   type="button" data-toggle="modal" data-target="#imgshow" className="img-fluid"  alt="checkout" />
            </div>
            <div className="col-md-2">
                <span className="btn">{name}</span>
            </div>
            <div className="col-md-2">
                <span className="btn" onClick={()=>remove(cartItem)}><i className="fa fa-chevron-left "></i></span>
                <span className="btn">{quantity}</span>
                <span className="btn" onClick={()=>addItem(cartItem)}><i className="fa fa-chevron-right "></i></span>
            </div>
            <div className="col-md-2">
                <span className="btn">${price}</span>
            </div>
     <div className="col-md-2" style={{cursor:'pointer'}} onClick={()=>clearItem(cartItem)}>

                <span className="btn" ><i className="fa fa-remove text-danger"></i></span>
            </div>
          <Toggle item={item} remove={remove} />
        </div>
       </Fragment>
        )
    }
}


const mapStateToProps=createStructuredSelector({
    item:ModalSelectitem
})

const mapDispatchToProps=dispatch=>({
clearItem:(item)=>dispatch(clearItem(item)),
remove:item=>dispatch(removeItem(item)),
addItem:item=>dispatch(addItems(item)),
modal:(item)=>dispatch(modalFpoto(item))

})


export default connect(mapStateToProps,mapDispatchToProps)(CheckoutItem)
