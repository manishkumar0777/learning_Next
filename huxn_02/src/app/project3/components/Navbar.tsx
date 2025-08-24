import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navItems = [
        {
            name : "Popular",
            ref: '/popular'
        },
        {
            name : "Recent",
            ref: '/recent'
        },
        {
            name : "Trendy",
            ref: '/trendy'
        },

    ]
  return (
        <div className='max-w-5xl p-1 bg-gray-800 rounded-sm shadow-xl'>

            <div className='border border-yellow-600 p-2 w-full flex flex-row  items-center'>

                {/* navigation items */}
                {navItems.map((item) => (
                    <Link
                     href={`${item.ref}`}
                     key={item.name}
                     className='mx-4 text-sm text-center text-gray-600 hover:text-yellow-600 transition ease-in-out duration-200'
                    >
                        {item.name}
                    </Link>
                ))}

                { /* Search BAr */}

                <div className='rounded-2xl ml-80 bg-gray-700 p-2 border border-gray-600 items-center hover:border 
                                 hover:border-yellow-500 transition duration-200 ease-in-out'
                >
                    <input 
                      className='text-gray-200 focus:outline-none w-full text-sm rounded-2xl'
                      placeholder='search'
                    />
                </div>

                {/* ring*/}
                <div className='rounded-full mx-20 h-10 w-10 bg-gray-700 border-1 
                                tran flex items-center justify-center border-gray-500 
                                hover:border-2 hover:border-yellow-600 transition duration-200 ease-in-out'
                >
                    <h1 className='text-center text-xl font-semibold hover:text-yellow-600 
                                    transition duration-200 ease-in-out text-gray-300'
                    >
                        M
                    </h1>
                </div>

            </div>
        </div>
  )
}

export default Navbar