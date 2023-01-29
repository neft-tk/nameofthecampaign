import React, { useState } from 'react'
import moment from 'moment'


export default function Post({ postTitle, postText, createdAt }) {
  const [editedTime, setEditedTime] = useState('')

  
    return (
      <div>
        <h1>{postTitle}</h1>
        <p>{postText}</p>
        <p>{createdAt}</p>
      </div>
    )
}
