import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='w-screen'>
        <div className='bg-transparent text-white font-extrabold text-xl w-400 mx-auto p-12'>
            <ul className='flex justify-between'>
              <div className='flex gap-12 items-center'>
                <li className='hover:cursor-pointer'>aman.dev</li>
              </div>
              <div className='flex gap-10 items-center'>
                <li className='flex  items-center gap-1 hover:cursor-pointer hover:text-green-400 hover:rounded-full hover:bg-gray-500 p-2 hover:transition-all duration-800 ease-in-out'><span><img src="/svg/downloadResume.svg" alt="" /></span> Resume</li>
                <li className='hover:cursor-pointer'>Work</li>
                <li className='hover:cursor-pointer'>About Me</li>
              </div>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar


