import React from 'react'
import SignIn from '../../components/Auth/SiggnIn/SignIn'
import SignUp from '../../components/Auth/SignUp/SignUp';
const Auth = () => {
    return (
        <div className="container p-5">
            <div className="row mt-5">
                <SignUp/>
                <SignIn/>
            </div>
           
        </div>
    )
}

export default Auth
