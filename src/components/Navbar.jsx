/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between mx-[80px] border-b-[1px] border-[#343434] py-[30px]'>
            <p className='text-[#FFEE00] text-4xl font-bold'>Artone</p>
            <ul className='text-[#DEDEDE] flex items-center font-bold  gap-10'>
                <li className='text-[#DEDEDE]'>Our Work</li>
                <li className='text-[#DEDEDE]'>Features</li>
                <li className='text-[#DEDEDE]'>Scope of work</li>
                <li className='text-[#DEDEDE]'>Plans</li>
                <li className='text-[#DEDEDE]'>FAQs</li>
                <li className='text-[#DEDEDE] py-2 px-5 border border-[#343434] rounded-xl cursor-pointer'>Log in</li>
                <li className='text-[#000000] py-2 px-5 bg-[#FFEE00] rounded-xl cursor-pointer'>Subscribe</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar