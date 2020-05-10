import React from 'react'
import './shopItem.scss';
import {addItems} from '../../../redux/PhotoItem/photo-action'
import { connect } from 'react-redux';
const ShowPhotoItem = ({item,addItem}) => {
    const {id,name,price,imageUrl}=item
    return (
        <div className="p-1 col-md-3 shadow-lg img">
                <div className="img"   style={{
                    backgroundImage:`url(${imageUrl})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    width:'100%',
                    height:'400px'
                    
                }}>
                    <button className="mt-5 btn w-100 font-italic text-white h1 font-weight-bolder border" onClick={()=>addItem(item)}>ADD TO BAG</button>
                </div>

                <div className="d-flex p-1 bg-dark text-white justify-content-between">
                <span className="">{name}</span>
                <span className="">${price}</span>

                </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    addItem:(item)=>dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(ShowPhotoItem)
