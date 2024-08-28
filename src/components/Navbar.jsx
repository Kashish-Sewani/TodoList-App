import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-pink-800 text-white py-3'>
        <div className="logo">
            <span className='text-xl font-bold mx-9'>iTask</span>
        </div>
        <ul className="flex gap-10 mx-9">
            <li className="cursor-pointer hover:font-bold transition-all">Home</li>
            <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
        </ul>
    </nav>
  ) 
}

export default Navbar
