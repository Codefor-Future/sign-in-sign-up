import './formStyle.css'
import { connect } from 'react-redux'
import { useState } from "react";
import { signUp } from '../actions/userActions'

import React from 'react';
 const Login = (props)=>{
    const [email, setemail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setpassword] = useState('');

    let signUpHandler = (event)=>{
        event.preventDefault();
        props.signUp({email, password, firstName, lastName});
    }
    return(
        <div className='container'>
            <div className="msg-container" >
                {
                    props.isSignedUp&&
                    <div>
                        {/* {`Hi ${props.user.first_name} ${props.user.last_name} you have signed up!`} */}
                        {props.msg}
                    </div>
                }
                {
                    props.errorInSignUp&&
                    <div>
                        {`Error in signing up!`}
                    </div>
                }
            </div>
            <form onSubmit={signUpHandler} >
                <h1>Signup</h1>
                <div className='form-element-container'>
                    <input autoComplete="true" onChange={(e)=>{setfirstName(e.target.value)}} value={firstName} required type="text" className='firstName-textfield' name="firstName" />
                    <label>First name:</label>
                </div>
                <div className='form-element-container'>
                    <input autoComplete="true" onChange={(e)=>{setlastName(e.target.value)}} value={lastName} required type="text" className='lastName-textfield' name="lastName" />
                    <label>Last name:</label>
                </div>
                <div className='form-element-container'>
                    <input autoComplete="true" onChange={(e)=>{setemail(e.target.value)}} value={email} required type="email" className='email-textfield' name="email" />
                    <label>Email:</label>
                </div>
                <div className='form-element-container'>
                    <input autoComplete="true" onChange={(e)=>{setpassword(e.target.value)}} value={password} minLength="6" required type="password" className='password-textfield' name="password" />
                    <label>Password:</label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        user: state.userDetails,
        isSignedUp: state.isSignedUp,
        errorInSignUp: state.errorInSignUp,
        msg: state.msg
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
       signUp: (data)=>{dispatch(signUp(data))}
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Login)