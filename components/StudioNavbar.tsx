import React from 'react'
import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className='flex item-center justify-between'>
      
       <Link href="/" className='flex item-center text-[#F7AB0A] p-2'>
       <ArrowUturnLeftIcon className='mr-2  text-[#F7AB0A] h-6 w-6' />
            Go To Website 
       </Link>
        </div>
        <>
        {props.renderDefault(props)}
        </>
    </div>
  )
}

export default StudioNavbar