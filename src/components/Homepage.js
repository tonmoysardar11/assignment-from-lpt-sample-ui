import React from 'react'
import Sections from './Sections'

const Homepage = () => {
  return (
    <div className='h-screen w-screen grid grid-cols-12 grid-rows-8 gap-6'>
        <div className='grid col-span-1 row-span-8'>
            <Sections>
                Navbar
            </Sections>
        </div>
        <div className='grid col-span-11 row-span-3'>
            <Sections>
                Music Theory
            </Sections>
        </div>
        <div className='grid col-span-11 row-span-2'>
            <Sections>
                Categories
            </Sections>
        </div>
        <div className='grid col-span-11 row-span-2'>
            <Sections>
                My Learning
            </Sections>
        </div>
        <div className='grid col-span-11 row-span-1'>
            <Sections>
                Button
            </Sections>
        </div>
      
    </div>
  )
}

export default Homepage
