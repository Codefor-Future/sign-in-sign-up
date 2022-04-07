import './formStyle.css'
import { connect } from 'react-redux'
import { useState } from "react";
import { login } from '../actions/userActions'

import React from 'react';
 const Login = (props)=>{
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    let login = (event)=>{
        event.preventDefault();
        props.login({email, password});
    }
    return(
        <div className='container'>
            <div className="msg-container" >
                {
                    props.isLoggedIn&&
                    <div>
                        {`Hi ${props.user.first_name} you are logged in!`}
                    </div>
                }
                {
                    props.errorInLogginIn&&
                    <div>
                        {`Error when loggin in!`}
                    </div>
                }
            </div>
            <form onSubmit={login} >
                <h1>Login</h1>
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
        isLoggedIn: state.isLoggedIn,
        errorInLogginIn: state.errorInLogginIn,
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
       login: (id)=>{dispatch(login(id))}
    // login: (id)=>{dispatch({type: 'LOGIN_SUCCESS', payload:{first_name:'sdfasdlf'}})}
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Login)