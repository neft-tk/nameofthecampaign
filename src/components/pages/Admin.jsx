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
        API.getUserFromToken(storedToken)
        // TODO: continue from here
      }
    }
  })
    return (
      <>
      <div>Admin</div>
      <Login/>
      <PostForm/>
      </>
    )
}
