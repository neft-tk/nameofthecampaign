import React, { useState } from 'react'

export default function Login({ handleLogin }) {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const onLoginEmailChange = (e) => {
        setLoginEmail(e.target.value)
    }

    const onLoginPasswordChange = (e) => {
        setLoginPassword(e.target.value)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        handleLogin({
            email: loginEmail,
            password: loginPassword,
        });
    }

    return (
      <div>
        <form onSubmit={handleLoginSubmit}>
            <h3>Login</h3>

            <input 
            id="login-email" 
            name="login-email" 
            placeholder="Email" 
            value={loginEmail} 
            onChange={onLoginEmailChange}>
            </input>

            <input
            id="login-password"
            name="login-password"
            placeholder='Password'
            value={loginPassword}
            onChange={onLoginPasswordChange}>
            </input>

            <button type="submit">
                Login
            </button>
        </form>
      </div>
    )
}
