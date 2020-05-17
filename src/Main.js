import React,{Component,Fragment} from 'react';
import HomePage from './container/homePage/homePage';
import Layout from './Layout/Layout'
import {Route,Switch, Redirect} from 'react-router-dom';
import ShopPage from './container/ShopPAge/ShopPage';
import Auth from './container/Auth/Auth';
import {connect} from 'react-redux'
import {auth,createuserProfleDocument} from './firebase/firebase';
import {setCurrentUser} from './redux/user/user-action';
import Checkout from './components/Checkout/Checkout';
import {selectCurrentUser} from './redux/user/user-slector';
import {createStructuredSelector} from 'reselect'
 class Main extends Component {

  unsubscrbeFromAuth=null
  componentDidMount() {

    const {setCurrentUser}=this.props
    // this.unsubscrbeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    //   if(userAuth){
    //  const userRef=await createuserProfleDocument(userAuth)      
    //     userRef.onSnapshot(snapshot=>{
    //       setCurrentUser({
    //         id:snapshot.id,
    //           ...snapshot.data()
    //         })
       
    //     })
    //   }
    //    setCurrentUser(userAuth);
    // })

  }
  

  render() {
    const {currentUser}=this.props
  return (
    <Fragment>
    <Layout/>
      <Switch>
      <Route path="/" exact  render={()=><HomePage/>} />
      <Route path="/shop"  render={()=> <ShopPage/> } />
      <Route exact path="/checkout"  component={Checkout} />
      <Route exact path="/sign" render={()=> (currentUser ? (<Redirect to="/"/> ): (<Auth/>) ) } />
      </Switch>
    </Fragment>
  );
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
})
export default  connect(mapStateToProps,mapDispatchToProps)(Main)