import React, { Component } from 'react'
import {signInWthGoogle, auth} from '../../../firebase/firebase'
export default class SignIn extends Component {
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
        try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({email:'',password:''})

        
        
        }catch(err){
            alert('some thing is wrong')
        }

    }
    render() {
        const { email,password}=this.state
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
                <button type="submit" className="btn ml-3 btn-success" onClick={signInWthGoogle}>Sign in With Google</button>
                
           </div>
        )
    }
}
