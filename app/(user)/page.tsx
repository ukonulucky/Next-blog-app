import React from 'react'
import {previewData } from "next/headers"
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'



const query = groq`
*[_type=="post"]{
  ..., author->,
  categories[]->
  }
  | order(_createdAt desc)
`
async function HomePage() {

 if(previewData()){
  return<div>
    Preview mode
  </div>
 }
 const posts = await client.fetch(query)
 console.log(posts)
 return (
  <div>
      <h2 className='text-4xl'>page</h2>
      <p>Some text missing</p>
  </div>
)
}

export default HomePage