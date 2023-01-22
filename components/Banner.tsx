import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row  justify-between lg:space-x-5 px-10 py-5 mb-10 font-bold'>
        <div>
        <h1 className="text-6xl mb-2">
            Lucky's Daily Blog
        </h1>
        <h2 className="mt-5
        md:mt-0">
            Welcome to {" "}
            <span className="underline decoration-4
            decoration-[#F7AB0A]">
                Every Developers
            </span>{" "} 
            favourite blog in the Devosphere

        </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New product features | latest technology | the weekly debugging nightmares and more...
        </p>
        <div></div>


    </div>
  )
}

export default Banner