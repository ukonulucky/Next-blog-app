"use client"
import React from 'react'

type Props = {
    posts: Post[]
}

function BlogList({posts} : Props) {
    console.log(posts.length)
  return (
    <div>BlogL</div>
  )
}

export default BlogList