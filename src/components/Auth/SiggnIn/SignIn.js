import React, { Component } from 'react'
import {googleSingin,EmailSingin } from '../../../redux/user/user-action'
import { connect } from 'react-redux'
 class SignIn extends Component {
    state={
        email:'',
        password:''
    }
    onChange=(e)=>{
        e.preventDefault()

        this.setState({[e.target.name]:e.target.value})
    }
    SubmittHandle=async(e)=>{
        e.preventDefault()

        const {email,password} =this.state
        const {EmailSingin} =this.props
        EmailSingin(email,password)

    }
    render() {
        const { email,password}=this.state;
        const {googleSingin} =this.props
        return (
           <div className="col-md-6">
           <h2>I already an account </h2>
           <span>Sgn in with your email and password</span>

                <form   >
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label >Email:</label>
                            <input name="email" onChange={this.onChange} value={email} type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label>Password:</label>
                            <input name="password" onChange={this.onChange} value={password} type="password" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                     
                </form>
                <button type="submit" className="btn btn-primary" onClick={this.SubmittHandle}>Sign in</button>
                <button type="submit" className="btn ml-3 btn-success" onClick={googleSingin}>Sign in With Google</button>
                
           </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    googleSingin:()=>dispatch(googleSingin()),
    EmailSingin:(email,password)=>dispatch(EmailSingin({email,password}))
})

export default  connect(null,mapDispatchToProps)(SignIn)