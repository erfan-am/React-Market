import React, { Component } from 'react'
import { auth, createuserProfleDocument } from '../../../firebase/firebase'

export default class SignUp extends Component {
    state={
        email:'',
        password:'',
        displayName:'',
        confirm:''
    }
    onChange=(e)=>{
        e.preventDefault()

        this.setState({[e.target.name]:e.target.value})
    }
    SubmittHandle=async (e)=>{
        e.preventDefault()

        const { email,password,displayName,confirm}=this.state
        if(password !== confirm){
            alert('Some thin is wrong');
            return
        }
        try{
         const {user}=await auth.createUserWithEmailAndPassword(email,password)
         await createuserProfleDocument(user,{displayName});

        this.setState({email:'',password:'',confirm:'',displayName:''})
        }catch(err){
            console.log(err);
            
        }
    }
    render() {
        const { email,password,displayName,confirm}=this.state
        return (
           <div className="col-md-6  pb-2">
           <h2>I don't have a account </h2>
           <span>Sign up with your email and password</span>
                <form onSubmit={this.SubmittHandle}>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Name:</label>
                    <input name="displayName" onChange={this.onChange} value={displayName} type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                    <label >Email:</label>
                    <input name="email" onChange={this.onChange} value={email} type="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Password:</label>
                    <input name="password" onChange={this.onChange} value={password} type="password" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                    <label>Confirm Password:</label>
                    <input name="confirm" onChange={this.onChange} value={confirm} type="password" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-danger">Sign Up</button>
            </form>
           </div>
        )
    }
}
