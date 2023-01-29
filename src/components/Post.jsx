import React from 'react'

export default function Post({ postTitle, postText, createdAt }) {
    return (
      <div>
        <h1>{postTitle}</h1>
        <p>{postText}</p>
        <p>{createdAt}</p>
      </div>
    )
}
