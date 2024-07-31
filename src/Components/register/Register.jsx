import React from 'react'
import './register.css'

const Register = () => {
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
                        <input placeholder='UserName' className="loginInput" />
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='password' className="loginInput" />
                        <input placeholder='password Again' className="loginInput" />
                        <button className='loginButton'>Sign Up</button>
                        <button className='loginRegisterButton'>log into account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register