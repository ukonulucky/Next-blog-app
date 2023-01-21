import React from 'react'
import Image from "next/image"

function Logo(props:any) {
    const {renderDefault, title} = props
  return (
    <div className='flex item-center space-x-2 align-center justify-center'>
        <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        alt="logo"
        src="https://tse4.mm.bing.net/th?id=OIP.rjExmgmKTbfTBdhiO6pcZAHaE8&pid=Api&P=0"

        />
         {/* <>{renderDefault()}</> */}

       
    </div>
  )
}

export default Logo