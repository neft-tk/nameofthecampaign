import React, { useEffect, useState } from 'react'
import moment from 'moment'


export default function Post({ postTitle, postText, createdAt }) {
  const [editedTime, setEditedTime] = useState('')

  useEffect(() => {
    setEditedTime(moment(createdAt).format('MM/DD/YYYY'))
  },[])


    return (
      <div>
        <h1>{postTitle}</h1>
        <p>{postText}</p>
        <p>{editedTime}</p>
      </div>
    )
}
