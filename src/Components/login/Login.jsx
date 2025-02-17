import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login'>
            <div className='loginWrapper'>

                <div className='loginLeft'>
                    <h3 className='loginLogo'>Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friend and orther around the world with Lamasocial
                    </span>
                </div>
                <div className='loginRight'>
                <div className='loginBox'>
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='password' className="loginInput" />
                    <button className='loginButton'>Log In</button>
                    <span className='loginForgot'>Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New account</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Login