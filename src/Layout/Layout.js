import React  from 'react';
import { NavLink} from 'react-router-dom';
import {auth} from '../firebase/firebase';
import { connect } from 'react-redux';
import Icon from '../components/Icon/icon'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../redux/user/user-slector'

 const Layout =({ currentUser})=>{
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
             <NavLink className="navbar-brand font-weight-bold " exact to="/">KING SELL</NavLink>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                                            
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                 
                    <ul className="navbar-nav ml-auto mr-5 ">
                    <Icon/>
                    <li className="nav-item active ">
                        <NavLink className="nav-link h5" exact to="/shop">SHOP </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink className="nav-link h5" exact to="/contact">Contact </NavLink>
                    </li>
                    <li className="nav-item active">
                    {currentUser ? 
                    (<a style={{cursor:'pointer'}} className="nav-link h5" to="#!" onClick={()=>auth.signOut()}>Sign out</a>) :
                    ( <NavLink className="nav-link h5" exact to="/sign">SIGN IN</NavLink>)}
                    </li>
                   
                    </ul>
                   

                </div>
                   
            </nav>
        )
}


const mapStateToProps=createStructuredSelector({
    currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(Layout)