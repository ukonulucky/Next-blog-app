import React from 'react'
import Image from "next/image"
import  Link from "next/link"
function Header() {
  console.log("code ran")
  return (
  <header className='flex item-center justify-between space-x-2 px-10 py-5 font-bold'>
   <div className='flex item-center space-x-5'>
   <Link href="/">
    <Image 
    src="/myPic.jpg"
    alt="logo"
    width={50}
    height={50}
    className="rounded-full h-10 w-10"
    />
    </Link>
    <h2>Lucky Tech Blog</h2>
   </div>
   <div>
    <Link href="https://ukonulucky.vercel.app/" 
    className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex item-center rounded-full text-center'
    >
      Click TO Know More...
    </Link>
   </div>


  </header>
  )
}

export default Header