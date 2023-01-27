import React, { useEffect, useState } from 'react'
import PostForm from '../PostForm'
import Login from '../Login'
import API from '../../utils/API'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('');

  useEffect(() => {
    if(!isLoggedIn) {
      const storedToken = localStorage.getItem('token');
      if(storedToken) {
        API.getUserFromToken(storedToken).then((data) => {
          if(data.user) {
            setToken(storedToken)
            setIsLoggedIn(true)
          };
        });
      } else {
        console.log('no stored token')
      }
    }
  })

  const handleLogin = (userObj) => {
    API.login(userObj).then((data) => {
      if(data.msg === 'invalid login credentials'){
        console.log('log in went wrong oopsie')
        setIsLoggedIn(false)
      }

      if(data.token) {
        setToken(data.token);
        localStorage.setItem('token', data.token)
      }
    })

  }
    return (
      <div>
        {isLoggedIn ? (
          <PostForm/>
        ) : (
          <>
          <Login handleLogin={handleLogin}/>
          </>
        )}
        </div>
    )
}