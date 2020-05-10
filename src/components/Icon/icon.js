import React from 'react'
import {ReactComponent as Logo} from '../../assets/Shop.svg'
import { Link, withRouter } from 'react-router-dom';
import PhotoSmall from '../photosmall/photosmall'
import { connect } from 'react-redux';
import {selectCartitemsCount,selectCarttems} from '../../redux/PhotoItem/photo-selector';
import {createStructuredSelector} from 'reselect'

const icon = ({items,count}) => {
    return (
        <li className="nav-item active dropdown">
            <a className="nav-link " id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Logo style={style}/>
                    <span className="btn">{count}</span>
            </a>
            <div style={{width:'290px'}} className="dropdown-menu mr-5" aria-labelledby="dropdownMenuLink">
                <div className=" d-flex flex-column " >


                    <div style={{overflowY:'scroll',height:'250px',maxHeight:'300px'}}>
                    { items.length >0 ? items.map(item=> <PhotoSmall  item={item} key={item.id} />) : <p className="text-muted text-center mt-5">Please Chose your clothes</p>}
                    </div>

                    <Link to="/checkout" className="btn btn-primary mt-2">CHECK</Link>
                </div>
                
                </div>
            
        </li>
   
    )
}

const style={
    position:'absolute',
    width:'40px',
    height:'30px',
    cursor:'pointer',
}

const mapStateToProps=createStructuredSelector({
    items:selectCarttems,
    count:selectCartitemsCount
})
export default withRouter(connect(mapStateToProps)(icon)
)